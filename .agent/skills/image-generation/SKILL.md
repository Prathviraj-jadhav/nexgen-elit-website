---
name: image-generation
description: "AI image generation guide. Use when: creating images from text descriptions, generating visual assets, producing artwork, creating UI mockups, generating product images, or building any application that needs AI-generated images."
argument-hint: "Describe the image you want to generate including style, subject, and dimensions"
---

# Image Generation Skill

## When to Use This Skill

- Generating website hero images, illustrations, and visual assets
- Creating social media graphics
- Producing product mockups and lifestyle images
- Generating UI illustrations and icons
- Creating concept art and creative visuals
- Building image generation features into applications

---

## Tool Selection Guide

| Tool | Best For | Strengths | API |
|------|----------|-----------|-----|
| **DALL-E 3** | Professional, detailed prompts | Text in images, instruction following | OpenAI API |
| **Stable Diffusion** | Easy use, creative | Variety, free self-hosted | Stability AI / Replicate |
| **Flux.1** | Photorealism, portrait | Ultra-realistic output | Replicate / Fal.ai |
| **Midjourney** | Artistic quality | Stylistic range | Via Discord API |
| **Ideogram** | Text & logos in images | Typography-heavy designs | Ideogram API |

---

## Implementation Patterns

### 1. OpenAI DALL-E 3 (Recommended  Best Instruction Following)

```python
from openai import OpenAI
import base64
import os
from pathlib import Path

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def generate_image(
    prompt: str,
    output_path: str,
    size: str = "1024x1024",
    quality: str = "standard",
    style: str = "vivid"
) -> dict:
    """
    Generate an image using DALL-E 3.
    
    DALL-E 3 sizes:
      - "1024x1024"  (Square)
      - "1792x1024"  (Landscape, 16:9 approx)
      - "1024x1792"  (Portrait)
    
    quality: "standard" (faster, cheaper) | "hd" (more detail)
    style:   "vivid" (dramatic) | "natural" (realistic, subtle)
    
    Pricing: standard $0.04/img, hd $0.08/img (1024x1024)
    """
    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size=size,
        quality=quality,
        style=style,
        response_format="b64_json",  # or "url"
        n=1
    )
    
    # Decode and save
    image_data = response.data[0].b64_json
    buffer = base64.b64decode(image_data)
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "wb") as f:
        f.write(buffer)
    
    return {
        "path": output_path,
        "revised_prompt": response.data[0].revised_prompt,  # DALL-E 3 rewrites your prompt
        "size": size,
        "quality": quality
    }

# Usage
result = generate_image(
    prompt="A professional product photo of wireless headphones on a white background, studio lighting, high quality",
    output_path="./assets/product.png",
    size="1024x1024",
    quality="hd"
)
print(f"Generated: {result['path']}")
print(f"Actual prompt used: {result['revised_prompt']}")
```

### 2. TypeScript / Node.js (DALL-E 3)

```typescript
import OpenAI from 'openai'
import fs from 'fs'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function generateImage(
  prompt: string,
  outputPath: string,
  size: '1024x1024' | '1792x1024' | '1024x1792' = '1024x1024',
  quality: 'standard' | 'hd' = 'standard'
): Promise<string> {
  const response = await client.images.generate({
    model: 'dall-e-3',
    prompt,
    size,
    quality,
    n: 1,
    response_format: 'b64_json',
  })

  const imageData = response.data[0].b64_json!
  const buffer = Buffer.from(imageData, 'base64')
  fs.writeFileSync(outputPath, buffer)

  return outputPath
}
```

### 3. Next.js API Route

```typescript
// src/app/api/generate-image/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI()

export async function POST(req: NextRequest) {
  const { prompt, size = '1024x1024', quality = 'standard' } = await req.json()

  if (!prompt?.trim()) {
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
  }

  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      size,
      quality,
      n: 1,
      response_format: 'url',  // Return URL instead of base64
    })

    return NextResponse.json({
      url: response.data[0].url,
      revisedPrompt: response.data[0].revised_prompt,
    })
  } catch (error: any) {
    if (error?.error?.code === 'content_policy_violation') {
      return NextResponse.json(
        { error: 'Image violates content policy' },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 })
  }
}
```

### 4. Stable Diffusion via Replicate

```python
import replicate
import os
import httpx

def generate_with_flux(
    prompt: str,
    output_path: str,
    aspect_ratio: str = "1:1",
    model: str = "black-forest-labs/flux-schnell"
) -> str:
    """
    Generate using Flux.1 via Replicate.
    
    Models:
      - flux-schnell: Fast, free tier
      - flux-dev:     Higher quality, $0.03/img
      - flux-pro:     Best quality, $0.055/img
    
    aspect_ratio: "1:1", "16:9", "9:16", "2:3", "3:2", "4:5", "5:4"
    """
    output = replicate.run(
        model,
        input={
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "output_format": "png",
            "output_quality": 90,
            "num_outputs": 1,
        }
    )
    
    # Download the generated image
    image_url = output[0]
    response = httpx.get(image_url)
    
    with open(output_path, "wb") as f:
        f.write(response.content)
    
    return output_path
```

