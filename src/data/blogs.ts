export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  author: string;
  metaDescription: string;
  targetKeyword: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  content: string;
  faqs: BlogFAQ[];
  keyStat?: { value: string; label: string };
  relatedPosts: string[];
}

import { BLOG_PART1 } from './blogs-part1';
import { BLOG_PART2 } from './blogs-part2';

export const BLOG_POSTS: BlogPost[] = [...BLOG_PART1, ...BLOG_PART2];
