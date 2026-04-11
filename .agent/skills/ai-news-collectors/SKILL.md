---
name: ai-news-collector
description: "AI news aggregation and trend tracking. Use when: the user asks about recent AI developments, wants a roundup of the latest AI news, asks what's trending in AI this week, wants to know about recent AI model releases, product launches, research papers, funding rounds, or any AI industry news update."
argument-hint: "Specify the time period (today, this week, this month) and any specific area of focus"
---

# AI News Collector

Collect, aggregate, and rank AI industry news by relevance and community buzz.

## Core Principle

**Don't just search "AI news today".** Generic searches return SEO aggregators and prediction articles  they systematically miss grassroots community events (viral open-source tools, meme-level incidents). Use a multi-dimensional, layered search strategy.

---

## Workflow

### 1. Multi-Dimensional Search (minimum 8 searches, ideally 10-12)

Execute searches across these **6 dimensions**:

#### Dimension A: Newsletters & Roundups (highest priority 🔑)

These are the highest-density sources  one newsletter can cover 10+ news items.

```
Search queries:
- "last week in AI" [current month year]
- "AI weekly roundup" [current month year]  
- "the batch AI newsletter"
- site:substack.com AI news [current month]
- "TLDR AI" OR "AI news digest"
```

After finding a newsletter, use `web-reader` to fetch the full text and extract all news leads.

#### Dimension B: Community Buzz & Viral Content (critical 🔑)

Capture bottom-up community hits  these are invisible to generic search.

```
Search queries:
- "viral AI tool" OR "viral AI agent" site:reddit.com OR site:news.ycombinator.com
- "AI trending" site:reddit.com/r/MachineLearning
- "GitHub trending AI"
- "everyone is talking about" AI [current month]
- site:news.ycombinator.com AI [current month]
```

#### Dimension C: Model Releases & Product Launches

```
Search queries:
- "AI model release" OR "LLM launch" [current month]
- OpenAI OR Anthropic OR Google OR Meta AI announcement [current month]
- "new AI model" OR "new AI product" site:techcrunch.com OR site:theverge.com
```

#### Dimension D: Funding & Business

```
Search queries:
- "AI startup funding" [current month year]
- "AI acquisition" OR "AI valuation" [current month]
- "AI company raises" site:crunchbase.com OR site:techcrunch.com
```

#### Dimension E: Research Breakthroughs

```
Search queries:
- "AI breakthrough" OR "AI research paper" [current month]
- "state of the art" machine learning [current month]
- site:arxiv.org AI [current month] most cited OR trending
```

#### Dimension F: Regulation & Policy

```
Search queries:
- "AI regulation" OR "AI policy" [current month year]
- "AI act" OR "AI governance" [current year]
- "AI executive order" OR "AI law" [current year]
```

---

### 2. Cross-Validation

After the initial round, check for gaps:

- If a newsletter mentions a project/event not covered elsewhere → do a targeted search on that topic
- If the same event appears in 3+ independent sources → it's a confirmed hot story; search for more details
- Look for both English-language and international coverage

---

### 3. Heat Scoring Algorithm

Rate each item (1-5 stars) based on these signals:

| Signal | Weight | Criteria |
|--------|--------|---------|
| Coverage from multiple sources | ⭐⭐⭐ High | 3+ independent sources = confirmed hot story |
| Community viral evidence | ⭐⭐⭐ High | GitHub stars spiking, HN front page, Reddit top posts |
| Official announcement from major lab | ⭐⭐⭐ High | OpenAI, Anthropic, Google, Meta, Mitsral, etc. |
| Real user adoption evidence | ⭐⭐ Medium | People are using it, not just saying it launched |
| Technical breakthrough significance | ⭐⭐ Medium | SOTA results, novel capability |
| Funding/business impact | ⭐⭐ Medium | Large rounds, acquisitions |
| Controversy (safety, ethics debate) | ⭐⭐ Medium | Controversy = influence |
| Recency | ⭐ Low | Newer is better, as tiebreaker |

---

### 4. Output Format

Output **15-25 items** sorted by heat score, descending:

```markdown
## 🔥 AI News Digest  [Date]

### ⭐⭐⭐⭐⭐ Top Stories

1. **[Headline]**
   > [One-sentence summary, max 50 words]
   > 🔗 [Source](URL)

2. **[Headline]**
   > [Summary]
   > 🔗 [Source](URL)

---

### ⭐⭐⭐⭐ High Interest

3. ...

---

### ⭐⭐⭐ Noteworthy

...

---

📊 **Coverage stats**: [N] stories found | [N] searches | Dimensions covered: A/B/C/D/E/F | Updated: [time]
```

---

### 5. Deduplication Rules

- When multiple outlets cover the same event, merge into one entry
- Select the most authoritative or detailed source as the primary link
- Note "covered by [N] outlets" if 3+ sources reported it
- Count rebrands/renamed projects as the same event

---

## Key News Sources

### Tier 1 (Most Authoritative)
- OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral AI blogs
- arXiv.org (research papers)
- Hugging Face announcements

### Tier 2 (High Quality Journalism)
- The Verge, TechCrunch, Ars Technica, MIT Technology Review
- VentureBeat AI, Wired AI

### Tier 3 (Community Intelligence)
- Hacker News (news.ycombinator.com)
- r/MachineLearning, r/artificial, r/LocalLLaMA
- Twitter/X: @OpenAI, @AnthropicAI, @GoogleDeepMind

### Tier 4 (Newsletters & Aggregators)
- The Batch (deeplearning.ai)
- TLDR AI
- AlphaSignal
- Ben's Bites

---

## Rules

- Use HTTPS links only
- Note "Paywalled" for paid-only content
- Stay objective  report, don't editorialize
- Do not begin output before completing at least 8 searches
- If a dimension yields no results with one query, try an alternative query before skipping
