'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useScroll } from 'framer-motion'
import Image from 'next/image'

const photos = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
  { src: '/images/photo4.jpg', alt: 'Photo 4' },
  { src: '/images/photo5.jpg', alt: 'Photo 5' },
]

const PhotoRevealSection = () => {
  const galleryRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  })

  const updateGallery = useCallback(
    (progress: number) => {
      if (!galleryRef.current) return
      const items = galleryRef.current.querySelectorAll('.gallery-item')
      const totalItems = photos.length
      const centerIndex = progress * (totalItems - 1)
      const currentCenterIndex = Math.round(centerIndex)

      if (currentCenterIndex !== currentIndex) {
        setCurrentIndex(Math.max(0, Math.min(totalItems - 1, currentCenterIndex)))
      }

      items.forEach((item, index) => {
        const el = item as HTMLElement // ✅ Fix: cast to HTMLElement

        const relativePosition = index - centerIndex
        const xOffset = relativePosition * 200
        const yOffset = Math.sin(relativePosition * 0.5) * 20
        const zPos = -Math.abs(relativePosition) * 50

        let opacity = 0
        const distance = Math.abs(relativePosition)
        if (distance < 3) {
          if (distance < 0.5) {
            opacity = 1
          } else if (distance < 1.5) {
            opacity = 0.8
          } else if (distance < 2.5) {
            opacity = 0.4
          } else {
            opacity = 0.1
          }
        }

        const scale = distance < 0.5 ? 1 : Math.max(0.6, 1 - distance * 0.2)
        const rotation = relativePosition * 5

        el.style.transform = `translate(-50%, -50%) translate3d(${xOffset}px, ${yOffset}px, ${zPos}px) scale(${scale}) rotateY(${rotation}deg)`
        el.style.opacity = opacity.toString()

        if (Math.abs(relativePosition) < 0.5) {
          el.classList.add('active')
        } else {
          el.classList.remove('active')
        }
      })
    },
    [currentIndex]
  )

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      updateGallery(latest)
    })

    return () => {
      unsubscribe()
    }
  }, [scrollYProgress, updateGallery])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div ref={galleryRef} className="relative w-full h-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`gallery-item absolute top-1/2 left-1/2 transform transition-transform duration-300 ease-out`}
            style={{ zIndex: index === currentIndex ? 10 : 1 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PhotoRevealSection
