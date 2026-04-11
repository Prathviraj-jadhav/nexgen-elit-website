---
name: TTS
description: "Text-to-Speech (TTS) guide for converting text to natural speech audio. Use when: generating audio from text, building voice assistants, creating audiobooks, accessibility features, IVR systems, podcast generation, narrating content, or any text-to-audio conversion task."
argument-hint: "Describe what audio/TTS output you need"
---

# TTS  Text to Speech Skill

## When to Use This Skill

- Generating narration for video/presentations
- Building voice assistants or chatbots with audio responses
- Creating audiobook or podcast audio
- Accessibility features (read-aloud)
- IVR (Interactive Voice Response) systems
- Language learning pronunciation audio
- Notification audio generation

---

## Tool Selection Guide

| Tool | Voices | Quality | Languages | Cost |
|------|--------|---------|-----------|------|
| **OpenAI TTS** | 6 preset | Excellent | Multilingual (auto) | $15/1M chars |
| **ElevenLabs** | 1000s + clone | Best | 29 languages | $0.18/1K chars |
| **Google Cloud TTS** | 380+ | Very Good | 100+ | $4/1M chars |
| **Azure Neural TTS** | 400+ | Very Good | 140+ | $15/1M chars |
| **Coqui TTS** | Cloneable | Good | 16+ | Free (OSS) |
| **Bark** | Expressive | Good | Multilingual | Free (OSS) |

---

## Implementation Patterns

### 1. OpenAI TTS API (Simplest, Best Quality/Price)

```python
from openai import OpenAI
from pathlib import Path
import os

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def text_to_speech(
    text: str,
    output_path: str,
    voice: str = "nova",
    model: str = "tts-1-hd",
    speed: float = 1.0
) -> str:
    """
    Convert text to speech using OpenAI TTS.
    
    Voices: alloy, echo, fable, onyx, nova, shimmer
    Models:
      - tts-1:    Faster, optimized for real-time
      - tts-1-hd: Higher quality, best for final output
    Speed: 0.25 to 4.0 (1.0 = normal)
    Max characters: 4096 per request
    
    Returns: output_path
    """
    if len(text) > 4096:
        raise ValueError(f"Text exceeds 4096 chars ({len(text)}). Use chunk_and_speak() instead.")
    
    response = client.audio.speech.create(
        model=model,
        voice=voice,
        input=text,
        speed=speed,
        response_format="mp3"  # mp3, opus, aac, flac, wav, pcm
    )
    
    response.stream_to_file(output_path)
    return output_path

# Usage
text_to_speech(
    "Welcome to our application. Let's get started!",
    output_path="./welcome.mp3",
    voice="nova"
)
```

### 2. Voice Character Guide (OpenAI)

```
alloy    Neutral, balanced, professional
echo     Male, warm, clear
fable    Narrative, expressive, storytelling
onyx     Deep, authoritative, confident  
nova     Female, warm, natural (recommended for most uses)
shimmer  Soft, gentle, friendly
```

### 3. ElevenLabs (Best Quality, Voice Cloning)

```python
from elevenlabs import VoiceSettings
from elevenlabs.client import ElevenLabs
import os

client = ElevenLabs(api_key=os.environ["ELEVENLABS_API_KEY"])

def elevenlabs_tts(
    text: str,
    output_path: str,
    voice_id: str = "21m00Tcm4TlvDq8ikWAM",  # Rachel (default)
    stability: float = 0.5,
    similarity_boost: float = 0.75
) -> str:
    """
    Generate speech with ElevenLabs.
    
    Find voice IDs at: https://api.elevenlabs.io/v1/voices
    stability:       0-1, lower = more expressive, higher = more consistent
    similarity_boost: 0-1, higher = stronger original voice character
    """
    audio = client.generate(
        text=text,
        voice=voice_id,
        model="eleven_multilingual_v2",
        voice_settings=VoiceSettings(
            stability=stability,
            similarity_boost=similarity_boost,
            style=0.0,
            use_speaker_boost=True
        )
    )
    
    with open(output_path, "wb") as f:
        for chunk in audio:
            f.write(chunk)
    
    return output_path
```

### 4. TypeScript / Node.js Pattern

```typescript
import OpenAI from 'openai'
import { createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import path from 'path'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function textToSpeech(
  text: string,
  outputPath: string,
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' = 'nova'
): Promise<string> {
  if (text.length > 4096) {
    throw new Error(`Text too long: ${text.length} chars (max 4096)`)
  }

  const response = await client.audio.speech.create({
    model: 'tts-1-hd',
    voice,
    input: text,
    response_format: 'mp3',
  })

  const buffer = Buffer.from(await response.arrayBuffer())
  const { writeFile } = await import('fs/promises')
  await writeFile(outputPath, buffer)

  return outputPath
}
```

### 5. Next.js API Route (Streaming)

