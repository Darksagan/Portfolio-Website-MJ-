'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'

const projects = [
  {
    title: 'AI COURSE',
    thumbnail: '/thumbnails/ai-course-thumbnail.jpg',
    video: '/videos/ai-course.mp4',
    description: 'Comprehensive AI learning experience with interactive modules',
  },
  {
    title: 'LUXE BAG',
    thumbnail: '/thumbnails/luxe-bag-thumbnail.jpg',
    video: '/videos/luxe-bag.mp4',
    description: 'Premium leather goods showcasing craftsmanship and elegance',
  },
  {
    title: 'LUXE SERUM',
    thumbnail: '/thumbnails/luxe-serum-thumbnail.jpg',
    video: '/videos/luxe-serum.mp4',
    description: 'Skincare innovation through advanced formulation technology',
  },
  {
    title: 'VACATION',
    thumbnail: '/thumbnails/vacation-thumbnail.jpg',
    video: '/videos/vacation.mp4',
    description: 'Travel experiences that inspire wanderlust and adventure',
  },
  {
    title: 'YUEN FINAL',
    thumbnail: '/thumbnails/yuen-final-thumbnail.jpg',
    video: '/videos/yuen-final.mp4',
    description: 'Final project showcasing creative direction and execution',
  },
]

const ProjectsSection = () => {
  const controls = useAnimation()
  const sectionRef = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Adjusted maxScroll to properly reach the fifth card
  const maxScroll = 250

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 })
        }
      },
      { threshold: 0.2 }
    )

    const sectionElement = sectionRef.current
    if (sectionElement) observer.observe(sectionElement)

    return () => {
      if (sectionElement) observer.unobserve(sectionElement)
    }
  }, [controls])

  // Wrap handleScroll with useCallback so it is stable for useEffect deps
  const handleScroll = useCallback((delta: number) => {
    if (isScrolling) return

    setIsScrolling(true)

    setScrollPosition((prev) => {
      const newPosition = prev + delta * 1.2 // Increased sensitivity
      const clampedPosition = Math.max(0, Math.min(maxScroll, newPosition))
      console.log('Scroll position:', clampedPosition) // Debug log
      return clampedPosition
    })

    setTimeout(() => {
      setIsScrolling(false)
    }, 100)
  }, [isScrolling])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isInSection = rect.top < window.innerHeight && rect.bottom > 0

      if (isInSection && !isScrolling) {
        e.preventDefault()
        handleScroll(e.deltaY)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'Escape') {
          setSelectedProject(null)
        }
        return
      }

      const rect = sectionRef.current?.getBoundingClientRect()
      const isInSection = rect && rect.top < window.innerHeight && rect.bottom > 0

      if (isInSection) {
        switch (e.key) {
          case 'ArrowLeft':
            e.preventDefault()
            handleScroll(-50)
            break
          case 'ArrowRight':
            e.preventDefault()
            handleScroll(50)
            break
        }
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('wheel', handleWheel, { passive: false })
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel)
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isScrolling, selectedProject, handleScroll])

  const handleTouchStart = useRef({ x: 0, y: 0 })
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    const touch = e.touches[0]
    const deltaX = handleTouchStart.current.x - touch.clientX
    handleScroll(deltaX * 2)
    handleTouchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchStartEvent = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleTouchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  // More dynamic card positions with better visual variety
  const cardPositions = [
    { top: '20%', left: '5vw', rotation: -5 },
    { top: '60%', left: '25vw', rotation: 3 },
    { top: '5%', left: '30vw', rotation: -2 },
    { top: '55%', left: '65vw', rotation: -6 }, // VACATION - moved lower with more rotation
    { top: '15%', left: '55vw', rotation: 8 }, // YUEN FINAL - moved higher with opposite rotation
  ]

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden bg-gray-100"
        onTouchStart={handleTouchStartEvent}
        onTouchMove={handleTouchMove}
      >
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <h2 className="text-[clamp(8rem,15vw,20rem)] font-black text-gray-900 opacity-10 tracking-tight">
            PROJECTS
          </h2>
        </div>

        {/* Projects Container */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-[350vw] h-full z-20"
          style={{
            transform: `translateX(-${scrollPosition}vw)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {projects.map((project, index) => {
            const position = cardPositions[index]
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                className="absolute w-96 h-72 bg-black rounded-xl overflow-hidden cursor-pointer shadow-2xl"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: `rotate(${position.rotation}deg)`,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  rotate: position.rotation,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
              >
                {/* Thumbnail */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = '/thumbnails/placeholder.jpg'
                  }}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Video */}
                <video
                  src={project.video}
                  muted
                  playsInline
                  loop
                  autoPlay
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Overlay Info */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white p-6 transform transition-transform duration-300 ${
                    isHovered ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                </div>

                {/* Title Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-sm font-semibold z-10">
                  {project.title}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Clean Scroll Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-gray-600 text-sm z-30">
          <span>Scroll to explore ({projects.length} projects)</span>
          <div className="w-48 h-0.5 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 transition-all duration-100 ease-out"
              style={{ width: `${(scrollPosition / maxScroll) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 -right-2 text-white text-3xl hover:opacity-70 transition-opacity w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>

            <video
              src={selectedProject.video}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg"
            />

            <div className="absolute -bottom-20 left-0 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-lg opacity-80 max-w-2xl">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectsSection
