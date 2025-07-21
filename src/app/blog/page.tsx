'use client'

import { motion, useInView, Variants, Easing } from 'framer-motion'
import { useRef } from 'react'

// Import ease function from framer-motion
import { easeOut } from 'framer-motion'

type AnimatedTextProps = {
  text: string
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const characters = text.split('').map((char, index) => ({
    id: index,
    char,
  }))

  // Define variants with proper types
  const characterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      x: '-100%',
      rotateY: -90,
      transformPerspective: 500,
      transition: { duration: 0.5, ease: easeOut }, // use easing helper
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      rotateY: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: easeOut }, // use easing helper
    }),
  }

  return (
    <div ref={ref} className="text-black" style={{ perspective: '1000px' }}>
      {characters.map((item, index) => (
        <motion.span
          key={item.id}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={characterVariants}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  )
}

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-inter">
          <AnimatedText text="BLOGS" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <img
              src="/placeholder-image.jpg"
              alt="Post 1"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">Post Title 1</h2>
            <p className="text-gray-600 mt-2">A short summary of the first blog post goes here.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <img
              src="/placeholder-image.jpg"
              alt="Post 2"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">Post Title 2</h2>
            <p className="text-gray-600 mt-2">A short summary of the second blog post goes here.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <img
              src="/placeholder-image.jpg"
              alt="Post 3"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">Post Title 3</h2>
            <p className="text-gray-600 mt-2">A short summary of the third blog post goes here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
