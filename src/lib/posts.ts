import { BlogPost, BlogPostMeta } from '@/types/blog'

// Exported mock data for the blog posts
export const mockPosts: BlogPostMeta[] = [
  {
    slug: 'how-to-leverage-ai-in-content-creation',
    title: 'How to Leverage AI in Content Creation: A Complete Guide for 2025',
    excerpt: 'Discover the revolutionary ways AI is transforming content creation, from ideation to execution. Learn practical strategies to enhance your creative workflow while maintaining authenticity and human connection.',
    publishDate: '2025-01-15',
    author: 'LTP Media Agency',
    featuredImage: '/blog/how-to-leverage-ai-for-content-creation-2025.jpg',
    categories: ['AI', 'Content Creation'],
    tags: ['artificial intelligence', 'content strategy', 'digital marketing', 'automation', 'creativity'],
    readTime: 8,
    seoTitle: 'How to Leverage AI in Content Creation: Complete 2025 Guide',
    seoDescription: 'Master AI-powered content creation with our comprehensive guide. Learn tools, strategies, and best practices for creating engaging content at scale while maintaining quality.',
    isPublished: true
  },
  {
    slug: 'top-trends-ai-generated-ugc-2025',
    title: 'Top Trends in AI-Generated UGC for 2025: The Future of User Content',
    excerpt: 'Explore the cutting-edge trends shaping AI-generated user-generated content in 2025. From hyper-personalized experiences to ethical AI practices, discover what\'s driving the next wave of digital engagement.',
    publishDate: '2025-01-10',
    author: 'LTP Media Agency',
    featuredImage: '/blog/ai-generated-user-content-trends-2025.jpg',
    categories: ['AI', 'UGC', 'Digital Marketing'],
    tags: ['user generated content', 'artificial intelligence', 'social media', 'content trends', 'digital strategy'],
    readTime: 10,
    seoTitle: 'AI-Generated UGC Trends 2025: What Marketers Need to Know',
    seoDescription: 'Stay ahead of the curve with the latest AI-generated UGC trends for 2025. Learn how brands are leveraging AI to create authentic, engaging user content at scale.',
    isPublished: true
  },
  {
    slug: 'boosting-social-media-engagement-ai-audio',
    title: 'Boosting Social Media Engagement with AI-Powered Audio Production',
    excerpt: 'Discover how AI-powered audio production is revolutionizing social media content. Learn practical strategies to create compelling audio experiences that drive engagement and build stronger connections with your audience.',
    publishDate: '2025-01-05',
    author: 'LTP Media Agency',
    featuredImage: '/blog/ai-powered-audio-social-media-engagement.jpg',
    categories: ['Audio Production', 'Social Media', 'AI'],
    tags: ['audio content', 'social media marketing', 'artificial intelligence', 'engagement', 'content creation'],
    readTime: 9,
    seoTitle: 'AI-Powered Audio Production for Social Media: Boost Engagement',
    seoDescription: 'Learn how AI-powered audio production can transform your social media strategy. Discover tools, techniques, and best practices for creating engaging audio content.',
    isPublished: true
  },
  {
    slug: 'maximizing-roi-human-creativity-ai',
    title: 'Maximizing ROI by Combining Human Creativity with AI',
    excerpt: 'Learn how to achieve exceptional returns on investment by strategically combining human creativity with artificial intelligence. Discover frameworks, case studies, and practical strategies for optimizing this powerful partnership.',
    publishDate: '2024-12-28',
    author: 'LTP Media Agency',
    featuredImage: '/blog/maximize-roi-human-ai-collaboration.jpg',
    categories: ['Business Strategy', 'AI', 'ROI'],
    tags: ['return on investment', 'human creativity', 'artificial intelligence', 'business optimization', 'strategic planning'],
    readTime: 11,
    seoTitle: 'Maximize ROI: Human Creativity + AI Collaboration Strategies',
    seoDescription: 'Discover proven strategies for maximizing ROI through human-AI collaboration. Learn frameworks, metrics, and best practices for optimizing creative and business outcomes.',
    isPublished: true
  },
  {
    slug: 'step-by-step-guide-viral-short-form-videos-ai',
    title: 'Step-by-Step Guide to Creating Viral Short-Form Videos Using AI',
    excerpt: 'Master the art of viral short-form video creation with AI tools. This comprehensive guide covers everything from concept development to optimization, helping you create content that captures attention and drives engagement.',
    publishDate: '2024-12-20',
    author: 'LTP Media Agency',
    featuredImage: '/blog/viral-short-form-videos-ai.jpg',
    categories: ['Video Content', 'AI', 'Social Media'],
    tags: ['short-form video', 'viral content', 'artificial intelligence', 'video production', 'social media strategy'],
    readTime: 12,
    seoTitle: 'Create Viral Short-Form Videos with AI: Complete Step-by-Step Guide',
    seoDescription: 'Learn how to create viral short-form videos using AI tools. Complete guide with strategies, tools, and optimization techniques for maximum engagement.',
    isPublished: true
  },
  {
    slug: 'future-influencer-marketing-ai',
    title: 'The Future of Influencer Marketing and AI: What\'s Coming Next',
    excerpt: 'Explore how artificial intelligence is reshaping influencer marketing, from AI-powered creator discovery to virtual influencers and predictive campaign optimization. Discover what the future holds for brands and creators.',
    publishDate: '2024-12-15',
    author: 'LTP Media Agency',
    featuredImage: '/blog/future-influencer-marketing-ai-trends-2025.jpg',
    categories: ['Influencer Marketing', 'AI', 'Digital Marketing'],
    tags: ['influencer marketing', 'artificial intelligence', 'digital strategy', 'virtual influencers', 'marketing automation'],
    readTime: 13,
    seoTitle: 'Future of Influencer Marketing & AI: Trends, Tools, and Predictions',
    seoDescription: 'Discover how AI is transforming influencer marketing. Learn about virtual influencers, AI-powered campaign optimization, and future trends shaping the industry.',
    isPublished: true
  }
]

