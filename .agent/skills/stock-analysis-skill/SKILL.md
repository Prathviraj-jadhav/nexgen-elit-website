---
name: stock-analysis
description: "Comprehensive stock market analysis. Use when: the user wants to analyze a specific stock, asks whether to buy or sell, mentions a ticker symbol, references their holding cost or position, asks about dividends, wants to scan for market signals, manages a watchlist, or uploads a chart image for technical analysis. Covers US, global, and major equity markets."
argument-hint: "Provide a ticker symbol (e.g., AAPL, MSFT, GOOGL) and specify if you have a current position"
---

# Stock Analysis Skill

## When to Use This Skill

- Individual stock analysis and buy/sell/hold recommendations
- Position-aware analysis (given the user's cost basis)
- Technical analysis from chart images
- Dividend income analysis and safety scoring
- Market signal scanning (M&A rumours, analyst upgrades/downgrades)
- Watchlist management with price targets and stop-losses
- Multi-stock comparison

---

## Prerequisite Skills

- `finance`  Market data retrieval (stock prices, fundamentals, history)
- `VLM`  K-line / candlestick chart recognition from uploaded images
- `web-search`  News, earnings, analyst updates

---

## Commands

| Command | Trigger Examples |
|---------|-----------------|
| Stock Analysis | "Analyze AAPL", "Should I buy TSLA?", "What's your view on Microsoft?" |
| Position-Aware | "I hold AAPL at $170  should I hold or sell?", "My cost basis on GOOGL is $140" |
| Dividend Analysis | "How safe is JNJ's dividend?", "Analyze the dividends for KO, PG, JNJ" |
| Signal Scan | "Any M&A rumors today?", "Scan for early market signals" |
| Watchlist Add | "Watch NVDA with a $450 target and $380 stop-loss" |
| Watchlist View | "Show my watchlist", "Check my tracked stocks" |
| Chart Analysis | (Upload image) "Analyze this chart pattern" |

---

## Analysis Report Structure

For each stock, generate this report:

```markdown
# Stock Analysis: [TICKER]  [Company Name]
**Date**: [Date] | **Price**: $[X] | **Analyst**: AI (Not financial advice)

---

## 📰 News & Signals
[Recent earnings, analyst actions, M&A news, key developments  last 30 days]

## 🎯 Verdict
**Decision**: STRONG BUY / BUY / HOLD / SELL / STRONG SELL
**One-liner**: [Plain English summary in one sentence]
**For empty positions**: [Entry strategy with price targets]
**For existing positions**: [Hold/add/reduce rationale + current P&L if cost basis provided]

## 📈 Price Data
- Current: $[X]
- 52-Week Range: $[Low]  $[High]
- Distance from 52-week high: [X%]
- YTD performance: [X%]

## 📊 Fundamental Snapshot
| Metric | Value | Assessment |
|--------|-------|-----------|
| P/E (TTM) | X | Cheap / Fair / Expensive |
| Forward P/E | X |  |
| EPS | $X |  |
| Revenue Growth | X% |  |
| Profit Margin | X% |  |
| Debt/Equity | X |  |
| ROE | X% |  |

## 📉 Technical Analysis
- **Trend**: (Uptrend / Downtrend / Sideways)
- **Key support levels**: $[X], $[X]
- **Key resistance levels**: $[X], $[X]
- **Volume**: Normal / Abnormal (describe)
- **Pattern**: [Any notable chart pattern]

## 🎯 Trade Levels
| Level | Price | Rationale |
|-------|-------|-----------|
| Entry zone | $[X-Y] | Technical support |
| Target 1 | $[X] | Resistance / upside |
| Target 2 | $[X] | Extended upside |
| Stop-loss | $[X] | Risk limit |

## ✅ Bull vs. Bear
**Bull case**: [Why the stock could outperform]
**Bear case**: [Key risks and concerns]

---
*Disclaimer: This is not financial advice. Always conduct your own research.*
```

---

## Dividend Analysis Framework

For dividend-focused analysis:

| Metric | Good | Moderate | Poor |
|--------|------|----------|------|
| Payout ratio | < 40% | 40-70% | > 70% |
| Dividend growth streak | 25+ years (Aristocrat) | 10-24 years | < 10 years |
| 5-Year dividend CAGR | > 7% | 4-7% | < 4% |
| Earnings coverage | > 2.5x | 1.5-2.5x | < 1.5x |
| Safety score | 80-100 | 50-79 | 0-49 |

---

## Signal Scanner

When running market signal scans, search for:
1. **M&A signals**: merger, acquisition, tender offer, buyout related to sector
2. **Insider activity**: CEO/executive/director buying or selling
3. **Analyst changes**: rating upgrades, downgrades, price target changes
4. **Earnings surprises**: beats or misses vs. consensus estimates
5. **Regulatory events**: SEC filings, regulatory approvals/rejections

Rate each signal by impact (1-5 ⭐) and market direction (+/-).

---

## Position-Aware Analysis

When the user provides their cost basis, always include:
- Current P&L (%)
- Where they are relative to key levels
- Hold / add / reduce / exit recommendation based on their situation
- Tax consideration if relevant (long-term vs. short-term gains)

---

## Behavior Rules

- Never fabricate data  if a figure is unavailable, say "N/A" or "data not available"
- If price is overextended (> 5% above resistance), do NOT recommend buy
- Always provide both bull and bear cases
- Explicitly state this is not financial advice in every report
