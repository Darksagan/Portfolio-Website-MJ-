'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section
  id="about"
  className="relative py-20 px-6 md:px-12 overflow-hidden text-white"
>
  {/* ✅ Background Image */}
  <div className="absolute inset-0 -z-20">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/About_me.jpg')" }}
    />
    {/* ✅ Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-60" />
  </div>


      {/* Background glowing orbs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-60 animate-pulse delay-2000" />
      </div>

      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            ABOUT MARCUS 
            <motion.span
              className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
            />
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm a creative developer who transforms ideas into digital experiences that matter.
          </motion.p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* (Removed Image Block) */}

          {/* Text Content */}
          <motion.div
            className="md:w-3/4 space-y-6 text-lg text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              With over a decade in the digital space, I've learned that great design isn't just about aesthetics—it's about solving real problems for real people.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              My approach combines strategic thinking with creative execution. I don't just build websites; I craft digital ecosystems that grow with your business.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              When I'm not coding or designing, you'll find me exploring the intersection of technology and creativity, always seeking new ways to push the boundaries.
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              className="border-t border-gray-700 pt-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Let's create something extraordinary together.
              </motion.h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                {[
                  'Web Development',
                  'Brand Strategy',
                  'UI/UX Design',
                  'Digital Marketing',
                  'Creative Direction',
                  'Technical Consulting'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
