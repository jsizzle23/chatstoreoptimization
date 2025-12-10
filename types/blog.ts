export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: Category;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  views: number;
  likes: number;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  articleId: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies?: Comment[];
} 