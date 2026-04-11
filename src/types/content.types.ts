export interface BlogPost {
  title: string;
  slug: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  category: 'industry' | 'product' | 'policy' | 'technology';
  tags: string[];
  excerpt: string;
  coverImage: string;
  featured: boolean;
  readingTime: number;
  content: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  publishedAt: string;
  featured: boolean;
}

export interface JobOpening {
  title: string;
  slug: string;
  department: 'engineering' | 'sales' | 'operations' | 'design';
  location: string;
  type: 'full-time' | 'contract' | 'internship';
  remote: boolean;
  postedAt: string;
  active: boolean;
}
