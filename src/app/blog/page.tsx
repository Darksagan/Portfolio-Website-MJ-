import { getAllPosts } from '@/lib/posts-server'
import BlogCard from '../components/BlogCard'
import { Suspense } from 'react'
import Link from 'next/link'

function BlogContent() {
  const posts = getAllPosts()

  return (
    <div className="grid gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  )
}

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-12 text-black">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <Suspense fallback={<div className="text-center py-8">Loading posts...</div>}>
          <BlogContent />
        </Suspense>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
