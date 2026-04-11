---
name: multi-search-engine
description: "Multi-search engine integration covering major global search engines. Use when: conducting comprehensive web research, need to search across multiple engines for better coverage, want to avoid single-engine bias, or need to fetch web content without an API key."
argument-hint: "Describe what you need to search for and any preferred engines"
---

# Multi Search Engine

Universal multi-engine web search strategy using direct URL patterns. No API keys required.

---

## Global Search Engines

| Engine | URL Pattern | Best For |
|--------|-------------|---------|
| **Google** | `https://www.google.com/search?q={keyword}` | Broadest coverage, SEO results |
| **Bing** | `https://www.bing.com/search?q={keyword}` | Microsoft ecosystem, code search |
| **DuckDuckGo** | `https://duckduckgo.com/?q={keyword}` | Privacy-respecting, unfiltered |
| **Brave Search** | `https://search.brave.com/search?q={keyword}` | Independent index, AI results |
| **Kagi** | `https://kagi.com/search?q={keyword}` | High-quality curated results |
| **Perplexity** | `https://www.perplexity.ai/search?q={keyword}` | AI-summarized with citations |
| **HackerNews** | `https://hn.algolia.com/?q={keyword}` | Tech & dev community discussions |
| **Startpage** | `https://www.startpage.com/sp/search?query={keyword}` | Google results with privacy |

---

## Specialized Search Engines

| Engine | URL Pattern | Best For |
|--------|-------------|---------|
| **Google Scholar** | `https://scholar.google.com/scholar?q={keyword}` | Academic papers |
| **arXiv** | `https://arxiv.org/search/?query={keyword}` | Preprint research papers |
| **GitHub** | `https://github.com/search?q={keyword}` | Open source code repositories |
| **Stack Overflow** | `https://stackoverflow.com/search?q={keyword}` | Programming Q&A |
| **npm** | `https://www.npmjs.com/search?q={keyword}` | Node.js packages |
| **PyPI** | `https://pypi.org/search/?q={keyword}` | Python packages |
| **Reddit** | `https://www.reddit.com/search/?q={keyword}` | Community discussions |
| **YouTube** | `https://www.youtube.com/results?search_query={keyword}` | Video content |

---

## Quick Examples

```javascript
// Google search
web_fetch({ url: "https://www.google.com/search?q=nextjs+15+new+features" })

// Bing search
web_fetch({ url: "https://www.bing.com/search?q=site:github.com+react+state+library" })

// DuckDuckGo (privacy-focused)
web_fetch({ url: "https://duckduckgo.com/?q=open+source+llm+benchmark" })

// Brave Search
web_fetch({ url: "https://search.brave.com/search?q=AI+coding+tools+comparison+2025" })

// HackerNews (tech community)
web_fetch({ url: "https://hn.algolia.com/?q=postgresql+performance+tips" })

// GitHub code search
web_fetch({ url: "https://github.com/search?q=language%3Atypescript+openai+streaming&type=repositories" })

// arXiv research
web_fetch({ url: "https://arxiv.org/search/?query=large+language+models+reasoning&searchtype=all" })

// Stack Overflow
web_fetch({ url: "https://stackoverflow.com/search?q=react+useEffect+cleanup" })
```

---

## Search Operators

Most search engines support these natural-language operators:

| Operator | Syntax | Description | Works On |
|----------|--------|-------------|---------|
| **Site search** | `site:example.com query` | Search within one domain | Google, Bing, DDG |
| **Exact match** | `"exact phrase"` | Match phrase exactly | All engines |
| **Exclude** | `query -term` | Exclude results with term | All engines |
| **OR** | `cat OR dog` | Either term | All engines |
| **File type** | `filetype:pdf query` | Specific file type | Google, Bing |
| **Title** | `intitle:keyword` | Keyword in page title | Google, Bing |
| **URL** | `inurl:keyword` | Keyword in page URL | Google, Bing |
| **Related** | `related:example.com` | Similar sites | Google |

---

## Time Filters

### Google
```
tbs=qdr:h  → Past hour
tbs=qdr:d  → Past day
tbs=qdr:w  → Past week
tbs=qdr:m  → Past month
tbs=qdr:y  → Past year
```

Example: `https://www.google.com/search?q=AI+news&tbs=qdr:d`

### Bing
```
&freshness=Day   → Past 24 hours
&freshness=Week  → Past week
&freshness=Month → Past month
```

---

## When to Use Which Engine

```
Topic needs broad coverage?   → Google
Tech/dev topic?               → Bing or HackerNews
Academic research?            → Google Scholar + arXiv
Code examples?                → GitHub + Stack Overflow
Community opinions?           → Reddit + HackerNews
Latest news (unfiltered)?     → DuckDuckGo or Brave
Package/library info?         → npm or PyPI
AI-summarized answer?         → Perplexity
```

---

## Multi-Engine Strategy for Comprehensive Research

For important topics, search across multiple engines to reduce bias:

1. **Start with Google** for breadth and overall context
2. **Cross-check with Bing** for any coverage gaps
3. **Search HackerNews** for community reactions and developer insights
4. **Search GitHub** if code examples are needed
5. **Search Reddit** for user experiences and opinions

This ensures you're not missing stories that one engine might filter or deprioritize.