// Mock blog post content
const mockPostContent: Record<string, string> = {
  'how-to-leverage-ai-in-content-creation': `
    <h1>How to Leverage AI in Content Creation: A Complete Guide for 2025</h1>
    
    <p>Artificial intelligence is revolutionizing the way we create, distribute, and optimize content. From generating initial ideas to polishing final drafts, AI tools are becoming indispensable for content creators, marketers, and businesses looking to scale their content production while maintaining quality.</p>
    
    <h2>Understanding AI-Powered Content Creation</h2>
    
    <p>AI content creation involves using machine learning algorithms and natural language processing to assist in various stages of content development. This includes ideation, research, writing, editing, and optimization.</p>
    
    <h3>Key Benefits of AI in Content Creation</h3>
    
    <ul>
      <li><strong>Speed and Efficiency:</strong> Generate content ideas and drafts in minutes rather than hours</li>
      <li><strong>Consistency:</strong> Maintain brand voice and style across all content</li>
      <li><strong>Scalability:</strong> Produce large volumes of content without proportional increases in resources</li>
      <li><strong>Data-Driven Insights:</strong> Leverage analytics to create content that resonates with your audience</li>
    </ul>
    
    <h2>Essential AI Tools for Content Creators</h2>
    
    <p>The landscape of AI content tools is rapidly evolving. Here are the most effective categories and specific tools to consider:</p>
    
    <h3>Writing and Editing Tools</h3>
    
    <p>Modern AI writing assistants can help with everything from overcoming writer's block to polishing your final draft. Tools like GPT-4, Claude, and Jasper AI offer sophisticated language generation capabilities.</p>
    
    <h3>Research and Ideation</h3>
    
    <p>AI can analyze trending topics, competitor content, and audience preferences to suggest relevant content ideas. This data-driven approach ensures your content addresses real audience needs.</p>
    
    <h2>Best Practices for AI-Human Collaboration</h2>
    
    <p>The most successful content strategies combine AI efficiency with human creativity and judgment. Here's how to achieve this balance:</p>
    
    <blockquote>
      <p>"The future of content creation isn't about replacing human creativity—it's about amplifying it through intelligent automation."</p>
    </blockquote>
    
    <h3>Maintaining Authenticity</h3>
    
    <p>While AI can generate content quickly, human oversight ensures authenticity, brand alignment, and emotional resonance. Always review and refine AI-generated content to match your unique voice and perspective.</p>
    
    <h2>Measuring Success and ROI</h2>
    
    <p>Track key metrics to evaluate the effectiveness of your AI-enhanced content strategy:</p>
    
    <ul>
      <li>Content production speed and volume</li>
      <li>Engagement rates and audience response</li>
      <li>SEO performance and organic traffic growth</li>
      <li>Conversion rates and business impact</li>
    </ul>
    
    <h2>Looking Ahead: The Future of AI Content Creation</h2>
    
    <p>As AI technology continues to advance, we can expect even more sophisticated tools that understand context, emotion, and nuance. The key to success will be staying informed about new developments while maintaining focus on creating genuine value for your audience.</p>
    
    <p>By embracing AI as a powerful ally in your content creation process, you can achieve unprecedented levels of productivity while maintaining the human touch that makes content truly compelling.</p>
  `
}

export function getAllPosts(): BlogPostMeta[] {
  return mockPosts.filter(post => post.isPublished)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = mockPosts.find(p => p.slug === slug && p.isPublished)
  if (!post) return null
  
  return {
    ...post,
    content: mockPostContent[slug] || '<p>Content coming soon...</p>'
  }
}

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
