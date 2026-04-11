---
name: market-research-reports
description: "Generate comprehensive market research reports in the style of top consulting firms (McKinsey, BCG, Gartner). Use when: conducting industry analysis, market sizing (TAM/SAM/SOM), competitive landscape analysis, market entry assessment, business case development, strategic planning, due diligence materials, or any task requiring professional-grade market intelligence."
argument-hint: "Describe the market, industry, or business question to research"
---

# Market Research Reports

## Overview

This skill generates **professional-grade market research reports** modeled after deliverables from McKinsey, BCG, Bain, Gartner, and Forrester. Reports include structured analysis, data visualization, multi-framework strategic analysis, and actionable recommendations.

**Key Features:**
- Comprehensive 20-50+ page reports for major research
- Data-driven analysis with sourced statistics
- Multi-framework approach: Porter's Five Forces, PESTLE, SWOT, BCG Matrix, TAM/SAM/SOM
- Visual-ready: includes tables, charts, and data for visualization
- Actionable strategic recommendations

---

## When to Use This Skill

- Market analysis for investment decisions
- Industry landscape reports for strategic planning
- Competitive intelligence and benchmarking
- Market sizing (TAM/SAM/SOM)
- Market entry opportunity assessment
- M&A due diligence preparation
- Go-to-market strategy documentation
- Regulatory impact analysis
- Business case for new products or launches

---

## Research Workflow

### Phase 1: Scope Definition (Ask First)

Before researching, confirm:
```markdown
**Research Brief**
- Market/Industry: [specific market]
- Geography: [global / US / EU / APAC / specific country]
- Time horizon: [current state / 3-year / 5-year outlook]
- Key questions: [What are we trying to answer?]
- Primary audience: [investor / executive / product team]
- Required depth: [overview / standard / deep]
- Output format: [markdown / HTML report / slides outline]
```

### Phase 2: Data Collection

For each major section, conduct systematic research:

```
Round 1: Market overview
- Search: "[industry] market size revenue 2024 site:statista.com OR site:grandviewresearch.com OR site:ibisworld.com"
- Search: "[industry] market forecast growth rate CAGR 2024 2025 2026"

Round 2: Competitive landscape
- Search: "top companies [industry] market share 2024"
- Search: "[industry] competitive analysis [region]"

Round 3: Trends and forces
- Search: "[industry] trends disruption emerging technology 2024 2025"
- Search: "[industry] regulatory environment policy recent"

Round 4: Customer and demand drivers
- Search: "[industry] customer segments demand drivers"
- Search: "[industry] consumer behavior purchasing trends"

Round 5: Financial benchmarks
- Search: "[industry] average revenue profitability margins"
- Search: "[company A] OR [company B] annual revenue growth 2023 2024"
```

### Phase 3: Analysis Frameworks

Apply these frameworks systematically:

#### 1. TAM / SAM / SOM Sizing

```markdown
**TAM (Total Addressable Market)**
= Total global market revenue for the category
Source: [market research report or calculation method]
2024 value: $[X]B | CAGR: [X]%

**SAM (Serviceable Addressable Market)**
= Portion of TAM you can realistically target given geography, product fit
= TAM × [geographic filter %] × [segment filter %]
2024 value: $[X]B

**SOM (Serviceable Obtainable Market)**
= Realistic market share you can capture in 3-5 years
= SAM × [realistic market share percentage]
Year 1 target: $[X]M | Year 3 target: $[X]M
```

#### 2. Porter's Five Forces

```markdown
| Force | Rating (Low/Medium/High) | Evidence |
|-------|------------------------|---------|
| Threat of New Entrants | [H/M/L] | [Key barriers or lack thereof] |
| Supplier Power | [H/M/L] | [Concentration, switching costs] |
| Buyer Power | [H/M/L] | [Volume, alternatives, price sensitivity] |
| Threat of Substitutes | [H/M/L] | [Alternative solutions, switching ease] |
| Competitive Rivalry | [H/M/L] | [# of players, growth rate, differentiation] |

**Overall Industry Attractiveness**: [High / Moderate / Low]
**Implication**: [1-2 sentence strategic takeaway]
```

#### 3. PESTLE Analysis

```markdown
| Factor | Key Findings | Impact | Trend |
|--------|-------------|--------|-------|
| Political | [regulations, trade policy] | +/- | ↑/↓/→ |
| Economic | [GDP, inflation, rates] | +/- | ↑/↓/→ |
| Social | [demographics, culture] | +/- | ↑/↓/→ |
| Technological | [disruption, digitization] | +/- | ↑/↓/→ |
| Legal | [compliance, IP] | +/- | ↑/↓/→ |
| Environmental | [sustainability, climate] | +/- | ↑/↓/→ |
```

