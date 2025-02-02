export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  visibility: boolean;
  featuredImageDesktop: {
    id: number;
    url: string;
  };
  featuredImageMobile: {
    id: number;
    url: string;
  };
  slug: string;
  readingTime?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