```typescript
// src/app/api/tts/route.ts
import { NextRequest } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  const { text, voice = 'nova' } = await req.json()

  if (!text || text.length > 4096) {
    return Response.json({ error: 'Invalid text (max 4096 chars)' }, { status: 400 })
  }

  try {
    const response = await openai.audio.speech.create({
      model: 'tts-1',  // Use tts-1 for faster streaming
      voice,
      input: text,
      response_format: 'mp3',
    })

    const audioBuffer = await response.arrayBuffer()

    return new Response(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': String(audioBuffer.byteLength),
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    return Response.json({ error: 'TTS generation failed' }, { status: 500 })
  }
}
```

---

## Handling Long Text (> 4096 chars)

```python
import re
from openai import OpenAI

client = OpenAI()

def split_into_chunks(text: str, max_chars: int = 4000) -> list[str]:
    """Split text into chunks at sentence boundaries."""
    # Split on sentence boundaries
    sentences = re.split(r'(?<=[.!?])\s+', text)
    
    chunks = []
    current_chunk = ""
    
    for sentence in sentences:
        if len(current_chunk) + len(sentence) + 1 <= max_chars:
            current_chunk = (current_chunk + " " + sentence).strip()
        else:
            if current_chunk:
                chunks.append(current_chunk)
            # Handle very long single sentences
            if len(sentence) > max_chars:
                words = sentence.split()
                temp = ""
                for word in words:
                    if len(temp) + len(word) + 1 <= max_chars:
                        temp = (temp + " " + word).strip()
                    else:
                        chunks.append(temp)
                        temp = word
                if temp:
                    chunks.append(temp)
            else:
                current_chunk = sentence
    
    if current_chunk:
        chunks.append(current_chunk)
    
    return chunks

def speak_long_text(text: str, output_dir: str, voice: str = "nova") -> list[str]:
    """Transcribe long text by splitting into chunks."""
    chunks = split_into_chunks(text)
    output_files = []
    
    for i, chunk in enumerate(chunks):
        output_path = f"{output_dir}/chunk_{i:03d}.mp3"
        
        response = client.audio.speech.create(
            model="tts-1-hd",
            voice=voice,
            input=chunk
        )
        response.stream_to_file(output_path)
        output_files.append(output_path)
        print(f"Generated chunk {i+1}/{len(chunks)}")
    
    return output_files

# Merge audio files (requires ffmpeg)
def merge_audio_files(file_list: list[str], output_path: str):
    import subprocess
    list_file = "/tmp/audio_list.txt"
    with open(list_file, "w") as f:
        for fp in file_list:
            f.write(f"file '{fp}'\n")
    
    subprocess.run([
        "ffmpeg", "-f", "concat", "-safe", "0",
        "-i", list_file, "-c", "copy", output_path
    ], check=True)
```

---

## Text Preparation for TTS

```python
import re

def prepare_text_for_tts(text: str) -> str:
    """Clean and prepare text for best TTS output."""
    
    # Remove markdown formatting
    text = re.sub(r'[#*_`]', '', text)
    text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', text)  # [link](url) → link
    
    # Expand common abbreviations
    expansions = {
        r'\bDr\.\b':   'Doctor',
        r'\bMr\.\b':   'Mister',
        r'\bMrs\.\b':  'Missus',
        r'\bMs\.\b':   'Miss',
        r'\betc\.\b':  'et cetera',
        r'\bvs\.\b':   'versus',
        r'\bapprox\.\b': 'approximately',
    }
    for pattern, replacement in expansions.items():
        text = re.sub(pattern, replacement, text)
    
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Add pauses at punctuation for better cadence
    # (Most TTS engines handle this, but you can add SSML if needed)
    
    return text
```

---

## Output Format Reference

| Format | Size | Quality | Use Case |
|--------|------|---------|----------|
| mp3    | Small | Good | Streaming, web delivery |
| opus   | Smallest | Good | Voice chat, low bandwidth |
| aac    | Small | Good | Mobile apps |
| flac   | Large | Lossless | Archiving, post-processing |
| wav    | Largest | Lossless | Video production, DAW |
| pcm    | Large | Raw | Real-time streaming |

---

## Error Handling

```python
from openai import RateLimitError, BadRequestError
import time

def safe_tts(text: str, output_path: str, max_retries: int = 3) -> dict:
    client = OpenAI()
    
    # Input validation
    if not text or not text.strip():
        return {"success": False, "error": "Empty text input"}
    
    if len(text) > 4096:
        return {"success": False, "error": f"Text too long: {len(text)} chars (max 4096)"}
    
    for attempt in range(max_retries):
        try:
            response = client.audio.speech.create(
                model="tts-1-hd",
                voice="nova",
                input=text
            )
            response.stream_to_file(output_path)
            return {"success": True, "path": output_path}
            
        except RateLimitError:
            wait = 2 ** attempt * 3
            time.sleep(wait)
            
        except BadRequestError as e:
            return {"success": False, "error": f"Bad request: {e}"}
        
        except Exception as e:
            if attempt == max_retries - 1:
                return {"success": False, "error": str(e)}
    
    return {"success": False, "error": "Max retries exceeded"}
```
