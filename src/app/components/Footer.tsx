'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Dribbble } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/marcus-johnson79/',
      label: 'Connect on LinkedIn'
    },
    {
      name: 'Behance',
      icon: Dribbble,
      url: 'https://behance.net/marcusj',
      label: 'View work on Behance'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/Darksagan1',
      label: 'Follow on Twitter'
    }
  ]

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              MARCUS J
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Creating digital experiences that inspire, engage, and convert.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <Icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-px bg-gray-800 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Copyright and Legal */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © 2025 Marcus J / LTP Media Agency. All rights reserved.
            </p>

            <div className="flex justify-center space-x-6 text-sm">
              <button className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Privacy Policy
              </button>
              <span className="text-gray-700">|</span>
              <button className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Imprint
              </button>
              <span className="text-gray-700">|</span>
              <button className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm tracking-wide">BACK TO TOP</span>
            <motion.div
              className="group-hover:-translate-y-1 transition-transform duration-300"
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
