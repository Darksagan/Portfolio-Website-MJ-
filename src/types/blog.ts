export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  publishDate: string
  author: string
  featuredImage?: string
  categories: string[]
  tags: string[]
  readTime: number
  seoTitle?: string
  seoDescription?: string
  isPublished: boolean
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

