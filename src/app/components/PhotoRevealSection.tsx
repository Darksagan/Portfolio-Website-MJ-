'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const FerrariPhotoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInGalleryMode, setIsInGalleryMode] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const galleryRef = useRef(null);

  const photos = [
    { src: '/images/photo-reveal/image-01.jpg', alt: 'Project Image 1', caption: 'Creative Design Project' },
    { src: '/images/photo-reveal/image-02.jpg', alt: 'Project Image 2', caption: 'Brand Development' },
    { src: '/images/photo-reveal/image-03.jpg', alt: 'Project Image 3', caption: 'Marketing Campaign' },
    { src: '/images/photo-reveal/image-04.jpg', alt: 'Project Image 4', caption: 'Visual Identity' },
    { src: '/images/photo-reveal/image-05.jpg', alt: 'Project Image 5', caption: 'Product Design' },
    { src: '/images/photo-reveal/image-06.jpg', alt: 'Project Image 6', caption: 'Digital Experience' },
    { src: '/images/photo-reveal/image-07.jpg', alt: 'Project Image 7', caption: 'Portfolio Showcase' },
    { src: '/images/photo-reveal/image-08.jpg', alt: 'Project Image 8', caption: 'Creative Solution' },
    { src: '/images/photo-reveal/image-09.jpg', alt: 'Project Image 9', caption: 'Brand Strategy' },
    { src: '/images/photo-reveal/image-10.jpg', alt: 'Project Image 10', caption: 'Design System' },
    { src: '/images/photo-reveal/image-11.jpg', alt: 'Project Image 11', caption: 'User Experience' },
    { src: '/images/photo-reveal/image-12.jpeg', alt: 'Project Image 12', caption: 'Media Production' },
    { src: '/images/photo-reveal/image-13.jpg', alt: 'Project Image 13', caption: 'Brand Guidelines' },
    { src: '/images/photo-reveal/image-14.jpg', alt: 'Project Image 14', caption: 'Final Presentation' },
  ];

  const updateGallery = useCallback((progress) => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll('.gallery-item');
    const totalItems = photos.length;
    const centerIndex = progress * (totalItems - 1);
    const currentCenterIndex = Math.round(centerIndex);

    if (currentCenterIndex !== currentIndex) {
      setCurrentIndex(Math.max(0, Math.min(totalItems - 1, currentCenterIndex)));
    }

    items.forEach((item, index) => {
      const relativePosition = index - centerIndex;
      const xOffset = relativePosition * 200;
      const yOffset = Math.sin(relativePosition * 0.5) * 20;
      const zPos = -Math.abs(relativePosition) * 50;

      let opacity = 0;
      const distance = Math.abs(relativePosition);
      if (distance < 3) {
        if (distance < 0.5) {
          opacity = 1;
        } else if (distance < 1.5) {
          opacity = 0.8;
        } else if (distance < 2.5) {
          opacity = 0.4;
        } else {
          opacity = 0.1;
        }
      }

      const scale = distance < 0.5 ? 1 : Math.max(0.6, 1 - (distance * 0.2));
      const rotation = relativePosition * 5;

      item.style.transform = `translate(-50%, -50%) translate3d(${xOffset}px, ${yOffset}px, ${zPos}px) scale(${scale}) rotateY(${rotation}deg)`;
      item.style.opacity = opacity.toString();

      if (Math.abs(relativePosition) < 0.5) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, [currentIndex, photos.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      const isInSection = sectionTop <= 0 && sectionTop > -sectionHeight + windowHeight;

      if (isInSection) {
        if (!isInGalleryMode) setIsInGalleryMode(true);
        const progress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        updateGallery(clampedProgress);
      } else {
        if (isInGalleryMode) {
          setIsInGalleryMode(false);
          setCurrentIndex(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInGalleryMode, updateGallery]);

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '400vh' }}
    >
      <div 
        ref={scrollContainerRef}
        className="sticky top-0 w-full h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(10,10,10,0.95))',
          perspective: '1200px'
        }}
      >
        {/* SOCIAL MEDIA — Top */}
        <motion.div
          className="absolute top-4 left-0 whitespace-nowrap text-[16vw] font-extrabold text-white/30 uppercase leading-none z-0"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        >
          SOCIAL MEDIA SOCIAL MEDIA SOCIAL MEDIA
        </motion.div>

        {/* MANAGEMENT — Bottom */}
        <motion.div
          className="absolute bottom-4 left-0 whitespace-nowrap text-[16vw] font-extrabold text-white/30 uppercase leading-none z-0"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        >
          MANAGEMENT MANAGEMENT MANAGEMENT
        </motion.div>

        {/* Floating Debug Text */}
        <motion.div
          className="absolute top-10 left-10 text-red-500 text-xs font-mono opacity-30 transform -rotate-12 z-10"
          animate={{ rotate: [-12, 12, -12], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          RULE: "ALL THINKING IS"<br />
          CREATING THAT WHICH<br />
          PHILOSOPHY: IS THINKING
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-purple-600 text-xs font-mono opacity-40 transform rotate-6 z-10"
          animate={{ y: [-10, 10, -10], rotate: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {/* Breaking_marquee_conventions */}
          <br />
          {/* Since_2014 */}
        </motion.div>

        {/* Gallery Display */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <div ref={galleryRef} className="relative w-full h-full">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="gallery-item absolute left-1/2 top-1/2 rounded-xl shadow-2xl transition-all duration-75 ease-out"
                style={{
                  width: '280px',
                  height: '497px',
                  transformStyle: 'preserve-3d',
                  transform: 'translate(-50%, -50%) translate3d(0px, 0px, -1000px)',
                  opacity: 0,
                  border: '3px solid rgba(220, 20, 60, 0.3)'
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Ferrari-themed overlays */}
        <div className="absolute w-32 h-32 border border-red-500/10 rounded-full top-[15%] left-[10%] animate-pulse" />
        <div className="absolute w-24 h-24 border border-red-400/10 rounded-full top-[70%] right-[15%] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-20 h-20 border border-red-600/10 rounded-full bottom-[25%] left-[75%] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] right-[5%] w-4 h-16 bg-gradient-to-b from-red-600/20 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-[30%] left-[8%] w-4 h-12 bg-gradient-to-t from-red-500/20 to-transparent transform -rotate-12"></div>
      </div>

      <style jsx>{`
        .gallery-item.active {
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(220, 20, 60, 0.4);
        }
        .gallery-item:hover {
          transform-origin: center center;
        }
      `}</style>
    </section>
  );
};

export default FerrariPhotoSection;
