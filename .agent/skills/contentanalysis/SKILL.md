---
name: contentanalysis
description: "Content extraction and insight analysis. Use when: extracting key insights from articles, videos, podcasts, or YouTube content, summarizing long-form content, creating takeaway reports, analyzing what can be learned from a piece of content, or generating structured notes from any media."
argument-hint: "Provide the content URL, transcript, or text to analyze"
---

# Content Analysis

## When to Use This Skill

- Extracting key wisdom and insights from YouTube videos
- Summarizing and analyzing long articles or reports
- Creating structured takeaways from podcasts
- Learning the key points from any text or media
- Generating condensed insight reports for busy readers
- Identifying patterns and themes across multiple pieces of content

---

## Analysis Workflow

### Step 1: Gather Content

Determine how to get the content:

| Content Type | Method |
|-------------|--------|
| YouTube video | Use `web-reader` or `web-search` to get transcript/captions |
| Article / Blog post | Use `web-reader` skill to fetch the page |
| PDF | Use `pdf` skill to extract text |
| Podcast (with transcript) | Use provided transcript |
| Raw text | Analyze directly |

### Step 2: Structured Extraction

Apply the **EXTRACT** framework:

```markdown
## Content Analysis: [Title/Source]

**Source**: [URL or title]
**Type**: [Video / Podcast / Article / Report]
**Date**: [Publication date if available]
**Estimated read/watch time**: [X min]
**Analyzed**: [Today's date]

---

### 🎯 Core Thesis
[The single central argument or idea in 1-2 sentences]

### 📌 Key Insights (Most valuable takeaways)
1. [Insight 1]  [Why it matters]
2. [Insight 2]  [Why it matters]
3. [Insight 3]  [Why it matters]
4. [Insight 4]  [Why it matters]
5. [Insight 5]  [Why it matters]

### 💡 Surprising or Counterintuitive Points
- [Something unexpected the author said]
- [A claim that challenges conventional wisdom]

### 📊 Data Points and Statistics
| Claim | Source/Context |
|-------|---------------|
| [Statistic 1] | [How it was used] |
| [Statistic 2] | [How it was used] |

### 🔑 Actionable Recommendations
1. [What the author recommends you do]
2. [Specific action or behavior change]
3. [Framework or mental model to apply]

### ❓ Key Questions Raised
- [Question the content poses but doesn't fully answer]
- [Related question worth exploring]

### 📚 Referenced Resources
- [Other book/article/tool mentioned]  [Why it was cited]

### 🧩 Connections to Other Ideas
[How this connects to other theories, trends, or skills]

### ⚡ One-Line Summary
[The single most important thing to remember from this content]
```

---

## Specialized Analysis Modes

### For Video/Podcast Content

If the content is a video or podcast interview:

```markdown
### Speaker Breakdown
**Host**: [Name]
**Guest(s)**: [Name, background]
**Format**: [Interview / Solo / Panel]

### Argument Flow
1. Opening premise: [What problem does this address?]
2. Evidence presented: [Data, stories, examples used]
3. Counterarguments addressed: [What objections were raised?]
4. Final position: [Where did the speaker land?]

### Memorable Quotes
> "[Direct quote from speaker]"
>  [Speaker name]
```

### For Research Reports / Academic Papers

```markdown
### Research Quality Assessment
- **Methodology**: [Qualitative / Quantitative / Mixed]
- **Sample size**: [N if applicable]
- **Data currency**: [When was data collected?]
- **Limitations acknowledged**: [Yes / No / Partially]

### Main Findings
1. [Finding 1 with confidence level or significance]
2. [Finding 2]

### Applicability
[Who should act on this research and how?]
```

### For Competitive Analysis / Industry Content

```markdown
### Strategic Implications
- **Signals**: [What trends does this confirm?]
- **Surprises**: [What was unexpected?]
- **Threats**: [Competitive risks identified]
- **Opportunities**: [Market gaps or advantages highlighted]
```

---

## Output Format Options

Tell the analyst which format you want:

1. **Quick Summary** (150 words)  for internal sharing
2. **Full Analysis** (above framework)  for research and notes
3. **Discussion Points**  for team meetings
4. **Tweet Thread**  for social media sharing
5. **LinkedIn Post**  for professional sharing
6. **Study Notes**  for personal learning and retention

---

## Multi-Source Synthesis

When analyzing multiple pieces on the same topic:

```markdown
## Cross-Source Analysis: [Topic]

**Sources analyzed**: [N sources]
**Date range**: [Oldest to newest]

### Consensus Points
[What all or most sources agree on]

### Conflicting Perspectives
| Source A says | Source B says | Evidence quality |
|--------------|--------------|-----------------|
| [View A] | [View B] | [Who's more credible?] |

### Developing Story (if news/ongoing)
[How has the narrative evolved over time?]

### Overall Verdict
[Your synthesized conclusion from all sources]
```
