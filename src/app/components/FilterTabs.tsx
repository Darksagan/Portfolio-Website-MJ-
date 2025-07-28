'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FilterTabsProps {
  categories: string[]
  tags: string[]
  onFilterChange: (type: 'all' | 'category' | 'tag', value?: string) => void
}

export default function FilterTabs({ categories, tags, onFilterChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'categories' | 'tags'>('all')
  const [activeFilter, setActiveFilter] = useState<string>('')

  const handleTabChange = (tab: 'all' | 'categories' | 'tags') => {
    setActiveTab(tab)
    setActiveFilter('')
    if (tab === 'all') {
      onFilterChange('all')
    }
  }

  const handleFilterClick = (type: 'category' | 'tag', value: string) => {
    if (activeFilter === value) {
      setActiveFilter('')
      onFilterChange('all')
    } else {
      setActiveFilter(value)
      onFilterChange(type, value)
    }
  }

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {[
            { key: 'all', label: 'All Posts' },
            { key: 'categories', label: 'Categories' },
            { key: 'tags', label: 'Tags' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key as any)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Options */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        layout
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'categories' && categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleFilterClick('category', category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === category
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {category}
          </motion.button>
        ))}

        {activeTab === 'tags' && tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleFilterClick('tag', tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === tag
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}

