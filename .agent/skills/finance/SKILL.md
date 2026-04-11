---
name: finance
description: "Financial data analysis, market research, and investment intelligence skill. Use when: analyzing stocks, fetching market data, researching company financials, portfolio tracking, financial ratios analysis, market news, or any financial market-related research task."
argument-hint: "Describe the financial analysis task, stock ticker, company name, or market question"
---

# Finance Skill

## When to Use This Skill

- Analyzing specific stocks or companies
- Fetching real-time or historical market data
- Calculating financial ratios (P/E, EPS, ROE, etc.)
- Researching market trends and sector performance
- Portfolio analysis and tracking
- Financial news and earnings reports
- Commodity and currency data
- Cryptocurrency market data

---

## Data Sources (Free & Official)

| Source | Data Type | API | Free? |
|--------|-----------|-----|-------|
| **Alpha Vantage** | Stocks, forex, crypto | REST | Free tier: 25 req/day |
| **Yahoo Finance (yfinance)** | Stocks, ETFs, crypto | Python library | Free |
| **FRED (Federal Reserve)** | Economic indicators | REST | Free |
| **Twelve Data** | Real-time + historical | REST | Free tier |
| **Polygon.io** | US stocks, options | REST | Free tier |
| **CoinGecko** | Cryptocurrency | REST | Free |
| **World Bank Open Data** | Macro economics | REST | Free |
| **Quandl (NASDAQ)** | Financial datasets | REST | Partial free |

---

## Quick Data Retrieval

### 1. yfinance (Simplest  Python)

```python
import yfinance as yf

def get_stock_info(ticker: str) -> dict:
    """Get current stock data and key metrics."""
    stock = yf.Ticker(ticker)
    info = stock.info
    
    return {
        "symbol": ticker.upper(),
        "name": info.get("longName", "N/A"),
        "price": info.get("currentPrice") or info.get("regularMarketPrice"),
        "market_cap": info.get("marketCap"),
        "pe_ratio": info.get("trailingPE"),
        "forward_pe": info.get("forwardPE"),
        "eps": info.get("trailingEps"),
        "dividend_yield": info.get("dividendYield"),
        "52_week_high": info.get("fiftyTwoWeekHigh"),
        "52_week_low":  info.get("fiftyTwoWeekLow"),
        "beta": info.get("beta"),
        "revenue": info.get("totalRevenue"),
        "net_income": info.get("netIncomeToCommon"),
        "sector": info.get("sector"),
        "industry": info.get("industry"),
        "country": info.get("country"),
        "summary": info.get("longBusinessSummary", "")[:300] + "..."
    }

def get_historical_prices(
    ticker: str,
    period: str = "1y",   # 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
    interval: str = "1d"  # 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo
) -> "pd.DataFrame":
    """Get price history as a DataFrame."""
    stock = yf.Ticker(ticker)
    return stock.history(period=period, interval=interval)

# Usage
info = get_stock_info("AAPL")
print(f"{info['name']}: ${info['price']}")
print(f"P/E Ratio: {info['pe_ratio']}")
print(f"Market Cap: ${info['market_cap']:,.0f}")

# Get 1 year of daily prices
history = get_historical_prices("MSFT", period="1y")
print(history[["Close", "Volume"]].tail(5))
```

### 2. Batch Multi-Stock Analysis

```python
import yfinance as yf
import pandas as pd

def compare_stocks(tickers: list[str]) -> pd.DataFrame:
    """Compare multiple stocks side by side."""
    
    metrics = []
    for ticker in tickers:
        try:
            stock = yf.Ticker(ticker)
            info = stock.info
            
            metrics.append({
                "Ticker": ticker,
                "Name": info.get("shortName", "N/A"),
                "Price": round(info.get("currentPrice", 0), 2),
                "Market Cap ($B)": round(info.get("marketCap", 0) / 1e9, 1),
                "P/E": round(info.get("trailingPE", 0), 1),
                "EPS": round(info.get("trailingEps", 0), 2),
                "Div Yield %": round((info.get("dividendYield", 0) or 0) * 100, 2),
                "Beta": round(info.get("beta", 0), 2),
                "52W High": round(info.get("fiftyTwoWeekHigh", 0), 2),
                "52W Low": round(info.get("fiftyTwoWeekLow", 0), 2),
                "Sector": info.get("sector", "N/A"),
            })
        except Exception as e:
            metrics.append({"Ticker": ticker, "Error": str(e)})
    
    return pd.DataFrame(metrics)

# Compare tech giants
df = compare_stocks(["AAPL", "MSFT", "GOOGL", "AMZN", "META"])
print(df.to_string(index=False))
```

### 3. Alpha Vantage API (Real-Time Quotes)

