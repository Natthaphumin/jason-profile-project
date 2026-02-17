/**
 * Global TypeScript types and interfaces
 */

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  publishedAt: Date;
  updatedAt?: Date;
  author: Author;
  tags?: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
