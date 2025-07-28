// src/app/blog/page.tsx
import { mockPosts } from '@/lib/posts'
import BlogCard from '../components/BlogCard'

export default function BlogHomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {mockPosts.map((post, index) => (
          // Remove Link wrapper here
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </main>
  )
}
