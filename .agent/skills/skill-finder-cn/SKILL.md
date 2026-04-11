---
name: skill-finder
description: "Universal skill discovery and selection guide. Use when: the user's request is unclear about which skill to use, you need to pick the best skill for a task, or you need to discover what capabilities are available in this library. Replaces the platform-specific Chinese skill-finder."
argument-hint: "Describe the task or goal and this skill will recommend the best skill to activate"
---

# Skill Finder  Universal Skill Discovery

## How to Use This Skill

When a user's request doesn't clearly map to one skill, use this guide to:
1. Identify the primary goal
2. Find the best-fit skill
3. Activate that skill

---

## Quick Reference: Skill Catalog

### 🔧 Development & Code

| Goal | Skill to Use |
|------|-------------|
| Write, debug, explain, or refactor code | `coding-agent` |
| Build a web app, frontend, or backend | `fullstack-dev` |
| Design a UI component or design system | `ui-ux-pro-max` |
| Review code for quality and security | `code-review` |
| Design a REST or GraphQL API | `api-design` |
| Write tests or testing strategy | `testing-strategy` |
| Deploy an application | `deployment-checklist` |

### 📝 Content & Writing

| Goal | Skill to Use |
|------|-------------|
| Write a blog post in a specific author's voice | `blog-writer` |
| Write SEO-optimized articles or landing pages | `seo-content-writer` |
| Develop a content marketing strategy | `content-strategy` |
| Write plans, outlines, or structured documents | `writing-plans` |
| Create a marketing campaign | `marketing-mode` |

### 🔍 Research & Analysis

| Goal | Skill to Use |
|------|-------------|
| Search the web for current information | `web-search` |
| Conduct deep multi-source research | `deep-research` (qingyan-research) |
| Find academic papers or cite scholarly research | `academic-research` (aminer-open-academic) |
| Analyze market trends or competitors | `market-research-reports` |
| Analyze financial data or stocks | `finance` |
| Track developments in AI/tech news | `ai-news-collectors` |
| Analyze text, articles, or documents | `contentanalysis` |

### 🎨 Design & Media

| Goal | Skill to Use |
|------|-------------|
| Generate images from text prompts | `image-generation` |
| Edit or transform existing images | `image-edit` |
| Analyze or describe an image | `image-understand` (VLM) |
| Generate video content | `video-generation` |
| Analyze or transcribe video | `video-understand` |
| Design visual layouts and foundations | `visual-design-foundations` |
| Create storyboards for video/animation | `storyboard-manager` |

### 🔊 Audio & Voice

| Goal | Skill to Use |
|------|-------------|
| Transcribe audio/speech to text | `ASR` |
| Convert text to spoken audio | `TTS` |
| Generate a full podcast episode | `podcast-generate` |

### 📄 Documents & Files

| Goal | Skill to Use |
|------|-------------|
| Create or process Word documents | `docx` |
| Create or read PDF files | `pdf` |
| Create or analyze spreadsheets | `xlsx` |
| Create or edit presentations | `pptx` |

### 🤖 AI & Automation

| Goal | Skill to Use |
|------|-------------|
| Integrate an LLM into an application | `LLM` |
| Write better prompts for AI models | `prompt-engineering` |
| Automate web browsing tasks | `agent-browser` |
| Build a multi-source search | `multi-search-engine` |
| Read and extract content from websites | `web-reader` |
| Extract visual styles from web pages | `web-shader-extractor` |
| Auto-track topics or entities | `auto-target-tracker` |

### 💼 Business & Finance

| Goal | Skill to Use |
|------|-------------|
| Analyze stocks or market data | `finance` + `stock-analysis-skill` |
| Conduct market research | `market-research-reports` |
| Design an interview process | `interview-designer` |

### 🌱 Wellbeing & Lifestyle

| Goal | Skill to Use |
|------|-------------|
| Get mindfulness or meditation guidance | `mindfulness-meditation` |
| Interpret a dream | `dream-interpreter` |
| Get fortune/astrology analysis | `get-fortune-analysis` |
| Get a gift recommendation | `gift-evaluator` |

### 🛠️ Skills Management

| Goal | Skill to Use |
|------|-------------|
| Create a new skill | `skill-creator` |
| Evaluate or audit a skill | `skill-vetter` |

---

## Decision Process

When a user's task is ambiguous:

### Step 1: Identify Task Type

```
Is the task primarily about...

CODE?        → coding-agent or fullstack-dev or code-review
DESIGN?      → ui-ux-pro-max or visual-design-foundations
CONTENT?     → blog-writer / seo-content-writer / content-strategy
RESEARCH?    → web-search / deep-research / academic-research
MEDIA/AI?    → Check ASR / TTS / image-generation / VLM
DOCUMENT?    → docx / pdf / xlsx / pptx
AUTOMATION?  → agent-browser / auto-target-tracker
ANALYSIS?    → contentanalysis / market-research-reports / finance
WELLNESS?    → mindfulness / dream-interpreter / gift-evaluator
```

### Step 2: Disambiguate if Needed

If still unclear, ask the user one clarifying question:
- "Are you looking to [Option A] or [Option B]?"

### Step 3: Activate the Skill

State clearly: "I'll use the **[skill-name]** skill for this task."
Then read that skill's SKILL.md and proceed.

---

## Adding New Skills

When you discover a capability gap (a common task that no skill covers):
1. Note it for the user: "We don't have a skill for [X] yet."
2. Suggest using `skill-creator` to build one
3. Or use `coding-agent` / `web-search` as a fallback

---

## Tips for Accurate Matching

- **Multiple skills needed?**  Chain them. E.g., `web-search` → `contentanalysis` → `blog-writer`
- **Partially matching?**  Use the closest skill and adapt
- **Technical ambiguity?**  Prefer `coding-agent` for anything code-related
- **New user request type?**  Always ask before assuming which skill fits
