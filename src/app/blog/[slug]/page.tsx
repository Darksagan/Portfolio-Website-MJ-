import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import BlogPostPage from '../../components/BlogPostPage'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

// ✅ Inline typing directly from the route file's expected structure
export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPage post={post} />
}