---

## Prompt Engineering Guide

### Anatomy of an Effective Image Prompt

```
[Subject/Action] + [Style/Medium] + [Lighting] + [Composition] + [Quality Markers]
```

| Element | Examples |
|---------|---------|
| Subject | "A minimalist wooden desk" |
| Style | "product photography" / "oil painting" / "3D render" / "watercolor" |
| Lighting | "studio lighting" / "golden hour" / "dramatic side lighting" / "soft natural light" |
| Composition | "front view" / "aerial view" / "close-up" / "wide shot" |
| Background | "white background" / "blurred bokeh background" / "gradient" |
| Quality | "professional" / "high quality" / "8K" / "photorealistic" |
| Negative* | "no text" / "no watermark" (*DALL-E 3 doesn't use negative prompts) |

### Prompt Templates by Use Case

```python
PROMPT_TEMPLATES = {
    "hero_banner": """
        {subject}, modern and professional, 
        wide angle, cinematic lighting, high resolution, 
        suitable for website hero banner
    """,
    
    "product_photo": """
        Professional product photography of {product},
        white background, studio lighting, sharp focus,
        commercial quality, high detail
    """,
    
    "social_graphic": """
        {subject}, vibrant colors, modern graphic design style,
        clean composition, eye-catching, digital art
    """,
    
    "blog_illustration": """
        Flat design illustration of {subject},
        modern minimal style, professional colors,
        suitable for tech blog post
    """,
    
    "logo_concept": """
        Minimal clean logo design for {company_type},
        geometric shapes, {primary_color} accent,
        white background, vector style
    """,
}
```

### Prompt Quality Improvement

```python
def enhance_prompt(basic_prompt: str) -> str:
    """Enhance a basic prompt with quality markers."""
    quality_additions = [
        "professional quality",
        "high detail",
        "well-composed",
    ]
    
    # Add quality markers if not already present
    enhanced = basic_prompt
    for marker in quality_additions:
        if marker.lower() not in basic_prompt.lower():
            enhanced += f", {marker}"
    
    return enhanced

# Before: "a cat"
# After:  "a cat, professional quality, high detail, well-composed"
```

---

## Batch Generation

```python
from openai import OpenAI
import os

client = OpenAI()

def batch_generate(items: list[dict], output_dir: str = "./generated") -> list[dict]:
    """
    items: [{"prompt": "...", "filename": "hero.png", "size": "1792x1024"}, ...]
    """
    os.makedirs(output_dir, exist_ok=True)
    results = []
    
    for item in items:
        try:
            response = client.images.generate(
                model="dall-e-3",
                prompt=item["prompt"],
                size=item.get("size", "1024x1024"),
                quality=item.get("quality", "standard"),
                n=1,
                response_format="b64_json"
            )
            
            path = os.path.join(output_dir, item["filename"])
            buffer = base64.b64decode(response.data[0].b64_json)
            with open(path, "wb") as f:
                f.write(buffer)
            
            results.append({
                "filename": item["filename"],
                "success": True,
                "path": path,
                "revised_prompt": response.data[0].revised_prompt
            })
            print(f"✓ Generated: {item['filename']}")
            
        except Exception as e:
            results.append({"filename": item.get("filename", "?"), "success": False, "error": str(e)})
            print(f"✗ Failed: {item.get('filename')}  {e}")
    
    return results

# Usage
assets = [
    {"prompt": "Modern tech company hero banner, blue theme", "filename": "hero.png", "size": "1792x1024"},
    {"prompt": "Team collaboration, diverse professionals", "filename": "team.png", "size": "1024x1024"},
    {"prompt": "Abstract data visualization, dark background", "filename": "data.png", "size": "1024x1024"},
]
results = batch_generate(assets, "./public/images")
```

---

## Common DALL-E 3 Fixes

| Problem | Solution |
|---------|---------|
| Prompt rewritten too aggressively | Add "I NEED..." to emphasize requirement: "I NEED a product on white background" |
| Text in image is wrong | Specify exact text in quotes: `with the word "Hello" written on it` |
| Style not matching | Lead with style: `Flat design illustration of...` vs `...in flat design` |
| Too busy/cluttered | Add `minimal composition, clean design, simple` |
| Not photorealistic | Add `photorealistic, DSLR photography, natural lighting` |