#### 4. Competitive Positioning Matrix

```markdown
| Company | Market Share | Revenue ($M) | YoY Growth | Differentiation |
|---------|-------------|-------------|-----------|----------------|
| Leader A | X% | $XXX | X% | [Key differentiator] |
| Leader B | X% | $XXX | X% | [Key differentiator] |
| Challenger C | X% | $XXX | X% | [Key differentiator] |
| Niche D | X% | $XXX | X% | [Key differentiator] |
```

#### 5. SWOT Analysis

```markdown
| Strengths | Weaknesses |
|-----------|-----------|
| [Internal advantage 1] | [Internal limitation 1] |
| [Internal advantage 2] | [Internal limitation 2] |

| Opportunities | Threats |
|--------------|---------|
| [External opportunity 1] | [External risk 1] |
| [External opportunity 2] | [External risk 2] |
```

---

## Report Structure

### Standard Market Research Report

```markdown
# [Industry/Market] Market Analysis Report
**Date**: [Month Year]
**Research Scope**: [Geography, Time Period]
**Prepared for**: [Audience]

---

## Executive Summary
[3-5 paragraphs covering: market size, key growth drivers, competitive dynamics, major risks, and top strategic recommendations. Write this LAST after completing all sections.]

**Key Metrics At-a-Glance**
| Metric | Value |
|--------|-------|
| Market Size (2024) | $XB |
| CAGR (2024-2029) | X% |
| Market Size (2029) | $XB |
| Largest Region | [Region] (X%) |
| Market Leader | [Company] (X% share) |

---

## 1. Market Overview
### 1.1 Market Definition and Scope
[Define the market clearly  what's included, what's excluded]

### 1.2 Market Size and Growth
[Historical revenue + forecasts with data sources]

### 1.3 Market Segmentation
[By product type, application, geography, end-user]

---

## 2. Market Dynamics
### 2.1 Key Growth Drivers
[3-5 specific, evidence-based drivers with data]

### 2.2 Market Challenges and Restraints
[3-5 specific challenges with evidence]

### 2.3 Market Trends
[5+ emerging trends reshaping the market]

---

## 3. Competitive Landscape
### 3.1 Market Structure
[Is it consolidated or fragmented? Top X players control what %?]

### 3.2 Porter's Five Forces
[Framework analysis  use the template above]

### 3.3 Key Player Profiles
[3-5 leading companies: business model, revenue, strategy, recent moves]

### 3.4 Competitive Positioning
[Matrix or quadrant analysis]

---

## 4. Market Sizing: TAM / SAM / SOM
[Use the framework above with calculations and assumptions]

---

## 5. Strategic Analysis
### 5.1 PESTLE Analysis
### 5.2 SWOT Analysis

---

## 6. Market Entry Assessment (if applicable)
### 6.1 Entry Barriers
### 6.2 Recommended Entry Strategy
### 6.3 Go-to-Market Timeline

---

## 7. Strategic Recommendations
[5-7 specific, actionable recommendations with rationale]

1. **[Recommendation Title]**: [2-3 sentence description + rationale + expected impact]

---

## 8. Appendices
### A. Data Sources
### B. Methodology Notes
### C. Full Competitor Profiles
### D. Detailed Financial Benchmarks

---

*Sources: [List all main sources with publication dates]*
*Disclaimer: This report is based on publicly available information. All projections are estimates.*
```

---

## Visualization Guidance

For charts and graphs in the report, specify these to be generated or described:

| Chart Type | Use Case |
|-----------|---------|
| Bar chart | Market size by year (historical + forecast) |
| Pie/donut | Market share by company or segment |
| Waterfall | Revenue growth from drivers and detractors |
| Scatter plot | Competitive positioning (x: market share, y: growth) |
| Area chart | Market growth trends by segment |
| Spider/radar | Multi-factor company comparison |

If using the `image-generation` skill or any chart library, create these as actual visuals in the report.

---

## Quality Standards

Every report must meet:
- [ ] All statistics have a source and publication year
- [ ] Executive summary can stand alone as a 1-page brief
- [ ] Recommendations are specific and actionable (not vague)
- [ ] Competitive data is current (within 18 months)
- [ ] TAM/SAM/SOM methodology is explained, not just stated
- [ ] Report is formatted for the stated audience
- [ ] Includes both risks and opportunities (not one-sided)
