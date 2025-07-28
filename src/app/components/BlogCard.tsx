'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPostMeta } from '@/types/blog'
import { formatDate } from '@/lib/posts' // or '@/lib/utils' if you moved formatDate there


interface BlogCardProps {
  post: BlogPostMeta
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              loading="lazy"  // Add this line
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-4xl font-bold text-gray-300">
                {post.title.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {post.categories.slice(0, 2).map((category, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-black text-white rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <time dateTime={post.publishDate}>
              {formatDate(post.publishDate)}
            </time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors line-clamp-2">
            {post.title}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              By {post.author}
            </span>
            <motion.div
              className="text-black font-medium group-hover:translate-x-1 transition-transform"
              whileHover={{ x: 4 }}
            >
              Read more →
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

