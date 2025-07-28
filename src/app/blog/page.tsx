// src/app/blog/page.tsx
import { Suspense } from 'react'
import { mockPosts } from '@/lib/posts'
import BlogCard from '../components/BlogCard'

function BlogContent() {
  return (
    <div className="grid gap-8">
      {mockPosts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  )
}

export default function BlogHomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <Suspense fallback={<div className="text-center py-8">Loading posts...</div>}>
        <BlogContent />
      </Suspense>
    </main>
  )
}