---
name: ASR
description: "Speech-to-text (Automatic Speech Recognition) guide. Use when: transcribing audio, converting speech to text, building voice input features, processing audio recordings, meeting transcription, podcast transcription, or any audio-to-text task."
argument-hint: "Describe the audio transcription task"
---

# ASR  Automatic Speech Recognition Skill

## When to Use This Skill

- Transcribing audio/video files to text
- Building voice input features for apps
- Meeting or interview transcription
- Podcast or video captioning
- Accessibility features (audio → text)
- Voice commands integration

---

## Tool Selection Guide

Choose the right ASR tool for your use case:

| Tool | Best For | Cost | Languages |
|------|----------|------|-----------|
| **OpenAI Whisper** | Local processing, privacy, accuracy | Free (self-hosted) | 99+ languages |
| **Whisper API** | Cloud, no GPU needed | $0.006/min | 99+ languages |
| **Google Speech-to-Text** | Enterprise, real-time streaming | $0.004-0.024/min | 125+ languages |
| **AWS Transcribe** | AWS ecosystem, batch jobs | $0.024/min | 75+ languages |
| **Azure Speech** | Microsoft ecosystem | $1/hour | 100+ languages |
| **AssemblyAI** | Speaker diarization, summaries | $0.65/hour | 50+ languages |
| **Deepgram** | Low latency, real-time | $0.0043/min | 30+ languages |

---

## Implementation Patterns

### 1. OpenAI Whisper API (Recommended  Simple & Accurate)

```python
# Python  Server-side only
from openai import OpenAI
import os

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def transcribe_audio(audio_file_path: str, language: str = None) -> str:
    """
    Transcribe audio file using OpenAI Whisper API.
    
    Args:
        audio_file_path: Path to audio file (mp3, mp4, wav, m4a, webm, etc.)
        language: Optional ISO-639-1 language code (e.g., 'en', 'es', 'fr')
    
    Returns:
        Transcribed text string
    
    Supported formats: mp3, mp4, mpeg, mpga, m4a, wav, webm
    Max file size: 25MB
    """
    with open(audio_file_path, "rb") as audio_file:
        params = {
            "model": "whisper-1",
            "file": audio_file,
            "response_format": "text"  # or "json", "verbose_json", "srt", "vtt"
        }
        if language:
            params["language"] = language
            
        transcript = client.audio.transcriptions.create(**params)
    
    return transcript
```

### 2. Local Whisper (Privacy  No API Calls)

```python
# Install: pip install openai-whisper
import whisper

def transcribe_local(audio_path: str, model_size: str = "base") -> dict:
    """
    Transcribe audio locally using Whisper model.
    
    Model sizes (speed vs accuracy tradeoff):
    - tiny:   Fastest, least accurate, ~39MB
    - base:   Fast, decent accuracy, ~74MB  (recommended start)
    - small:  Balanced, ~244MB
    - medium: Good accuracy, ~769MB
    - large:  Best accuracy, ~1.5GB (requires GPU for reasonable speed)
    """
    model = whisper.load_model(model_size)
    result = model.transcribe(audio_path)
    
    return {
        "text": result["text"],
        "language": result["language"],
        "segments": result["segments"]  # Timestamps per segment
    }

# Usage
result = transcribe_local("./meeting.mp3", model_size="base")
print(result["text"])
print(f"Detected language: {result['language']}")

# With timestamps
for segment in result["segments"]:
    start = segment["start"]
    end = segment["end"]
    text = segment["text"]
    print(f"[{start:.2f}s → {end:.2f}s] {text}")
```

### 3. TypeScript / Node.js (Formdata Upload)

```typescript
// Node.js backend  works with any ASR API
import fs from 'fs'
import FormData from 'form-data'
import fetch from 'node-fetch'

async function transcribeWithWhisper(
  audioFilePath: string,
  apiKey: string
): Promise<string> {
  const form = new FormData()
  form.append('file', fs.createReadStream(audioFilePath))
  form.append('model', 'whisper-1')
  form.append('response_format', 'text')

  const response = await fetch(
    'https://api.openai.com/v1/audio/transcriptions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        ...form.getHeaders(),
      },
      body: form,
    }
  )

  if (!response.ok) {
    throw new Error(`Transcription failed: ${response.statusText}`)
  }

  return response.text()
}
```

### 4. Next.js API Route

```typescript
// src/app/api/transcribe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('audio') as File

    if (!file) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
    }

    // Validate file size (25MB limit)
    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json({ error: 'File exceeds 25MB limit' }, { status: 400 })
    }

    const transcription = await openai.audio.transcriptions.create({
      file,
      model: 'whisper-1',
      response_format: 'verbose_json',  // Includes timestamps
    })

    return NextResponse.json({
      text: transcription.text,
      duration: transcription.duration,
      language: transcription.language,
    })
  } catch (error) {
    console.error('[API:transcribe]', error)
    return NextResponse.json({ error: 'Transcription failed' }, { status: 500 })
  }
}
```

---

## Large File Handling (> 25MB)

Split audio into chunks before sending to API:

```python
# pip install pydub
from pydub import AudioSegment
import os
from openai import OpenAI

def transcribe_large_file(audio_path: str, chunk_minutes: int = 10) -> str:
    """Split large audio into chunks and transcribe each."""
    client = OpenAI()
    
    # Load audio
    audio = AudioSegment.from_file(audio_path)
    chunk_ms = chunk_minutes * 60 * 1000
    
    full_transcript = []
    
    for i, start_ms in enumerate(range(0, len(audio), chunk_ms)):
        chunk = audio[start_ms:start_ms + chunk_ms]
        chunk_path = f"/tmp/chunk_{i}.mp3"
        chunk.export(chunk_path, format="mp3")
        
        with open(chunk_path, "rb") as f:
            result = client.audio.transcriptions.create(
                model="whisper-1",
                file=f,
                response_format="text"
            )
        
        full_transcript.append(result)
        os.remove(chunk_path)  # Clean up
    
    return " ".join(full_transcript)
```

---

## Post-Processing

```python
import re

def clean_transcript(text: str, remove_fillers: bool = True) -> str:
    """Clean transcribed text for readability."""
    
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Capitalize sentence beginnings
    text = re.sub(r'(^|[.!?]\s+)([a-z])', 
                  lambda m: m.group(1) + m.group(2).upper(), text)
    
    # Remove filler words (optional)
    if remove_fillers:
        fillers = ['um', 'uh', 'hmm', 'like', 'you know', 'basically']
        pattern = r'\b(' + '|'.join(fillers) + r')\b'
        text = re.sub(pattern, '', text, flags=re.IGNORECASE)
        text = re.sub(r'\s+', ' ', text).strip()
    
    return text

def format_with_timestamps(segments: list) -> str:
    """Format transcript with timestamps."""
    lines = []
    for seg in segments:
        start = f"{int(seg['start']//60):02d}:{int(seg['start']%60):02d}"
        end   = f"{int(seg['end']//60):02d}:{int(seg['end']%60):02d}"
        lines.append(f"[{start} → {end}] {seg['text'].strip()}")
    return "\n".join(lines)
```

---

## Audio Quality Guidelines

For best transcription accuracy:
- **Sample rate**: 16kHz or higher
- **Recommended formats**: WAV or MP3
- **Minimize**: Background noise, music, multiple speakers talking simultaneously
- **Optimize**: Clear enunciation, consistent volume
- **Speaker diarization**: Use AssemblyAI or Deepgram if you need "Speaker 1: / Speaker 2:" labeling

---

## Error Handling

```python
from openai import APIError, APITimeoutError, RateLimitError
import time

def transcribe_with_retry(audio_path: str, max_retries: int = 3) -> str:
    client = OpenAI()
    
    for attempt in range(max_retries):
        try:
            with open(audio_path, "rb") as f:
                result = client.audio.transcriptions.create(
                    model="whisper-1",
                    file=f,
                    response_format="text"
                )
            return result
            
        except RateLimitError:
            wait = 2 ** attempt  # Exponential backoff
            print(f"Rate limited, waiting {wait}s...")
            time.sleep(wait)
            
        except APITimeoutError:
            print(f"Timeout on attempt {attempt + 1}")
            if attempt == max_retries - 1:
                raise
                
        except APIError as e:
            print(f"API error: {e}")
            raise
    
    raise RuntimeError("Max retries exceeded")
```

---

## Common Use Cases

1. **Meeting Notes**: Transcribe recordings → summarize with LLM
2. **Podcast Captions**: Generate SRT/VTT subtitle files
3. **Customer Call Analysis**: Transcribe + sentiment analysis
4. **Voice Notes App**: Mobile mic → Whisper → text storage
5. **Accessibility**: Auto-caption video content
6. **Content Repurposing**: Podcast → blog post via transcript
