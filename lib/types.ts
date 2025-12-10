export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags?: string[];
  relatedArticles?: number[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}