---
name: LLM
description: "Large Language Model integration guide for building AI-powered applications. Use when: building chatbots, AI assistants, content generators, text summarization, code generation, data analysis, multi-turn conversations, structured output extraction, or any task requiring LLM integration."
argument-hint: "Describe the AI feature or LLM-powered application to build"
---

# LLM Integration Skill

## When to Use This Skill

- Building chatbots or AI assistants
- Generating or transforming content (articles, emails, summaries)
- Extracting structured data from unstructured text
- Building coding assistants
- Implementing RAG (Retrieval Augmented Generation)
- Multi-turn conversation management
- Function calling / tool use

---

## Model Selection Guide

| Model | Best For | Context | Speed | Cost |
|-------|----------|---------|-------|------|
| **GPT-4o** | General purpose, vision, reasoning | 128K | Fast | $$$ |
| **GPT-4o-mini** | Cost-efficient, high volume | 128K | Very Fast | $ |
| **Claude 3.5 Sonnet** | Coding, analysis, long context | 200K | Fast | $$ |
| **Claude 3 Haiku** | Fast, cheap, simple tasks | 200K | Fastest | $ |
| **Gemini 1.5 Pro** | Longest context, multimodal | 1M | Fast | $$ |
| **Llama 3 70B** | Open source, self-hosted | 128K | Varies | Free* |
| **Mistral Large** | European data compliance | 128K | Fast | $$ |

*Self-hosted requires GPU infrastructure

---

## Core Implementation

### 1. OpenAI SDK (Python)

```python
from openai import OpenAI
import os

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def chat(
    user_message: str,
    system_prompt: str = "You are a helpful assistant.",
    model: str = "gpt-4o-mini",
    temperature: float = 0.7,
    max_tokens: int = 2048
) -> str:
    """Single-turn chat completion."""
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": user_message}
        ],
        temperature=temperature,
        max_tokens=max_tokens
    )
    return response.choices[0].message.content
```

### 2. OpenAI SDK (TypeScript)

```typescript
import OpenAI from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function chat(
  userMessage: string,
  systemPrompt = 'You are a helpful assistant.',
  model = 'gpt-4o-mini'
): Promise<string> {
  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user',   content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 2048
  })

  return response.choices[0].message.content ?? ''
}
```

### 3. Anthropic Claude (Python)

```python
import anthropic
import os

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

def claude_chat(
    user_message: str,
    system_prompt: str = "You are a helpful assistant.",
    model: str = "claude-3-5-sonnet-20241022"
) -> str:
    message = client.messages.create(
        model=model,
        max_tokens=2048,
        system=system_prompt,
        messages=[
            {"role": "user", "content": user_message}
        ]
    )
    return message.content[0].text
```

---

## Multi-Turn Conversation Manager

```python
from openai import OpenAI
from dataclasses import dataclass, field
from typing import Literal

@dataclass
class Message:
    role: Literal["system", "user", "assistant"]
    content: str

class ConversationManager:
    """Manages multi-turn conversations with automatic context trimming."""
    
    def __init__(
        self,
        system_prompt: str = "You are a helpful assistant.",
        model: str = "gpt-4o-mini",
        max_history_messages: int = 20
    ):
        self.client = OpenAI()
        self.model = model
        self.max_history = max_history_messages
        self.messages: list[Message] = [
            Message(role="system", content=system_prompt)
        ]
    
    def add_message(self, role: str, content: str):
        self.messages.append(Message(role=role, content=content))
        
        # Trim old messages to stay within context limits
        # Always keep system message (index 0)
        if len(self.messages) > self.max_history + 1:
            self.messages = [self.messages[0]] + self.messages[-(self.max_history):]
    
    def chat(self, user_message: str) -> str:
        self.add_message("user", user_message)
        
        response = self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": m.role, "content": m.content} 
                      for m in self.messages]
        )
        
        assistant_response = response.choices[0].message.content
        self.add_message("assistant", assistant_response)
        return assistant_response
    
    def reset(self, new_system_prompt: str = None):
        system = new_system_prompt or self.messages[0].content
        self.messages = [Message(role="system", content=system)]

# Usage
conv = ConversationManager(
    system_prompt="You are a knowledgeable Python tutor.",
    model="gpt-4o-mini"
)

print(conv.chat("What is a decorator?"))
print(conv.chat("Can you show me an example?"))
print(conv.chat("How does that relate to what you just explained?"))
```

---

## Structured Output Extraction

