---
name: deep-research
description: "Advanced multi-source deep research and structured HTML report generator. Use when: conducting systematic research on complex topics, producing professional research reports, analysis that requires multiple search angles, competitive analysis, technology landscape research, or any task requiring comprehensive, cited, structured research output."
argument-hint: "Describe the research topic and desired depth/scope"
---

# Deep Research Skill

## Overview

This skill conducts systematic, multi-step research on complex topics and produces structured, publication-quality reports. It is the renamed and upgraded successor to the platform-specific Chinese research tool  now universal and compatible with any AI assistant or search environment.

---

## When to Use This Skill

- Deep-dive research on complex or technical topics
- Competitive landscape analysis
- Technology trend reports
- Policy or regulatory research
- Market analysis and industry overview
- Academic literature synthesis (non-specialized  for scholarly papers, see `academic-research`)
- Any request for a comprehensive, cited research report

---

## Research Methodology

### Phase 1: Problem Decomposition (Think Before Searching)

Before issuing any searches, build a mental model:

```markdown
## Research Map for: [Topic]

### Core Question
[The fundamental question to answer]

### Sub-Questions
1. [What is the current state?]
2. [Who are the key players?]
3. [What are the main challenges/trends?]
4. [What does data/evidence show?]
5. [What are competing viewpoints?]

### Information Gaps
- [What key facts are missing?]
- [Where might existing coverage be biased?]

### Search Strategy
Round 1: [Broad landscape queries]
Round 2: [Deep-dive queries for each sub-question]
Round 3: [Verification / contradictory evidence queries]
Round 4: [Data / statistics queries]
```

### Phase 2: Systematic Search (3-5 Rounds)

Each round should address a specific sub-question:

```
Round 1: Topic overview + major developments
Search: "[topic] overview 2024 site:reuters.com OR site:ft.com OR site:techcrunch.com"

Round 2: Deep technical/detailed
Search: "[specific aspect] research data statistics 2024"

Round 3: Expert perspectives  
Search: "[topic] expert analysis implications"

Round 4: Counterarguments + challenges
Search: "[topic] criticism problems challenges limitations"

Round 5: Data verification
Search: "[specific claim] evidence source OR study"
```

### Phase 3: Critical Evaluation

For each piece of information found, assess:

```
✅ Tier 1: Official reports, peer-reviewed, major news agencies
⚠️ Tier 2: Industry analysts, tech publications, expert blogs
❓ Tier 3: Forums, anonymous sources, unverified claims
```

Explicitly note when:
- Sources conflict → Present both views, note which is more authoritative
- Data is old → Flag with date, note whether still likely current
- Coverage is thin → Flag as "limited information available"

### Phase 4: Dynamic Reflection

After each search round, reflect:
- Have all sub-questions been addressed?
- Is there enough evidence to support major claims?
- Are there important angles not yet explored?
- Are any findings surprising and worth following up?

Continue searching until all critical sub-questions are well-supported.

---

## Report Structure

