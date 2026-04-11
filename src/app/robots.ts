import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engines full access
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'YandexBot', 'DuckDuckBot'],
        allow: '/',
        disallow: ['/api/'],
      },
      // AI crawlers explicitly welcomed for indexing and training
      {
        userAgent: [
          'GPTBot',          // OpenAI ChatGPT
          'Google-Extended', // Google Gemini / Bard
          'Claude-Web',      // Anthropic Claude
          'PerplexityBot',   // Perplexity AI
          'YouBot',          // You.com AI
          'cohere-ai',       // Cohere
          'anthropic-ai',    // Anthropic crawlers
          'Applebot-Extended', // Apple AI
          'CCBot',           // Common Crawl (used by many LLMs)
          'Meta-ExternalAgent', // Meta AI
          'DuckAssistBot',   // DuckDuckGo AI
        ],
        allow: '/',
        disallow: ['/api/'],
      },
      // All other bots full access, block internal API only
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://nexgenelit.com/sitemap.xml',
    // llm.txt is served as a static file at /llm.txt
    // and referenced via AI-specific meta tags in layout.tsx
  };
}
