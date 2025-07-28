import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import BlogPostPage from '../../components/BlogPostPage'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: Promise<BlogPostProps>) {
  const { slug } = await params // await here!
  const post = getPostBySlug(slug)
  console.log('Post loaded:', post)

  if (!post) notFound()
  return <BlogPostPage post={post} />
}
