'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const updateActiveSection = () => {
      const sections = ['home', 'work', 'about', 'process', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', updateScrolled)
    window.addEventListener('scroll', updateActiveSection)
    
    return () => {
      window.removeEventListener('scroll', updateScrolled)
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [])

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Music', href: '/music', id: 'music' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ]

  const handleNavClick = (href: string, id: string) => {
    if (href.startsWith('/')) {
      // Handle page navigation with transition
      document.body.classList.add('fade-out')
      setTimeout(() => {
        window.location.href = href
      }, 400)
    } else {
      // Handle section scrolling
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(id)
      }
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 right-0 z-50 p-6 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-l border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-l from-purple-500/10 to-transparent"
        animate={{
          opacity: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      />

      <div className="flex space-x-8 relative">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
          >
            <motion.button
              onClick={() => handleNavClick(item.href, item.id)}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover-lift ${
                activeSection === item.id
                  ? 'text-white text-shadow-glow'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 8px rgba(255, 255, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover effect background */}
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-md -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Glitch effect on hover */}
              <motion.span
                className="relative inline-block"
                whileHover={{
                  textShadow: [
                    "0 0 0 transparent",
                    "1px 0 0 #ff0000, -1px 0 0 #00ffff",
                    "0 0 0 transparent",
                  ]
                }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </motion.span>

              {/* Particle effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                whileHover={{
                  background: [
                    "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)",
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)",
                  ]
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -left-4 top-1/2 w-px h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
        animate={{
          scaleY: [1, 0.5, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Corner accent */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-white/20"
        animate={{
          borderColor: ["rgba(255,255,255,0.2)", "rgba(147,51,234,0.5)", "rgba(255,255,255,0.2)"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.nav>
  )
}

export default Navigation

