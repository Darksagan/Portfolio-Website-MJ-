'use client'

import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight, Zap, MessageCircle, Phone } from 'lucide-react'
import { useRef, useState } from 'react'

const ContactSection = () => {
  const [isGlitching, setIsGlitching] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const marqueeText = "CONTACT ME — DON'T LEAVE — CONTACT ME — LET'S CREATE — CONTACT ME — SOMETHING BRILLIANT — "

  const handleEmailClick = () => {
    window.location.href = 'mailto:office@ltpmediagency.com'
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 1000)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white text-black overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Artistic background with mouse interaction */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(255, 0, 100, 0.5) 0%,
            rgba(0, 255, 150, 0.3) 50%,
            transparent 100%)`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating text violations */}
      <motion.div
        className="absolute top-10 left-10 text-red-500 text-xs font-mono opacity-30 transform -rotate-12"
        animate={{
          rotate: [-12, 12, -12],
          x: [-5, 5, -5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        RULE: "SUBTLE_CALL_TO_ACTION"<br/>
        STATUS: AGGRESSIVELY_BROKEN<br/>
        PHILOSOPHY: MORE_IS_MORE
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-purple-600 text-xs font-mono opacity-40 transform rotate-6"
        animate={{
          y: [-10, 10, -10],
          rotate: [6, -6, 6]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {`// Breaking_marquee_conventions`}<br/>
        {`// Since_2014`}
      </motion.div>

      <div className="container mx-auto px-6 relative">
        {/* Enhanced Scrolling Marquee */}
        <div className="relative mb-16 overflow-hidden">
          {/* Multiple layers of marquees for depth */}
          <motion.div
            className="flex whitespace-nowrap text-9xl md:text-[16rem] font-black opacity-90"
            animate={{ x: [0, -3000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="mr-12 text-black">{marqueeText}</span>
            <span className="mr-12 text-black">{marqueeText}</span>
            <span className="mr-12 text-black">{marqueeText}</span>
          </motion.div>

          {/* Second layer with different speed and color */}
          <motion.div
            className="absolute top-0 flex whitespace-nowrap text-8xl md:text-[14rem] font-black opacity-20 text-red-500"
            animate={{ x: [0, 2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="mr-12">{marqueeText}</span>
            <span className="mr-12">{marqueeText}</span>
            <span className="mr-12">{marqueeText}</span>
          </motion.div>

          {/* Glitch overlay for marquee */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 mix-blend-multiply"
            animate={{
              opacity: isGlitching ? [0, 1, 0, 1, 0] : 0,
              x: isGlitching ? [0, 10, -10, 5, 0] : 0
            }}
            transition={{ duration: 0.2, repeat: isGlitching ? 5 : 0 }}
          />
        </div>

        {/* Main Contact Content */}
        <motion.div
          className="max-w-6xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-4xl md:text-7xl font-black mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.span
              className="text-black"
              animate={{
                textShadow: isGlitching ? [
                  '0 0 0 transparent',
                  '5px 0 0 #ff0000, -5px 0 0 #00ffff',
                  '0 0 0 transparent'
                ] : ['0 0 0 transparent']
              }}
              transition={{ duration: 0.1, repeat: isGlitching ? 10 : 0 }}
            >
              DON'T LEAVE—
            </motion.span>
            <br/>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-600 to-blue-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              LET'S CREATE SOMETHING
            </motion.span>
            <br/>
            <motion.span
              className="text-black transform skew-x-12 inline-block"
              animate={{ skewX: [12, -12, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              BRILLIANT.
            </motion.span>

            {/* Artistic elements overlaying the title */}
            <motion.div
              className="absolute -top-8 -right-8 w-20 h-20 border-4 border-yellow-400 transform rotate-45"
              animate={{ rotate: [45, 405, 45] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 text-cyan-500 text-3xl font-black"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ©
            </motion.div>
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to bring your vision to life? I'm here to help transform your ideas
            into digital experiences that make an impact. Let's start a conversation
            about your next project.

            <motion.span
              className="absolute -right-20 top-0 text-red-500 text-sm transform rotate-12 font-mono"
              animate={{ rotate: [12, -12, 12] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              /URGENT
            </motion.span>
          </motion.p>

          {/* Enhanced Email CTA */}
          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={handleEmailClick}
              className="group inline-flex items-center space-x-6 bg-gradient-to-r from-black via-purple-900 to-black text-white px-12 py-6 hover:from-purple-900 hover:via-black hover:to-purple-900 transition-all duration-500 transform skew-x-12 hover:skew-x-0 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glitch effect background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-cyan-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />

              <Mail size={32} className="relative z-10 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500" />
              <span className="text-2xl font-bold relative z-10 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500">
                office@ltpmediagency.com
              </span>
              <motion.div
                className="relative z-10 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={32} />
              </motion.div>
            </motion.button>

            <p className="text-gray-500 text-sm font-mono">
              [SYSTEM] Click to launch email client || Copy address manually
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              {
                icon: MessageCircle,
                title: "Response Time",
                value: "Usually within 24 hours",
                accent: "text-green-500"
              },
              {
                icon: Zap,
                title: "Project Availability",
                value: "Taking new projects for Q2 2025",
                accent: "text-yellow-500"
              },
              {
                icon: Phone,
                title: "Consultation",
                value: "Free initial strategy call",
                accent: "text-blue-500"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="bg-gray-100 p-6 border-4 border-transparent hover:border-black transition-all duration-300 transform hover:scale-105 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                  whileHover={{ rotateY: 5 }}
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    className={`${item.accent} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <Icon size={32} />
                  </motion.div>
                  <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                  <p className="text-gray-600 font-mono text-sm">{item.value}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.h4
              className="text-3xl md:text-5xl font-black mb-4 relative"
              animate={{
                textShadow: [
                  '0 0 0 transparent',
                  '2px 2px 0 #ff0000',
                  '0 0 0 transparent'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            >
              WHAT ARE YOU WAITING FOR?

              {/* Floating question marks */}
              <motion.span
                className="absolute -top-4 -right-4 text-red-500 text-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ?
              </motion.span>
              <motion.span
                className="absolute -bottom-2 -left-2 text-yellow-500 text-xl"
                animate={{
                  rotate: [0, -360],
                  y: [-5, 5, -5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ?
              </motion.span>
            </motion.h4>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed font-mono">
              Every great project starts with a simple conversation.
              Whether you have a detailed brief or just a spark of an idea,
              I'm excited to hear about it and explore how we can bring it to life.
            </p>

            {/* Artistic border */}
            <motion.div
              className="absolute inset-0 border-4 border-dashed border-purple-500 opacity-30 transform rotate-1"
              animate={{ rotate: [1, -1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating artistic elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-3 h-3 bg-red-500 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/3 left-16 w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 text-purple-500 text-4xl font-black opacity-20 transform rotate-45"
        animate={{ rotate: [45, 405, 45] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        ©
      </motion.div>
    </section>
  )
}

export default ContactSection