```python
import requests
import os

ALPHA_VANTAGE_KEY = os.environ.get("ALPHA_VANTAGE_API_KEY", "demo")

def get_realtime_quote(ticker: str) -> dict:
    """Get real-time stock quote from Alpha Vantage."""
    url = "https://www.alphavantage.co/query"
    params = {
        "function": "GLOBAL_QUOTE",
        "symbol": ticker,
        "apikey": ALPHA_VANTAGE_KEY
    }
    
    response = requests.get(url, params=params)
    data = response.json().get("Global Quote", {})
    
    if not data:
        return {"error": f"No data found for {ticker}"}
    
    return {
        "symbol":        data.get("01. symbol"),
        "price":         float(data.get("05. price", 0)),
        "change":        float(data.get("09. change", 0)),
        "change_pct":    data.get("10. change percent", "0%"),
        "volume":        int(data.get("06. volume", 0)),
        "high":          float(data.get("03. high", 0)),
        "low":           float(data.get("04. low", 0)),
        "prev_close":    float(data.get("08. previous close", 0)),
        "latest_day":    data.get("07. latest trading day"),
    }

def get_economic_indicator(indicator: str = "GDP") -> list:
    """
    Get economic indicators from Alpha Vantage.
    
    indicators: GDP, REAL_GDP, CPI, INFLATION, RETAIL_SALES, 
               UNEMPLOYMENT, NONFARM_PAYROLL, FEDERAL_FUNDS_RATE
    """
    url = "https://www.alphavantage.co/query"
    params = {
        "function": indicator,
        "interval": "annual",
        "apikey": ALPHA_VANTAGE_KEY
    }
    
    response = requests.get(url, params=params)
    return response.json().get("data", [])[:10]  # Most recent 10 values
```

### 4. FRED Economic Data

```python
def get_fred_series(series_id: str, limit: int = 20) -> list[dict]:
    """
    Fetch economic data series from Federal Reserve (FRED).
    No API key required for basic access.
    
    Common series IDs:
    - CPIAUCSL:  Consumer Price Index (Inflation)
    - UNRATE:    Unemployment Rate
    - GDP:       Gross Domestic Product
    - FEDFUNDS:  Federal Funds Rate
    - DGS10:     10-Year Treasury Rate
    - SP500:     S&P 500 Index
    - DCOILWTICO: WTI Crude Oil Price
    """
    url = "https://fred.stlouisfed.org/graph/fredgraph.csv"
    params = {"id": series_id}
    
    response = requests.get(url, params=params)
    lines = response.text.strip().split("\n")
    
    data = []
    for line in lines[1:][-limit:]:  # Skip header, get last N entries
        date, value = line.split(",")
        try:
            data.append({"date": date, "value": float(value)})
        except ValueError:
            pass  # Skip missing data points
    
    return data

# Usage
cpi = get_fred_series("CPIAUCSL", limit=12)
print("Recent CPI data:")
for d in cpi:
    print(f"  {d['date']}: {d['value']}")
```

### 5. Cryptocurrency Data

```python
def get_crypto_data(coin_id: str = "bitcoin") -> dict:
    """
    Get cryptocurrency data from CoinGecko (free, no API key).
    
    Common coin IDs: bitcoin, ethereum, solana, cardano, dogecoin
    """
    url = f"https://api.coingecko.com/api/v3/coins/{coin_id}"
    params = {
        "localization": "false",
        "tickers": "false",
        "market_data": "true",
        "community_data": "false",
        "developer_data": "false"
    }
    
    response = requests.get(url, params=params)
    data = response.json()
    market = data.get("market_data", {})
    
    return {
        "name": data.get("name"),
        "symbol": data.get("symbol", "").upper(),
        "price_usd": market.get("current_price", {}).get("usd"),
        "market_cap_usd": market.get("market_cap", {}).get("usd"),
        "volume_24h": market.get("total_volume", {}).get("usd"),
        "change_24h_pct": market.get("price_change_percentage_24h"),
        "change_7d_pct": market.get("price_change_percentage_7d"),
        "ath_usd": market.get("ath", {}).get("usd"),
        "ath_date": market.get("ath_date", {}).get("usd"),
        "rank": data.get("market_cap_rank"),
    }
```

---

## Financial Analysis Templates

### Stock Analysis Report Format

```markdown
# Stock Analysis: [TICKER]  [Company Name]

**Date**: [Date]  
**Current Price**: $[X]  
**Target Price**: $[X] (Based on [method])
**Recommendation**: BUY / HOLD / SELL

## Business Overview
[2-3 sentence description of what the company does]

## Key Metrics

| Metric | Value | Industry Avg |
|--------|-------|-------------|
| P/E Ratio | X | X |
| Forward P/E | X | X |
| EPS | $X | X |
| Revenue Growth | X% | X% |
| Profit Margin | X% | X% |
| Debt/Equity | X | X |
| Dividend Yield | X% | X% |
| Beta | X | 1.0 |

## Financial Trends (3-5 years)
[Revenue growth, profitability trends, key milestones]

## Competitive Position
- Main competitors: [A], [B], [C]
- Market share: [X%]
- Competitive advantages: [moat analysis]

## Risks
1. [Risk 1]  [Severity: Low/Med/High]
2. [Risk 2]

## Catalysts for Growth
- [Near-term: next 12 months]
- [Long-term: 2-5 years]

## Investment Thesis
[2-3 paragraph summary of whether this is attractive at the current valuation]

*Disclaimer: This is not financial advice. Conduct your own due diligence.*
```

---

## Usage Notes & Ethics

- **Data Sources**: Use official APIs whenever possible (Alpha Vantage, Yahoo Finance, FRED)
- **Rate Limits**: Respect API rate limits; add delays for bulk requests
- **Disclaimer**: Always include "This is not financial advice" when providing analysis
- **Data Currency**: Always include the timestamp of data; prices can change rapidly
- **Completeness**: Acknowledge when data is unavailable or incomplete
