'use client'

import { motion } from 'framer-motion'
import {
  MessageSquare,
  Search,
  Rocket,
  Palette,
  Code,
  CheckCircle
} from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Briefing',
      description: 'We start with deep conversations to understand your vision, goals, and challenges.',
      icon: MessageSquare
    },
    {
      number: '02',
      title: 'Evaluation',
      description: 'Thorough analysis of your market, competition, and opportunities for differentiation.',
      icon: Search
    },
    {
      number: '03',
      title: 'Kickoff',
      description: 'Project roadmap creation with clear milestones, timelines, and deliverables.',
      icon: Rocket
    },
    {
      number: '04',
      title: 'Design',
      description: 'Crafting visual concepts that align with your brand and resonate with your audience.',
      icon: Palette
    },
    {
      number: '05',
      title: 'Development',
      description: 'Building robust, scalable solutions with clean code and optimal performance.',
      icon: Code
    },
    {
      number: '06',
      title: 'Quality Assurance',
      description: 'Rigorous testing across devices and browsers to ensure flawless user experience.',
      icon: CheckCircle
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mb-20 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          MY PROCESS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                className="group relative bg-white p-8 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-900 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-black to-gray-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Connection */}
        <motion.div
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-px h-16 bg-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm tracking-wide">
              COLLABORATIVE APPROACH THROUGHOUT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
