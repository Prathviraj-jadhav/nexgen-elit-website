---
name: academic-research
description: "Academic literature search, paper analysis, and scholarly research skill. Use when: finding research papers, analyzing citations, reviewing scientific literature, scholar profiling, institution research output analysis, conference/journal monitoring, systematic literature review, patent research, or any academic or scholarly research task."
argument-hint: "Describe the academic research topic, scholar name, institution, or paper to find"
---

# Academic Research Skill

## Overview

This skill enables systematic academic research  finding papers, profiling scholars, analyzing institutions, and producing scholarly literature reviews. It is the renamed and upgraded successor to the platform-specific AMiner skill  now multi-database and universal.

---

## When to Use This Skill

- Finding research papers on a topic
- Scholar profiling (publications, h-index, affiliations)
- Literature reviews (systematic or scoping)
- Citation analysis
- Institution research output assessment
- Conference and journal monitoring
- Patent research
- Technology emergence tracking via paper trends

---

## Primary Research Databases

| Database | Strengths | Access | API |
|----------|-----------|--------|-----|
| **Semantic Scholar** | 220M papers, free API, AI summaries | Free | Yes |
| **OpenAlex** | 250M works, fully open, fast | Free | Yes |
| **PubMed** | Medical/bio sciences, very reliable | Free | Yes (NCBI Entrez) |
| **arXiv** | CS/Physics/Math preprints, latest | Free | Yes |
| **CrossRef** | DOI resolution, metadata | Free | Yes |
| **IEEE Xplore** | Engineering/CS journals | Partial | Yes (requires key) |
| **ACM DL** | Computer science | Partial | Limited |
| **AMiner** | Scholar profiles, citation graphs | Free tier | Yes |
| **Scopus / Web of Science** | Comprehensive, citation analytics | Subscription | Yes |
| **Google Scholar** | Broadest coverage | Free | Scrape only |

---

## Core Search Workflows

### Workflow 1: Topic Literature Review

```python
import requests

def search_semantic_scholar(
    query: str,
    limit: int = 20,
    year_range: str = None,  # e.g., "2022-2025"
    fields: str = "title,abstract,year,authors,citationCount,url,externalIds"
) -> list[dict]:
    """
    Search papers using Semantic Scholar API (free, no key required).
    
    API docs: https://api.semanticscholar.org/api-docs/
    """
    base_url = "https://api.semanticscholar.org/graph/v1/paper/search"
    
    params = {
        "query": query,
        "limit": limit,
        "fields": fields,
    }
    if year_range:
        params["year"] = year_range
    
    response = requests.get(base_url, params=params)
    response.raise_for_status()
    
    data = response.json()
    return data.get("data", [])

# Usage
papers = search_semantic_scholar(
    query="transformer neural networks natural language processing",
    limit=10,
    year_range="2023-2025"
)

for paper in papers:
    print(f"▶ {paper['title']} ({paper['year']})")
    print(f"  Citations: {paper['citationCount']}")
    print(f"  URL: {paper.get('url', 'N/A')}")
    print()
```

### Workflow 2: Scholar Profile

```python
def get_scholar_profile(author_name: str) -> dict:
    """
    Get scholar profile from Semantic Scholar.
    """
    # Search for author
    search_url = "https://api.semanticscholar.org/graph/v1/author/search"
    params = {
        "query": author_name,
        "fields": "name,affiliations,hIndex,citationCount,paperCount,papers"
    }
    
    response = requests.get(search_url, params=params)
    data = response.json()
    
    if not data.get("data"):
        return {"error": f"Scholar '{author_name}' not found"}
    
    author = data["data"][0]
    return {
        "name": author.get("name"),
        "affiliations": author.get("affiliations", []),
        "h_index": author.get("hIndex"),
        "total_citations": author.get("citationCount"),
        "paper_count": author.get("paperCount"),
    }

# Usage  no API key needed
profile = get_scholar_profile("Geoffrey Hinton")
print(profile)
```

### Workflow 3: OpenAlex (Broadest Coverage)

```python
def search_openalex(
    query: str,
    entity_type: str = "works",  # works, authors, institutions, venues
    per_page: int = 20,
    filter: str = None,  # e.g., "publication_year:2023"
) -> list[dict]:
    """
    Search OpenAlex  250M+ works, fully open.
    
    API docs: https://docs.openalex.org/
    Entity types: works (papers), authors, institutions, venues (journals)
    """
    base_url = f"https://api.openalex.org/{entity_type}"
    
    params = {
        "search": query,
        "per-page": per_page,
        "mailto": "your-email@example.com"  # Polite pool = faster responses
    }
    if filter:
        params["filter"] = filter
    
    response = requests.get(base_url, params=params)
    response.raise_for_status()
    
    return response.json().get("results", [])

# Examples
# Find recent papers on CRISPR
papers = search_openalex(
    "CRISPR gene editing applications",
    entity_type="works",
    filter="publication_year:2024"
)

# Find top institutions in ML research  
institutions = search_openalex(
    "machine learning AI research",
    entity_type="institutions"
)
```

