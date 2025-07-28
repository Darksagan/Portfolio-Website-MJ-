import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import BlogPostPage from '../../components/BlogPostPage'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return <BlogPostPage post={post} />
}
