---
name: web-search
description: "Advanced web research methodology skill. Use when: finding real-time information, researching topics, fact-checking, competitive research, finding documentation, news research, academic research, market data, or any task requiring up-to-date information from the internet."
argument-hint: "Describe what you need to research or find"
---

# Web Search  Advanced Research Skill

## When to Use This Skill

Activate when the user needs:
- Current events or news beyond your knowledge cutoff
- Real-time data (prices, stats, sports scores)
- Fact-checking specific claims
- Finding documentation for libraries/APIs
- Competitive research or market data
- Academic papers or research
- Finding URLs, contact info, or specific resources

---

## Research Methodology

### Phase 1: Query Construction

Bad queries produce bad results. Always refine before searching:

| ❌ Bad | ✅ Better |
|--------|----------|
| "AI news" | "artificial intelligence breakthroughs 2025 site:nature.com OR site:arxiv.org" |
| "Python help" | "Python asyncio event loop RuntimeError fix 2024" |
| "React tutorial" | "React 19 Server Components tutorial beginner 2024" |

**Query Construction Techniques:**

```
# Boolean operators
term1 AND term2          Both terms must appear
term1 OR term2           Either term
"exact phrase"           Exact match
-excluded                Exclude term

# Site operators
site:docs.example.com    Search within a specific domain
filetype:pdf             Specific file type

# Recency
after:2024-01-01         Published after date
before:2025-01-01        Published before date

# Example power query:
"machine learning" site:arxiv.org after:2024-06-01 filetype:pdf
```

### Phase 2: Parallel Search Strategy

For complex research, run multiple angle queries simultaneously:

```
Topic: "Next.js 15 performance optimization"

Query 1 (Official docs):   site:nextjs.org "performance" after:2024-01-01
Query 2 (Community):       "Next.js 15" performance optimization site:reddit.com OR site:dev.to
Query 3 (Technical deep):  "Next.js 15" "React Server Components" performance benchmarks
Query 4 (Videos):          "Next.js 15 performance" site:youtube.com OR site:medium.com
```

### Phase 3: Source Evaluation

Before citing a source, assess:

| Criterion | What to Check |
|-----------|--------------|
| **Authority** | Who wrote it? What are their credentials? What is the domain reputation? |
| **Currency** | When was it published/updated? Is it current enough for your use case? |
| **Accuracy** | Are claims backed by data? Are sources cited? Cross-reference key facts. |
| **Coverage** | Does it cover the topic adequately? Is important context missing? |
| **Bias** | Does the author/publication have a clear agenda? |

**Tier 1 Sources** (highest trust):
- Official documentation (docs.*, *.gov, RFC documents)
- Peer-reviewed journals (arxiv.org, PubMed, IEEE, ACM)
- Major news organizations (Reuters, AP, BBC)
- Primary sources (official reports, company filings)

**Tier 2 Sources** (good trust):
- Reputable tech media (Ars Technica, The Verge, Wired)
- Developer platforms (MDN, Stack Overflow, Dev.to, Medium verified)
- Industry analysts (Gartner, Forrester, IDC)

**Tier 3 Sources** (verify first):
- Reddit, Quora, forums (community opinion, not fact)
- Blogs without clear authorship
- Social media posts
- Wikipedia (useful for overview, verify citations)

---

## Search Tools & APIs

### Using Available Search Capabilities

When you have web search tools available:

```
1. Use the search_web() or equivalent tool
2. Query: Specific, concise, targeted
3. Retrieve: 5-10 results per query
4. Evaluate: Apply source tier evaluation
5. Synthesize: Cross-reference across sources
```

### Alternative Search Approaches

When direct search tools are unavailable:

```python
# Using Tavily API (recommended for AI agents)
import tavily
client = tavily.TavilyClient(api_key="your-api-key")
results = client.search(
    query="Next.js 15 performance optimization",
    search_depth="advanced",
    max_results=10,
    include_answer=True
)

# Using SerpAPI
import serpapi
params = {
    "engine": "google",
    "q": "your query",
    "api_key": "your-api-key",
    "num": 10,
    "gl": "us",   # Country
    "hl": "en"    # Language
}

# Using Brave Search API
import requests
headers = {"Accept": "application/json", "X-Subscription-Token": "your-key"}
r = requests.get("https://api.search.brave.com/res/v1/web/search",
                 headers=headers, params={"q": "your query", "count": 10})
```

---

## Research Workflows

### Quick Fact Check (1-2 queries)

```
Goal: Verify a specific claim
1. Search for the original source/claim
2. Search for contradicting evidence
3. Report: Confirmed / Disputed / Unverified with sources
```

### Standard Research (3-5 queries)

```
Goal: Understand a topic comprehensively
1. Overview query  broad understanding
2. Deep-dive query  technical details
3. Current state query  recent developments
4. Expert opinion query  authoritative perspectives
5. Synthesize findings into coherent summary
```

### Deep Research (6+ queries, systematic)

```
Goal: Authoritative report on a topic
Phase 1: Landscape mapping
  - What is the topic space?
  - Who are the key players/authors?
  - What are the major subtopics?

Phase 2: Deep dives
  - One query per major subtopic
  - Find primary sources for key claims
  - Get quantitative data where available

Phase 3: Synthesis
  - Cross-reference contradictions
  - Identify gaps in coverage
  - Build structured summary with citations

Phase 4: Verification
  - Verify top 3-5 most important claims
  - Check publication dates for currency
  - Note any conflicting information
```

---

## Output Format

After completing research, always structure output as:

```markdown
## Research Summary: [Topic]

**Confidence Level**: High / Medium / Low
**Freshness**: Data from [date range]

### Key Findings
1. [Most important finding]  Source: [URL]
2. [Second finding]  Source: [URL]
3. [Third finding]  Source: [URL]

### Detailed Analysis
[Organized by subtopic, with citations]

### Data & Statistics
| Metric | Value | Source | Date |
|--------|-------|--------|------|
| [X]    | [Y]   | [Z]    | [D]  |

### Conflicting Information
[Note any sources that disagree and why]

### Sources Used
1. [Title](URL)  [Publication, Date]
2. [Title](URL)  [Publication, Date]

### Limitations
- [Any gaps in research]
- [Information that couldn't be verified]
- [Areas needing more research]
```

---

## Research Ethics & Best Practices

1. **Always cite sources**  Never present research findings as original knowledge
2. **Note recency**  Always include publication dates
3. **Acknowledge uncertainty**  "According to X" not "X is true"
4. **Flag paywalled sources**  Note if a source is behind a paywall
5. **Distinguish fact from opinion**  Clearly separate empirical data from analysis
6. **Avoid cherry-picking**  Present contradicting evidence too

---

## Error Handling

| Situation | Response |
|-----------|----------|
| No results found | Broaden query, try alternative terms |
| Only low-quality sources | Flag this explicitly, recommend primary source research |
| Conflicting information | Present both sides, note which is more authoritative |
| Information too old | Flag as potentially outdated, suggest user verify |
| Behind paywall | Note the source exists, cannot access full content |
| Topic too broad | Ask for clarification to narrow scope |
