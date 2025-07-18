'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const AboutSection = () => {
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Main transforms
  const headerY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [200, 0, 0, -200])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  const textY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [300, 0, 0, -300])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.9])

  const skillsY = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [400, 0, 0, -400])
  const skillsOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0])
  const skillsScale = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0.7, 1, 1, 0.7])

  const underlineScaleX = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  // Fix: Declare skill transforms individually
  const skill1Y = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [50, 0, 0, -50])
  const skill1Opacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 1, 1, 0])

  const skill2Y = useTransform(scrollYProgress, [0, 0.65, 0.8, 1], [50, 0, 0, -50])
  const skill2Opacity = useTransform(scrollYProgress, [0, 0.55, 0.8, 1], [0, 1, 1, 0])

  const skill3Y = useTransform(scrollYProgress, [0, 0.7, 0.8, 1], [50, 0, 0, -50])
  const skill3Opacity = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [0, 1, 1, 0])

  const skill4Y = useTransform(scrollYProgress, [0, 0.75, 0.9, 1], [50, 0, 0, -50])
  const skill4Opacity = useTransform(scrollYProgress, [0, 0.65, 0.9, 1], [0, 1, 1, 0])

  const skill5Y = useTransform(scrollYProgress, [0, 0.8, 0.95, 1], [50, 0, 0, -50])
  const skill5Opacity = useTransform(scrollYProgress, [0, 0.7, 0.95, 1], [0, 1, 1, 0])

  const skill6Y = useTransform(scrollYProgress, [0, 0.85, 1, 1], [50, 0, 0, -50])
  const skill6Opacity = useTransform(scrollYProgress, [0, 0.75, 1, 1], [0, 1, 1, 0])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 px-6 md:px-12 overflow-hidden text-white min-h-screen"
    >
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/About_me.png')" }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Background glowing orbs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-60 animate-pulse delay-2000" />
      </div>

      {/* Main container */}
      <div className="relative z-5 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight relative inline-block">
            ABOUT MARCUS
            <motion.span
              className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
              style={{ scaleX: underlineScaleX }}
            />
          </motion.h2>
          <motion.p className="mt-4 text-lg text-gray-300">
            I'm a creative developer who transforms ideas into digital experiences that matter.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <motion.div
            className="md:w-3/4 space-y-6 text-lg text-gray-300"
            style={{ y: textY, opacity: textOpacity, scale: textScale }}
          >
            <motion.p>
              With over a decade in the digital space, I've learned that great design isn't just about
              aesthetics—it's about solving real problems for real people.
            </motion.p>
            <motion.p>
              My approach combines strategic thinking with creative execution. I don't just build
              websites; I craft digital ecosystems that grow with your business.
            </motion.p>
            <motion.p>
              When I'm not coding or designing, you'll find me exploring the intersection of technology
              and creativity, always seeking new ways to push the boundaries.
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              className="border-t border-gray-700 pt-8 mt-8"
              style={{ y: skillsY, opacity: skillsOpacity, scale: skillsScale }}
            >
              <motion.h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Let's create something extraordinary together.
              </motion.h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <motion.span style={{ y: skill1Y, opacity: skill1Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  Web Development
                </motion.span>
                <motion.span style={{ y: skill2Y, opacity: skill2Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  Brand Strategy
                </motion.span>
                <motion.span style={{ y: skill3Y, opacity: skill3Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  UI/UX Design
                </motion.span>
                <motion.span style={{ y: skill4Y, opacity: skill4Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  Digital Marketing
                </motion.span>
                <motion.span style={{ y: skill5Y, opacity: skill5Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  Creative Direction
                </motion.span>
                <motion.span style={{ y: skill6Y, opacity: skill6Opacity }} className="px-4 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full hover:bg-purple-600 transition-all duration-300">
                  Consulting
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