```python
from openai import OpenAI
from pydantic import BaseModel
import json

client = OpenAI()

class JobPosting(BaseModel):
    title: str
    company: str
    location: str
    salary_range: str | None
    skills: list[str]
    experience_years: int | None

def extract_job_info(raw_text: str) -> JobPosting:
    """Extract structured job posting data from unstructured text."""
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "Extract job posting information and return as JSON."
            },
            {
                "role": "user",
                "content": f"Extract from this job posting:\n\n{raw_text}"
            }
        ],
        response_format={"type": "json_object"},
        temperature=0  # Lower temp for consistent extraction
    )
    
    data = json.loads(response.choices[0].message.content)
    return JobPosting(**data)
```

---

## Streaming Responses

```python
from openai import OpenAI
import sys

client = OpenAI()

def stream_response(prompt: str) -> str:
    """Stream LLM response for real-time display."""
    full_response = []
    
    with client.chat.completions.stream(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)
            full_response.append(text)
    
    print()  # Newline after stream completes
    return "".join(full_response)

# TypeScript Streaming (Next.js)
# src/app/api/chat/route.ts
"""
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'  // Vercel AI SDK

const openai = new OpenAI()

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
"""
```

---

## Function Calling / Tool Use

```python
from openai import OpenAI
import json

client = OpenAI()

# Define tools
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g., 'London, UK'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"]
                    }
                },
                "required": ["location"]
            }
        }
    }
]

def get_weather(location: str, unit: str = "celsius") -> str:
    """Actual weather API call would go here."""
    return f"22°C, partly cloudy in {location}"

def chat_with_tools(user_message: str) -> str:
    messages = [{"role": "user", "content": user_message}]
    
    # First call  model decides whether to use tools
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=tools,
        tool_choice="auto"
    )
    
    msg = response.choices[0].message
    
    if msg.tool_calls:
        # Execute each tool call
        messages.append(msg)
        
        for tool_call in msg.tool_calls:
            args = json.loads(tool_call.function.arguments)
            result = get_weather(**args)
            
            messages.append({
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": result
            })
        
        # Second call  model generates final response with tool results
        final = client.chat.completions.create(
            model="gpt-4o",
            messages=messages
        )
        return final.choices[0].message.content
    
    return msg.content
```

---

## Prompt Engineering Best Practices

```python
# Role + Context + Task + Format + Constraints
SYSTEM_PROMPT_TEMPLATE = """
## Role
You are {role}.

## Context
{context}

## Your Task
{task_description}

## Output Format
{format_requirements}

## Constraints
- {constraint_1}
- {constraint_2}
"""

# Example: Customer Support Bot
customer_support_prompt = SYSTEM_PROMPT_TEMPLATE.format(
    role="a customer support specialist for AcmeCorp",
    context="AcmeCorp sells B2B software. Users are technical professionals.",
    task_description="Help users troubleshoot issues and answer product questions.",
    format_requirements="Respond concisely. Use bullet points for multi-step solutions.",
    constraint_1="Never promise features that don't exist",
    constraint_2="Escalate billing issues to billing@acmecorp.com"
)
```

---

## Error Handling & Retry Logic

```python
from openai import RateLimitError, APITimeoutError, APIConnectionError
import time

def robust_completion(messages: list, max_retries: int = 3) -> str:
    client = OpenAI()
    
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=messages,
                timeout=30
            )
            return response.choices[0].message.content
            
        except RateLimitError:
            wait = 2 ** attempt * 5  # 5s, 10s, 20s
            print(f"Rate limited. Waiting {wait}s...")
            time.sleep(wait)
            
        except APITimeoutError:
            print(f"Timeout on attempt {attempt + 1}")
            if attempt == max_retries - 1:
                raise
                
        except APIConnectionError as e:
            print(f"Connection error: {e}")
            time.sleep(2)
    
    raise RuntimeError("Failed after max retries")
```

---

## Cost Estimation

```python
# Approximate token counts:
# 1 token ≈ 4 characters ≈ 0.75 words

def estimate_cost(text: str, model: str = "gpt-4o-mini") -> dict:
    """Very rough cost estimate."""
    tokens = len(text) // 4
    
    # Prices per 1M tokens (as of 2025, check current prices)
    pricing = {
        "gpt-4o":       {"input": 5.00,  "output": 15.00},
        "gpt-4o-mini":  {"input": 0.15,  "output": 0.60},
        "claude-sonnet": {"input": 3.00,  "output": 15.00},
        "claude-haiku":  {"input": 0.25,  "output": 1.25},
    }
    
    prices = pricing.get(model, pricing["gpt-4o-mini"])
    input_cost = (tokens / 1_000_000) * prices["input"]
    
    return {"tokens": tokens, "estimated_cost_usd": round(input_cost, 6)}
```
