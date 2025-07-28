import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts-server'
import BlogPostPage from '../../components/BlogPostPage'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

async function BlogPostContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPage post={post} />
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <Suspense fallback={<div className="text-center py-8">Loading post...</div>}>
      <BlogPostContent slug={slug} />
    </Suspense>
  )
}