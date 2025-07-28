// src/lib/posts.ts - Client-safe utilities
export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    publishDate: string;
    author: string;
    featuredImage?: string;
    categories: string[];
    tags: string[];
    readTime: number;
    seoTitle: string;
    seoDescription: string;
    isPublished: boolean;
  }
  
  export interface BlogPost extends BlogPostMeta {
    content: string;
  }
  
  // Client-side utility functions that don't require fs
  export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  export function calculateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }
  
  export function extractExcerpt(content: string, maxLength: number = 150): string {
    const plainText = content.replace(/[#*`]/g, '').trim();
    if (plainText.length <= maxLength) {
      return plainText;
    }
    return plainText.substring(0, maxLength).trim() + '...';
  }
  
  export function filterPostsByTag(posts: BlogPostMeta[], tag: string): BlogPostMeta[] {
    return posts.filter(post => 
      post.tags?.some(postTag => 
        postTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
  }
  
  export function filterPostsByCategory(posts: BlogPostMeta[], category: string): BlogPostMeta[] {
    return posts.filter(post => 
      post.categories?.some(postCategory => 
        postCategory.toLowerCase().includes(category.toLowerCase())
      )
    );
  }
  
  export function sortPostsByDate(posts: BlogPostMeta[], order: 'asc' | 'desc' = 'desc'): BlogPostMeta[] {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime();
      const dateB = new Date(b.publishDate).getTime();
      return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }