'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { easeOut } from 'framer-motion'

type AnimatedTextProps = {
  text: string
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const characters = text.split('').map((char, index) => ({
    id: index,
    char,
  }))

  const characterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      x: '-100%',
      rotateY: -90,
      transformPerspective: 500,
      transition: { duration: 0.5, ease: easeOut },
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      rotateY: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: easeOut },
    }),
  }

  return (
    <div ref={ref} className="text-black" style={{ perspective: '1000px' }}>
      {characters.map((item, index) => (
        <motion.span
          key={item.id}
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={characterVariants}
          className="inline-block"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  )
}

export default AnimatedText

