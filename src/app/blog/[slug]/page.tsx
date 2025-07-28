import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import BlogPostPage from '../../components/BlogPostPage'
import type { Metadata } from 'next'

// ✅ Use official Next.js prop type for dynamic routes
type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPage post={post} />
}

// Optional: add metadata support for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || '',
  }
}
