---
name: VLM
description: "Vision Language Model skill for image understanding and analysis. Use when: analyzing images, describing visual content, extracting text from images (OCR), comparing photos, classifying images, understanding diagrams/charts/UI screenshots, product image analysis, document understanding, or any image+text AI task."
argument-hint: "Describe the image analysis task or what you want to understand from images"
---

# VLM  Vision Language Model Skill

## When to Use This Skill

- Analyzing or describing images
- Extracting text from photos (OCR)
- Understanding charts, graphs, diagrams
- Comparing multiple images
- UI screenshot analysis and feedback
- Product image cataloging
- Document understanding (receipts, invoices, forms)
- Medical image preliminary review (with disclaimers)
- Content moderation
- Generating alt text for accessibility

---

## Model Selection

| Model | Vision Quality | Context | Speed | Cost |
|-------|---------------|---------|-------|------|
| **GPT-4o** | Excellent | 128K | Fast | $$$ |
| **GPT-4o-mini** | Very Good | 128K | Fastest | $ |
| **Claude 3.5 Sonnet** | Excellent | 200K | Fast | $$ |
| **Gemini 1.5 Pro** | Excellent | 1M tokens | Fast | $$ |
| **LLaVA** | Good | Varies | Self-hosted | Free |

---

## Core Implementation

### 1. Single Image Analysis (Python)

```python
from openai import OpenAI
import base64
import os
from pathlib import Path

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def analyze_image_url(
    image_url: str,
    question: str,
    model: str = "gpt-4o-mini",
    detail: str = "auto"  # "low", "high", or "auto"
) -> str:
    """
    Analyze an image from a URL.
    
    detail="low":  Faster, cheaper (~85 tokens per image)
    detail="high": Better for small text/details (~1000+ tokens)
    detail="auto": Let model decide based on image size
    """
    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": question},
                    {
                        "type": "image_url",
                        "image_url": {"url": image_url, "detail": detail}
                    }
                ]
            }
        ],
        max_tokens=1024
    )
    return response.choices[0].message.content

def analyze_local_image(
    image_path: str,
    question: str,
    model: str = "gpt-4o-mini"
) -> str:
    """Analyze a local image file by encoding to base64."""
    
    # Determine MIME type
    suffix = Path(image_path).suffix.lower()
    mime_types = {
        ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
        ".png": "image/png", ".gif": "image/gif",
        ".webp": "image/webp"
    }
    mime_type = mime_types.get(suffix, "image/jpeg")
    
    # Read and encode
    with open(image_path, "rb") as f:
        image_data = base64.b64encode(f.read()).decode("utf-8")
    
    data_url = f"data:{mime_type};base64,{image_data}"
    
    return analyze_image_url(data_url, question, model)

# Usage
description = analyze_image_url(
    "https://example.com/product.jpg",
    "Describe this product in detail for an e-commerce listing"
)

# Local file
feedback = analyze_local_image(
    "./screenshot.png",
    "What UI/UX issues do you see in this screenshot? Be specific."
)
```

### 2. Multiple Images / Comparison

```python
def compare_images(
    images: list[dict],  # [{"url": "..."}, {"path": "..."}, ...]
    question: str,
    model: str = "gpt-4o-mini"
) -> str:
    """
    Compare or analyze multiple images together.
    
    images format:
    - URL:   {"url": "https://..."}
    - Local: {"path": "./image.jpg"}
    """
    content = [{"type": "text", "text": question}]
    
    for img in images:
        if "url" in img:
            content.append({
                "type": "image_url",
                "image_url": {"url": img["url"]}
            })
        elif "path" in img:
            # Encode local file
            with open(img["path"], "rb") as f:
                data = base64.b64encode(f.read()).decode()
            suffix = Path(img["path"]).suffix.lower()
            mime = {"jpg": "image/jpeg", "jpeg": "image/jpeg",
                    "png": "image/png", "webp": "image/webp"}.get(suffix[1:], "image/jpeg")
            content.append({
                "type": "image_url",
                "image_url": {"url": f"data:{mime};base64,{data}"}
            })
    
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": content}],
        max_tokens=2048
    )
    return response.choices[0].message.content

# Usage
comparison = compare_images(
    images=[
        {"url": "https://example.com/before.jpg"},
        {"url": "https://example.com/after.jpg"}
    ],
    question="What changed between the before and after images?"
)
```

### 3. TypeScript / Node.js

```typescript
import OpenAI from 'openai'
import fs from 'fs'
import path from 'path'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function analyzeImageUrl(
  imageUrl: string,
  question: string,
  model = 'gpt-4o-mini'
): Promise<string> {
  const response = await client.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: question },
          { type: 'image_url', image_url: { url: imageUrl, detail: 'auto' } }
        ]
      }
    ],
    max_tokens: 1024
  })

  return response.choices[0].message.content ?? ''
}

async function analyzeLocalImage(imagePath: string, question: string): Promise<string> {
  const imageBuffer = fs.readFileSync(imagePath)
  const base64Image = imageBuffer.toString('base64')
  const ext = path.extname(imagePath).slice(1).toLowerCase()
  const mimeType = ext === 'jpg' ? 'image/jpeg' : `image/${ext}`
  const dataUrl = `data:${mimeType};base64,${base64Image}`
  
  return analyzeImageUrl(dataUrl, question)
}
```

