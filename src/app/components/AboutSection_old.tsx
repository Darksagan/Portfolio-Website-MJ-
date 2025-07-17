'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-white text-black flex items-center justify-center py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            ABOUT MARCUS J
          </motion.h2>

          <motion.div
            className="space-y-8 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-light text-gray-700 mb-12">
              I'm a creative developer who transforms ideas into digital experiences that matter.
            </p>

            <p className="text-gray-600 mb-8">
              With over a decade in the digital space, I've learned that great design isn't just about
              aesthetics it's about solving real problems for real people. Every project I take on
              starts with understanding the human story behind the brand.
            </p>

            <p className="text-gray-600 mb-8">
              My approach combines strategic thinking with creative execution. I don't just build
              websites; I craft digital ecosystems that grow with your business. From initial concept
              to final deployment, I ensure every pixel serves a purpose and every interaction feels intentional.
            </p>

            <p className="text-gray-600 mb-12">
              When I'm not coding or designing, you'll find me exploring the intersection of technology
              and creativity, always seeking new ways to push the boundaries of what's possible on the web.
            </p>

            <motion.div
              className="border-t border-gray-200 pt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Let's create something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  extraordinary together.
                </span>
              </h3>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
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
                    className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
