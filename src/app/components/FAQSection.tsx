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

  const initialFaqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks from briefing to launch.",
      secret: false
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide. Distance is never a barrier to great collaboration.",
      secret: false
    },
    {
      question: "What's included in your web development service?",
      answer: "Full-stack development, responsive design, SEO optimization, CMS setup, and post-launch support.",
      secret: false
    },
    {
      question: "Can you help with existing website improvements?",
      answer: "Yes, I offer audits, redesigns, and feature additions to existing sites.",
      secret: false
    },
    {
      question: "What platforms and technologies do you use?",
      answer: "React, Next.js, TypeScript, Node.js, and various CMS platforms.",
      secret: false
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, I offer monthly packages including updates, monitoring, and tech support.",
      secret: false
    },
    {
      question: "How do you handle project communication?",
      answer: "Regular check-ins, shared boards, and progress reports.",
      secret: false
    },
    {
      question: "What makes your approach different?",
      answer: "I combine strategy and creativity, balancing design with results.",
      secret: false
    },
    {
      question: "Do you follow conventional design rules?",
      answer: "Sometimes I break them intentionally. It’s about knowing when.",
      secret: true,
      unlocked: false
    }
  ]

  const [faqList, setFaqList] = useState(initialFaqs)

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        // Ignore keypresses inside form fields and contenteditable elements
        return
      }
  
      if (e.key === 'Enter') {
        if (consoleSequence === 'reveal') {
          setEasterEggRevealed(true)
          setSecretLevel(1)
        } else if (consoleSequence === 'unlock') {
          unlockSecretFAQ()
          setSecretLevel(2)
        } else if (consoleSequence === 'matrix') {
          activateMatrix()
          setSecretLevel(3)
        }
        setConsoleSequence('')
      } else if (e.key === 'Backspace') {
        setConsoleSequence(prev => prev.slice(0, -1))
      } else if (typeof e.key === 'string' && e.key.length === 1) {
        setConsoleSequence(prev => prev + e.key)
        setConsoleActive(true)
        setTimeout(() => setConsoleActive(false), 3000)
      }
    }
  
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [consoleSequence])  
  

  const unlockSecretFAQ = () => {
    setFaqList(prev =>
      prev.map((faq, idx) =>
        idx === 8 ? { ...faq, unlocked: true } : faq
      )
    )
  }

  const activateMatrix = () => {
    document.body.classList.add('matrix-mode')
    setTimeout(() => {
      document.body.classList.remove('matrix-mode')
    }, 5000)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative">
        <h2 className="text-7xl md:text-9xl font-black text-center mb-20">
          <span className="text-white">F</span>
          <span className="text-red-500">A</span>
          <span className="text-cyan-400">Q</span>
          {secretLevel >= 1 && <span className="text-yellow-400 ml-2">?</span>}
        </h2>

        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`border border-gray-800 bg-gray-900/50 p-4 ${faq.secret && !faq.unlocked ? 'opacity-30 pointer-events-none' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full flex justify-between items-center"
                disabled={faq.secret && !faq.unlocked}
              >
                <span className="text-lg font-medium">
                  {faq.secret && !faq.unlocked ? '[LOCKED]' : faq.question}
                </span>
                <ChevronDown size={24} />
              </button>
              <AnimatePresence>
                {openItems.includes(idx) && (
                  <motion.div
                    className="pt-2 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                    {faq.secret && (
                      <div className="mt-4 p-3 bg-gray-800 text-yellow-400">
                        SECRET UNLOCKED – Type "matrix" for more
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {consoleActive && (
            <motion.div
              className="fixed bottom-4 left-4 right-4 bg-black border border-green-500 p-4 font-mono text-green-400"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={16} />
                <span>TERMINAL</span>
              </div>
              <div>
                <span className="text-green-500">visitor@site:~$</span> {consoleSequence}
                <motion.span
                  className="bg-green-400 w-1 h-4 inline-block ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FAQSection