### 4. Next.js API Route (File Upload)

```typescript
// src/app/api/analyze-image/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI()

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const image = formData.get('image') as File
    const question = formData.get('question') as string ?? 'Describe this image.'

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Convert to base64
    const buffer = await image.arrayBuffer()
    const base64 = Buffer.from(buffer).toString('base64')
    const mimeType = image.type
    const dataUrl = `data:${mimeType};base64,${base64}`

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: question },
            { type: 'image_url', image_url: { url: dataUrl, detail: 'auto' } }
          ]
        }
      ],
      max_tokens: 1024
    })

    return NextResponse.json({
      analysis: response.choices[0].message.content
    })
  } catch (error) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 })
  }
}
```

---

## Specialized Analysis Prompts

```python
# Structured prompts for specific use cases

PROMPTS = {
    "product_description": """
        Analyze this product image and provide:
        1. Product type and category
        2. Key visible features
        3. Color/material/finish
        4. Approximate size (if determinable)
        5. Suggested search keywords
        Format as JSON.
    """,
    
    "ui_review": """
        Review this UI screenshot and identify:
        1. Layout issues (alignment, spacing, hierarchy)
        2. Accessibility concerns (contrast, touch targets, labels)
        3. UX problems (confusing flows, unclear CTAs)
        4. What works well
        5. Top 3 specific improvement recommendations
    """,
    
    "document_extraction": """
        Extract all text from this document image.
        Preserve the structure and formatting as markdown.
        If it's a table, use markdown table format.
        If it's a form, list field names and their values.
    """,
    
    "chart_analysis": """
        Analyze this chart/graph and extract:
        1. Chart type
        2. What is being measured (axes/labels)
        3. Key data points and values
        4. Main trend or insight
        5. Time period (if applicable)
        Format as structured JSON.
    """,
    
    "alt_text": """
        Write concise, descriptive alt text for this image for accessibility.
        - Be specific but brief (1-2 sentences)
        - Describe visual content, not what the image "means"
        - Include text visible in the image
        - Skip "image of" or "photo of"  start with the subject
    """
}

# Usage
analysis = analyze_local_image("./chart.png", PROMPTS["chart_analysis"])
```

---

## OCR (Text Extraction from Images)

```python
def extract_text_from_image(image_path: str) -> str:
    """Extract all text from an image (OCR alternative)."""
    
    prompt = """Extract ALL text from this image exactly as it appears.
    - Preserve line breaks and spacing structure
    - Include numbers, symbols, and punctuation
    - For tables, use | separators
    - Note [UNCLEAR] for any unreadable text"""
    
    return analyze_local_image(image_path, prompt)

# Batch OCR
def batch_ocr(image_paths: list[str]) -> list[dict]:
    results = []
    for path in image_paths:
        try:
            text = extract_text_from_image(path)
            results.append({"file": path, "success": True, "text": text})
        except Exception as e:
            results.append({"file": path, "success": False, "error": str(e)})
    return results
```

---

## Best Practices

1. **Use detail="low"** for bulk categorization, **detail="high"** for text extraction or fine details
2. **Compress images** larger than 1MB before sending (reduces cost and latency)
3. **Be specific** in your prompts  "What are the exact pixel dimensions?" → poor; "What UI layout pattern is used?" → better
4. **Validate image formats**: Only JPEG, PNG, GIF, WebP supported by most APIs
5. **Privacy**: Never send images containing PII without proper consent and security measures
6. **Batch carefully**: Most APIs limit concurrent requests; implement queuing for bulk processing

---

## Supported Formats

| Format | Extensions | Max Size |
|--------|-----------|---------|
| JPEG | .jpg, .jpeg | 20MB |
| PNG | .png | 20MB |
| GIF | .gif | 20MB (first frame for static) |
| WebP | .webp | 20MB |

---

## Error Handling

```python
from openai import BadRequestError

def safe_analyze(image_source: str, question: str) -> dict:
    """Analyze with full error handling."""
    try:
        if image_source.startswith(("http://", "https://")):
            result = analyze_image_url(image_source, question)
        else:
            result = analyze_local_image(image_source, question)
        
        return {"success": True, "analysis": result}
        
    except BadRequestError as e:
        if "image_url" in str(e):
            return {"success": False, "error": "Invalid or inaccessible image URL"}
        return {"success": False, "error": f"Bad request: {e}"}
    
    except FileNotFoundError:
        return {"success": False, "error": f"Image file not found: {image_source}"}
    
    except Exception as e:
        return {"success": False, "error": str(e)}
```