### Standard Research Report Format

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[REPORT TITLE]</title>
  <style>
    /* === DESIGN SYSTEM === */
    :root {
      --color-primary: #0D6EFD;
      --color-text:    #212529;
      --color-muted:   #6C757D;
      --color-border:  #DEE2E6;
      --color-bg:      #FFFFFF;
      --color-surface: #F8F9FA;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      font-size: 16px;
      line-height: 1.75;
      color: var(--color-text);
      background: var(--color-bg);
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    /* HEADER */
    .report-header {
      text-align: center;
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .report-meta { color: var(--color-muted); font-size: 0.9rem; }

    /* HEADINGS */
    h2 {
      font-size: 1.4rem;
      font-weight: 600;
      margin: 2.5rem 0 1rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    h2::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-primary);
      flex-shrink: 0;
    }

    h3 { font-size: 1.15rem; font-weight: 600; margin: 1.5rem 0 0.75rem; }

    /* TABLE OF CONTENTS */
    nav.toc {
      background: var(--color-surface);
      border-left: 3px solid var(--color-primary);
      padding: 1.25rem 1.5rem;
      margin-bottom: 2.5rem;
      border-radius: 0 8px 8px 0;
    }

    nav.toc h2 { font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; border: none; margin: 0 0 1rem; }
    nav.toc h2::before { display: none; }

    nav.toc ul { list-style: none; }
    nav.toc > ul > li { margin-bottom: 0.4rem; counter-increment: toc-item; }
    nav.toc a { color: var(--color-primary); text-decoration: none; }
    nav.toc a:hover { text-decoration: underline; }
    nav.toc ul ul { padding-left: 1.5rem; margin-top: 0.3rem; }
    nav.toc ul ul a { color: var(--color-muted); font-size: 0.9rem; }

    /* CONTENT */
    p { margin-bottom: 1rem; }

    blockquote {
      border-left: 3px solid var(--color-primary);
      padding: 0.75rem 1.25rem;
      background: var(--color-surface);
      margin: 1.5rem 0;
      font-style: italic;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1.5rem 0;
      font-size: 0.95rem;
    }

    th {
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 2px solid var(--color-primary);
      font-weight: 600;
    }

    td { padding: 0.65rem 1rem; border-bottom: 1px solid var(--color-border); }
    tr:hover td { background: var(--color-surface); }

    /* KEY FINDINGS BOX */
    .key-findings {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: 1.5rem;
      margin: 1.5rem 0;
    }

    .key-findings h3 { margin-top: 0; color: var(--color-primary); }
    .key-findings ul { padding-left: 1.5rem; }
    .key-findings li { margin-bottom: 0.5rem; }

    /* SOURCES */
    .sources { margin-top: 3rem; padding-top: 1.5rem; border-top: 2px solid var(--color-border); }
    .sources ol { padding-left: 1.5rem; font-size: 0.9rem; }
    .sources li { margin-bottom: 0.5rem; }
    .sources a { color: var(--color-primary); }

    /* CHART */
    .chart-container { margin: 2rem 0; }
    figure { margin: 1.5rem 0; }
    figcaption { font-size: 0.875rem; color: var(--color-muted); margin-top: 0.5rem; text-align: center; }

    /* PRINT */
    @media print {
      body { font-size: 12pt; }
      canvas { max-height: 350px !important; }
      nav.toc { page-break-after: always; }
    }
  </style>
</head>
<body>
<div class="container">

  <!-- HEADER -->
  <header class="report-header">
    <h1>[REPORT TITLE]</h1>
    <p class="report-meta">
      Research Report &bull; [Date] &bull; [Scope/Audience]
    </p>
  </header>

  <!-- KEY FINDINGS -->
  <div class="key-findings">
    <h3>Key Findings</h3>
    <ul>
      <li>[Finding 1  specific, data-backed]</li>
      <li>[Finding 2  specific, data-backed]</li>
      <li>[Finding 3  specific, data-backed]</li>
    </ul>
  </div>

  <!-- TABLE OF CONTENTS (auto-generate from H2s) -->
  <nav class="toc" aria-label="Table of contents">
    <h2>Contents</h2>
    <ul>
      <li><a href="#section-1">1. [Section Title]</a>
        <ul>
          <li><a href="#section-1-1">[Subsection]</a></li>
        </ul>
      </li>
      <li><a href="#section-2">2. [Section Title]</a></li>
    </ul>
  </nav>

  <!-- MAIN CONTENT -->
  <main>
    <section id="section-1">
      <h2>[Section Title]</h2>
      <p>[Content with inline citations like <a href="#ref-1">[1]</a>]</p>

      <h3 id="section-1-1">[Subsection]</h3>
      <p>[Content]</p>

      <!-- Example data table -->
      <table>
        <thead>
          <tr><th>Metric</th><th>Value</th><th>Source</th></tr>
        </thead>
        <tbody>
          <tr><td>[Label]</td><td>[Value]</td><td><a href="#ref-1">[1]</a></td></tr>
        </tbody>
      </table>

      <!-- Example quote -->
      <blockquote>
        "[Direct quote from a credible source]"
        <footer> [Source, Publication, Year]</footer>
      </blockquote>

      <!-- Example chart -->
      <figure>
        <div class="chart-container" style="position:relative;height:300px;">
          <canvas id="chart1"></canvas>
        </div>
        <figcaption>Figure 1: [Description of what the chart shows]</figcaption>
      </figure>
    </section>
  </main>

  <!-- SOURCES -->
  <section class="sources">
    <h2>Sources</h2>
    <ol>
      <li id="ref-1"><a href="[URL]">[Title]</a>  [Publication], [Date]</li>
    </ol>
  </section>

</div>

<!-- CHART.JS -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  // Example chart
  const ctx = document.getElementById('chart1');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
          label: '[Metric]',
          data: [10, 20, 35, 50],
          backgroundColor: 'rgba(13, 110, 253, 0.5)',
          borderColor: 'rgba(13, 110, 253, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: { mode: 'index', intersect: false },
          legend: { display: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#E9ECEF' },
            title: { display: true, text: '[Y-axis label]' }
          }
        }
      }
    });
  }
</script>
</body>
</html>
```

---

## Prohibited Behaviors

- Never skip the research phase and go straight to writing
- Never plagiarize  always paraphrase and cite
- Never output an incomplete report (missing sections, placeholder charts)
- Never use outdated data without flagging the date
- Never present one-sided analysis without addressing counterarguments
- Never claim certainty when evidence is thin  use: "suggests / indicates / according to"

---

## Output Formats

| Format | Description | When to Use |
|--------|-------------|-------------|
| **HTML Report** | Full styled report with charts, TOC | Default for comprehensive research |
| **Markdown Summary** | 500-1000 word overview | Quick summaries or partial research |
| **Data Table** | Tabular comparison of key metrics | Competitive analysis |
| **Bullet Points** | Key facts and citations | Quick fact-finding |