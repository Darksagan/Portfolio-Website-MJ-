import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPost, BlogPostMeta } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): BlogPostMeta[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        publishDate: matterResult.data.publishDate,
        author: matterResult.data.author,
        featuredImage: matterResult.data.featuredImage,
        categories: matterResult.data.categories || [],
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime || 5,
        seoTitle: matterResult.data.seoTitle || matterResult.data.title,
        seoDescription: matterResult.data.seoDescription || matterResult.data.excerpt,
        isPublished: matterResult.data.isPublished !== false // default to true
      } as BlogPostMeta
    })

  // Sort posts by date
  return allPostsData
    .filter(post => post.isPublished)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      publishDate: matterResult.data.publishDate,
      author: matterResult.data.author,
      featuredImage: matterResult.data.featuredImage,
      categories: matterResult.data.categories || [],
      tags: matterResult.data.tags || [],
      readTime: matterResult.data.readTime || 5,
      seoTitle: matterResult.data.seoTitle || matterResult.data.title,
      seoDescription: matterResult.data.seoDescription || matterResult.data.excerpt,
      isPublished: matterResult.data.isPublished !== false,
      content: contentHtml
    } as BlogPost
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

// Keep your existing utility functions
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post =>
    post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  )
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function searchPosts(query: string): BlogPostMeta[] {
  const lowercaseQuery = query.toLowerCase()
  return getAllPosts().filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery)) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function getAllCategories(): string[] {
  const categories = new Set<string>()
  getAllPosts().forEach(post => {
    post.categories.forEach(category => categories.add(category))
  })
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  getAllPosts().forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}