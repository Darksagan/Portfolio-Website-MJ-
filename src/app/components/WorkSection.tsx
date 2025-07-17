'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ExternalLink, Play, Pause } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  subtitle: string
  year: string
  image: string
  url: string
  tags: string[]
}

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const projects: Project[] = [
    {
      id: 1,
      title: "VIITA WATCHES",
      subtitle: "WEB, BRANDING, DEV",
      year: "2024",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      url: "#",
      tags: ["E-COMMERCE", "LUXURY", "MINIMALISM"]
    },
    {
      id: 2,
      title: "TECHFLOW SOLUTIONS",
      subtitle: "FULL STACK DEVELOPMENT",
      year: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      url: "#",
      tags: ["B2B", "SAAS", "INNOVATION"]
    },
    {
      id: 3,
      title: "BRAND IDENTITY STUDIO",
      subtitle: "DESIGN, STRATEGY",
      year: "2023",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      url: "#",
      tags: ["BRANDING", "CREATIVE", "STUDIO"]
    },
    {
      id: 4,
      title: "DIGITAL MARKETING HUB",
      subtitle: "WEB, ANALYTICS, SEO",
      year: "2023",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop",
      url: "#",
      tags: ["MARKETING", "DATA", "GROWTH"]
    },
    {
      id: 5,
      title: "CREATIVE AGENCY PORTFOLIO",
      subtitle: "UI/UX, DEVELOPMENT",
      year: "2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      url: "#",
      tags: ["PORTFOLIO", "CREATIVE", "AGENCY"]
    }
  ]

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects]

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section ref={sectionRef} id="work" className="py-20 bg-black text-white overflow-hidden relative">
      {/* Glitch effect background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'linear-gradient(45deg, #ff0000 0%, transparent 50%)',
            'linear-gradient(90deg, #00ff00 0%, transparent 50%)',
            'linear-gradient(135deg, #0000ff 0%, transparent 50%)',
            'linear-gradient(45deg, #ff0000 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />

      {/* Typography overlay */}
      <motion.div
        className="absolute top-10 left-10 text-gray-600 text-xs font-mono leading-relaxed opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.3 : 0 }}
        transition={{ delay: 1, duration: 2 }}
      >
        PORTFOLIO.SECTION = &#123;<br/>
        &nbsp;&nbsp;RULE: "CLEAN_GRID_LAYOUT",<br/>
        &nbsp;&nbsp;STATUS: "BROKEN",<br/>
        &nbsp;&nbsp;APPROACH: "CHAOTIC_BEAUTY",<br/>
        &nbsp;&nbsp;INSPIRATION: "STREET_ART"<br/>
        &#125;;
      </motion.div>

      <div className="container mx-auto px-6 relative">
        {/* Main Title with Glitch Effect */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-8 relative"
            animate={{
              textShadow: [
                '0 0 0 transparent',
                '2px 0 0 #ff0000, -2px 0 0 #00ffff',
                '0 0 0 transparent',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            SELECTED
            <motion.span
              className="block text-6xl md:text-8xl text-red-500 transform -skew-x-12"
              animate={{ skewX: [-12, 12, -12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              WORK
            </motion.span>
          </motion.h2>

          {/* Control interface */}
          <motion.div
            className="flex items-center justify-center space-x-4 text-green-400 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 border border-green-400 px-3 py-1 hover:bg-green-400 hover:text-black transition-colors duration-300"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
            <span className="opacity-60">/ AUTO-SCROLL</span>
          </motion.div>
        </motion.div>

        {/* Artistic Portfolio Display */}
        <div className="relative">
          {/* Background monitor/TV frame */}
          <motion.div
            className="absolute inset-0 bg-gray-900 transform rotate-1 scale-105 rounded-lg"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: isInView ? 1 : 0, scale: isInView ? 1.05 : 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Static noise overlay */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />

          {/* Horizontal Scrolling Portfolio */}
          <div className="relative bg-black p-6 rounded-lg border-4 border-gray-800">
            <motion.div
              ref={scrollRef}
              className="flex space-x-8 pb-8"
              animate={isPlaying ? { x: [0, -2400] } : {}}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  className="group relative flex-shrink-0 w-96 h-72 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -15, rotateY: 5 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  onClick={() => openProject(project)}
                  style={{ perspective: 1000 }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Glitch border effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500"
                      animate={{
                        borderColor: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
                        borderWidth: [2, 4, 2]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Glitch overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="text-xs bg-white/20 text-green-400 px-2 py-1 font-mono"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ delay: tagIndex * 0.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <h3 className="text-xl font-black mb-2 font-mono tracking-wider">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 font-mono">
                        {project.subtitle} — {project.year}
                      </p>

                      <motion.button
                        className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 border border-white/30 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform skew-x-12 hover:skew-x-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="transform -skew-x-12">LAUNCH</span>
                        <ExternalLink size={16} className="transform -skew-x-12" />
                      </motion.button>
                    </div>
                  </div>

                  {/* 3D shadow effect */}
                  <div className="absolute inset-0 bg-cyan-500/20 transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Console-style info */}
          <motion.div
            className="mt-6 text-green-400 font-mono text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            [SYSTEM] AUTO-SCROLL: {isPlaying ? 'ACTIVE' : 'PAUSED'} | PROJECTS: {projects.length} | STATUS: BREAKING_RULES
          </motion.div>
        </div>
      </div>

      {/* Project Detail Overlay - Enhanced */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={closeProject}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, rotateX: -15 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.8, y: 50, rotateX: -15 }}
            className="bg-gray-900 p-8 max-w-4xl w-full relative border-4 border-cyan-400"
            onClick={(e) => e.stopPropagation()}
            style={{ perspective: 1000 }}
          >
            {/* Glitch effect for modal */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div>
                <h3 className="text-4xl font-black mb-2 font-mono">{selectedProject.title}</h3>
                <p className="text-gray-300 font-mono">{selectedProject.subtitle} — {selectedProject.year}</p>
              </div>
              <button
                onClick={closeProject}
                className="text-gray-400 hover:text-white text-3xl font-bold border border-gray-600 w-12 h-12 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors duration-300"
              >
                ×
              </button>
            </div>

            <motion.img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover mb-6 border-2 border-gray-600"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <p className="text-gray-300 mb-6 font-mono leading-relaxed">
                  Advanced project showcasing {selectedProject.title}. Breaking conventional design patterns
                  while maintaining usability. This project demonstrates innovative approaches to digital experiences.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="bg-purple-600 text-white px-3 py-1 text-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-green-400 font-mono text-sm">
                  <div>CLIENT: CONFIDENTIAL</div>
                  <div>TIMELINE: 8 WEEKS</div>
                  <div>TEAM: 3 DEVELOPERS</div>
                  <div>STATUS: LAUNCHED</div>
                </div>
              </div>
            </div>

            <motion.button
              className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 font-bold font-mono hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform skew-x-12 hover:skew-x-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="transform -skew-x-12">VISIT PROJECT</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Floating artistic elements */}
      <motion.div
        className="absolute top-32 right-20 text-red-500 text-6xl font-black opacity-20 transform rotate-12"
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ©
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-px h-32 bg-gradient-to-b from-cyan-400 to-transparent"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  )
}

export default WorkSection