### Workflow 4: arXiv Preprints (Latest Research)

```python
import xml.etree.ElementTree as ET

def search_arxiv(
    query: str,
    max_results: int = 10,
    category: str = None  # e.g., "cs.AI", "cs.LG", "cs.CV"
) -> list[dict]:
    """
    Search arXiv for preprints using the official API.
    
    arXiv categories:
    - cs.AI: Artificial Intelligence
    - cs.LG: Machine Learning
    - cs.CV: Computer Vision
    - cs.CL: Computation and Language (NLP)
    - cs.RO: Robotics
    - physics.*, math.*, q-bio.* ...
    """
    base_url = "http://export.arxiv.org/api/query"
    
    search_query = f'all:{query}'
    if category:
        search_query = f'cat:{category} AND {search_query}'
    
    params = {
        "search_query": search_query,
        "start": 0,
        "max_results": max_results,
        "sortBy": "submittedDate",
        "sortOrder": "descending"
    }
    
    response = requests.get(base_url, params=params)
    root = ET.fromstring(response.content)
    ns = {'atom': 'http://www.w3.org/2005/Atom'}
    
    papers = []
    for entry in root.findall('atom:entry', ns):
        papers.append({
            "title":    entry.find('atom:title', ns).text.strip(),
            "abstract": entry.find('atom:summary', ns).text.strip()[:300] + "...",
            "url":      entry.find('atom:id', ns).text,
            "published": entry.find('atom:published', ns).text[:10],
            "authors": [a.find('atom:name', ns).text 
                       for a in entry.findall('atom:author', ns)]
        })
    
    return papers

# Usage  get latest AI papers
latest = search_arxiv("large language model reasoning", category="cs.AI", max_results=5)
```

### Workflow 5: Paper Details by DOI

```python
def get_paper_by_doi(doi: str) -> dict:
    """Fetch paper metadata from CrossRef using DOI."""
    url = f"https://api.crossref.org/works/{doi}"
    response = requests.get(url, headers={"User-Agent": "ResearchBot/1.0"})
    
    if response.status_code == 404:
        return {"error": f"DOI not found: {doi}"}
    
    data = response.json()["message"]
    
    return {
        "title": data.get("title", ["N/A"])[0],
        "authors": [f"{a.get('given', '')} {a.get('family', '')}".strip() 
                   for a in data.get("author", [])],
        "journal": data.get("container-title", ["N/A"])[0],
        "year": data.get("published", {}).get("date-parts", [[None]])[0][0],
        "doi": doi,
        "citations": data.get("is-referenced-by-count", 0),
        "url": data.get("URL", f"https://doi.org/{doi}")
    }
```

---

## Research Report Template (Literature Review)

```markdown
# Literature Review: [Topic]

**Date**: [Date]  
**Scope**: [Date range, discipline, geography]  
**Databases searched**: [List]  
**Total papers reviewed**: [N]  
**Papers included**: [N]

## Research Questions
1. [RQ1]
2. [RQ2]

## Key Findings

### Theme 1: [Major Finding]
[2-3 paragraphs with citations]

Most influential paper: [Title] (Citations: N)  [One-sentence summary].

### Theme 2: [Finding]
...

## Research Gaps
- [Identified gap 1]
- [Identified gap 2]

## Highly Cited Papers in This Area

| Title | Authors | Year | Citations | Key Contribution |
|-------|---------|------|-----------|-----------------|
| [Title] | [Authors] | 2024 | 1,200 | [What it introduced] |

## Sources
1. [Author] (Year). [Title]. [Journal]. [DOI]
```

---

## Decision Tree: Which Database to Use?

```
Topic is medical/clinical?
  → PubMed (mandatory)

Topic is CS/AI/ML and cutting-edge?
  → arXiv + Semantic Scholar

Need h-index or citation graphs?
  → Semantic Scholar or AMiner

Need broadest coverage?
  → OpenAlex

Specific DOI lookup?
  → CrossRef

Patents?
  → Google Patents API / USPTO Patent Full-Text API / Espacenet (EPO)

Conference proceedings (CS)?
  → Semantic Scholar + DBLP (https://dblp.uni-trier.de/faq/13501473)
```

---

## Ethical Use of Academic Data

- **Do not** scrape paywalled content
- **Do not** share or distribute paywalled papers in full
- **Always cite** sources with DOI where available
- **Respect rate limits**  add delays between API calls for bulk research
- **Note** when papers are preprints (unreviewed) vs. published in peer-reviewed journals
