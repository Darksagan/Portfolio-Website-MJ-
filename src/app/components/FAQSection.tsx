'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown, Eye, Terminal, Skull } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [easterEggRevealed, setEasterEggRevealed] = useState(false)
  const [consoleSequence, setConsoleSequence] = useState('')
  const [consoleActive, setConsoleActive] = useState(false)
  const [secretLevel, setSecretLevel] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks from briefing to launch. I always provide detailed timelines during the kickoff phase.",
      secret: false
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide. Thanks to modern communication tools, distance is never a barrier to great collaboration.",
      secret: false
    },
    {
      question: "What's included in your web development service?",
      answer: "Full-stack development, responsive design, SEO optimization, performance optimization, content management system setup, and post-launch support.",
      secret: false
    },
    {
      question: "Can you help with existing website improvements?",
      answer: "Yes, I offer website audits, performance optimization, redesigns, and feature additions to existing sites.",
      secret: false
    },
    {
      question: "What platforms and technologies do you use?",
      answer: "I specialize in modern web technologies: React, Next.js, TypeScript, Node.js, and various CMS platforms depending on project needs.",
      secret: false
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, I offer monthly maintenance packages including security updates, performance monitoring, content updates, and technical support.",
      secret: false
    },
    {
      question: "How do you handle project communication?",
      answer: "Regular check-ins via video calls, shared project boards, and detailed progress reports. You'll always know where your project stands.",
      secret: false
    },
    {
      question: "What makes your approach different?",
      answer: "I combine strategic thinking with creative execution, focusing on both beautiful design and measurable business results. Every project is treated as a unique challenge.",
      secret: false
    },
    {
      question: "Do you follow conventional design rules?",
      answer: "Sometimes I break them intentionally. Great design isn't always about following every rule - it's about knowing when to break them effectively.",
      secret: true,
      unlocked: false
    }
  ]

  const [faqList, setFaqList] = useState(faqs)

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Enhanced Console Easter Egg
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (consoleSequence === 'reveal') {
          setEasterEggRevealed(true)
          setConsoleSequence('')
          setSecretLevel(1)
        } else if (consoleSequence === 'unlock') {
          unlockSecretFAQ()
          setConsoleSequence('')
          setSecretLevel(2)
        } else if (consoleSequence === 'matrix') {
          activateMatrix()
          setConsoleSequence('')
          setSecretLevel(3)
        } else {
          setConsoleSequence('')
        }
      } else if (e.key === 'Backspace') {
        setConsoleSequence(prev => prev.slice(0, -1))
      } else if (e.key.length === 1) {
        setConsoleSequence(prev => prev + e.key)
      }

      // Activate console on any typing
      if (e.key.length === 1) {
        setConsoleActive(true)
        setTimeout(() => setConsoleActive(false), 3000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [consoleSequence])

  const unlockSecretFAQ = () => {
    setFaqList(prev => prev.map((faq, index) =>
      index === 8 ? { ...faq, unlocked: true } : faq
    ))
  }

  const activateMatrix = () => {
    // Matrix effect will be handled by CSS animation
    document.body.classList.add('matrix-mode')
    setTimeout(() => {
      document.body.classList.remove('matrix-mode')
    }, 5000)
  }

  const handleEasterEggClick = () => {
    setEasterEggRevealed(true)
    setSecretLevel(1)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Artistic background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255, 0, 100, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(0, 255, 150, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(100, 0, 255, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating design rule violations */}
      <motion.div
        className="absolute top-20 right-20 text-red-500 text-xs font-mono opacity-30 transform rotate-12"
        animate={{
          rotate: [12, -12, 12],
          y: [-10, 10, -10]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        RULE: "USE_ACCORDION_PROPERLY"<br/>
        STATUS: VIOLATED
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-cyan-400 text-xs font-mono opacity-40 transform -rotate-6"
        animate={{
          x: [-5, 5, -5],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {`// TODO: Make_this_boring`}<br/>
        {`// SOLUTION: Add_easter_eggs`}
      </motion.div>

      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.h2
          className="text-7xl md:text-9xl font-black text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-white"
            animate={{
              textShadow: secretLevel >= 2 ? [
                '0 0 0 transparent',
                '3px 0 0 #ff0000, -3px 0 0 #00ffff',
                '0 0 0 transparent'
              ] : ['0 0 0 transparent']
            }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          >
            F
          </motion.span>
          <motion.span
            className="text-red-500 transform skew-y-6 inline-block"
            animate={{ skewY: [6, -6, 6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            A
          </motion.span>
          <motion.span
            className="text-cyan-400 transform scale-110 inline-block"
            animate={{ scale: [1.1, 1.3, 1.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Q
          </motion.span>

          {/* Hidden question mark that appears on secret level */}
          <AnimatePresence>
            {secretLevel >= 1 && (
              <motion.span
                className="text-yellow-400 transform rotate-12 inline-block ml-4"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                ?
              </motion.span>
            )}
          </AnimatePresence>
        </motion.h2>

        <div className="space-y-4 relative">
          {faqList.map((faq, index) => (
            <motion.div
              key={index}
              className={`border border-gray-800 bg-gray-900/50 relative overflow-hidden ${
                faq.secret && !faq.unlocked ? 'opacity-30 pointer-events-none' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: isInView ? (faq.secret && !faq.unlocked ? 0.3 : 1) : 0,
                x: isInView ? 0 : (index % 2 === 0 ? -50 : 50)
              }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Glitch effect for secret questions */}
              {faq.secret && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20"
                  animate={{ opacity: faq.unlocked ? [0, 0.5, 0] : 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors duration-300 group"
                onClick={() => toggleItem(index)}
                disabled={faq.secret && !faq.unlocked}
              >
                <h3 className="text-lg md:text-xl font-medium pr-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {faq.secret && !faq.unlocked ? (
                    <span className="font-mono text-gray-600">
                      [LOCKED] {faq.question.replace(/./g, '█')}
                    </span>
                  ) : (
                    faq.question
                  )}
                  {faq.secret && faq.unlocked && (
                    <span className="ml-2 text-yellow-400 text-sm">🔓</span>
                  )}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="group-hover:text-cyan-400 transition-colors duration-300"
                >
                  <ChevronDown size={24} className="text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                      {faq.secret && (
                        <div className="mt-4 p-4 bg-gray-800 border-l-4 border-yellow-400 font-mono text-sm">
                          <strong className="text-yellow-400">SECRET UNLOCKED:</strong> You've discovered one of the hidden questions.
                          Type "matrix" and press Enter for the ultimate experience.
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Console Interface */}
        <AnimatePresence>
          {consoleActive && (
            <motion.div
              className="fixed bottom-4 left-4 right-4 bg-black/90 border border-green-400 p-4 font-mono text-green-400 text-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Terminal size={16} />
                <span>TERMINAL_ACTIVE</span>
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">marcus@portfolio:~$</span> {consoleSequence}
                <motion.span
                  className="bg-green-400 w-2 h-4 inline-block ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Available commands: reveal, unlock, matrix
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint Section */}
        <motion.div
          className="mt-16 text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-500 text-sm mb-6">
            Hint: Type "reveal" and press Enter, or click the hidden icon below
          </p>

          {/* Multiple hidden buttons with different secret levels */}
          <div className="flex justify-center space-x-8">
            <motion.button
              onClick={handleEasterEggClick}
              className="opacity-20 hover:opacity-100 transition-opacity duration-500 group"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={24} className="text-gray-600 group-hover:text-cyan-400 transition-colors duration-300" />
            </motion.button>

            {secretLevel >= 1 && (
              <motion.button
                onClick={() => {
                  setConsoleSequence('unlock')
                  unlockSecretFAQ()
                }}
                className="opacity-30 hover:opacity-100 transition-opacity duration-500 group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.3, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Skull size={24} className="text-red-500 group-hover:text-yellow-400 transition-colors duration-300" />
              </motion.button>
            )}
          </div>

          {consoleSequence && (
            <motion.div
              className="mt-4 font-mono text-green-400 bg-black/50 p-2 rounded inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {'>'} {consoleSequence}
              <motion.span
                className="bg-green-400 w-1 h-4 inline-block ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.div>
          )}
        </motion.div>

        {/* Enhanced Easter Egg Revealed */}
        <AnimatePresence>
          {easterEggRevealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
              onClick={() => setEasterEggRevealed(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-purple-900 via-black to-blue-900 p-8 max-w-md text-center border-4 border-cyan-400 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                initial={{ rotate: -5, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {/* Matrix-style background */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    background: [
                      'linear-gradient(0deg, #00ff00 0%, transparent 100%)',
                      'linear-gradient(90deg, #00ff00 0%, transparent 100%)',
                      'linear-gradient(180deg, #00ff00 0%, transparent 100%)',
                      'linear-gradient(270deg, #00ff00 0%, transparent 100%)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.h3
                  className="text-3xl font-black mb-4 text-white relative z-10"
                  animate={{
                    textShadow: [
                      '0 0 5px #00ff00',
                      '0 0 20px #00ff00, 0 0 30px #00ff00',
                      '0 0 5px #00ff00'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉 LEVEL {secretLevel} UNLOCKED
                </motion.h3>

                <div className="text-gray-300 mb-6 font-mono text-sm leading-relaxed relative z-10">
                  <p className="mb-4">
                    <strong className="text-cyan-400">SYSTEM_MESSAGE:</strong> You've discovered the first hidden layer.
                    I love working with detail-oriented clients who explore beyond the surface.
                  </p>

                  <div className="bg-black/50 p-4 border border-gray-600 mb-4">
                    <strong className="text-green-400">SECRET_OFFER:</strong> Mention this Easter egg when you contact me
                    and get a 15% discount on your first project!
                  </div>

                  <p className="text-xs text-gray-500">
                    More secrets await... Try typing "unlock" to continue your journey.
                  </p>
                </div>

                <motion.button
                  onClick={() => setEasterEggRevealed(false)}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-6 py-3 font-bold hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 transform skew-x-12 hover:skew-x-0 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="transform -skew-x-12">CONTINUE_EXPLORATION</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating artistic elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-px h-20 bg-gradient-to-b from-red-500 to-transparent"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-4 h-4 border-2 border-yellow-400 transform rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  )
}

export default FAQSection
