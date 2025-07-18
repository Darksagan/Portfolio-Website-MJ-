'use client';

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import heroImage from '@/public/Screenshot-2025-07-17-at-11.45.56-AM.png';

// Generate particles data only on client
const generateParticles = () => {
  return [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Generate particles only on client side
  useEffect(() => {
    setParticles(generateParticles());
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: [0, 360],
        transition: { duration: 20, repeat: Infinity, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* LAYER 1: Video (farthest back) */}
      <video
        autoPlay
        loop
        muted
        className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom z-[-1]"
        style={{ minHeight: '500px' }} // Match height of bottom image
      >
        <source src="/door-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* LAYER 2: Bottom Image (static, no rotation) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <Image
          src="/marcus-bottom-image.png"
          alt="Bottom Decorative"
          width={1920}
          height={500}
          className="w-full object-cover"
          priority
        />
      </motion.div>

      {/* LAYER 3: Animated Background (Orbs and Particles) */}
      <motion.div className="absolute inset-0 z-10" style={{ y, scale }}>
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50 },
            y: { type: 'spring', stiffness: 50 },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50 },
            y: { type: 'spring', stiffness: 50 },
            scale: { duration: 6, repeat: Infinity },
          }}
        />

        {/* Floating Particles - Only render after mounting */}
        {mounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full z-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
      </motion.div>

      {/* LAYER 4: Rotating Background Element */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
        animate={controls}
      >
        <div className="w-full h-full border border-white/10 rounded-full">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-500 rounded-full -translate-x-1/2 translate-y-1" />
          <div className="absolute left-0 top-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1 -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 w-2 h-2 bg-cyan-500 rounded-full translate-x-1 -translate-y-1/2" />
        </div>
      </motion.div>

      {/* LAYER 5: Main Content */}
      <motion.div
        className="relative z-30 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        {/* Decorative Top Element */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="mx-4 w-2 h-2 bg-white/50 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none"
            animate={{
              textShadow: [
                '0 0 0 transparent',
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 0 transparent',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.span
              className="inline-block text-gradient cubic-text"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              MARCUS
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-white cubic-text"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Portfolio
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 font-light tracking-wider mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.span
              className="inline-block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI DEVELOPER
            </motion.span>
            <motion.span className="mx-4 text-purple-400">×</motion.span>
            <motion.span
              className="inline-block"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CREATIVE TECHNOLOGIST
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Subtitle with Typewriter Effect */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Crafting intelligent solutions that bridge the gap between human
          creativity and artificial intelligence.
          <motion.span
            className="inline-block w-0.5 h-6 bg-white ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <motion.button
            onClick={scrollToWork}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg overflow-hidden button-hover hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-all duration-300 hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.p
            className="text-sm text-gray-500 mb-4 font-mono tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL TO EXPLORE
          </motion.p>
          <motion.button
            onClick={scrollToWork}
            className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Control Panel */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center space-x-4 text-white/60 font-mono text-sm z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
        </button>
        <span className="opacity-40">|</span>
        <span className="opacity-60">ANIMATION</span>
      </motion.div>

      {/* Version Info */}
      <motion.div
        className="absolute bottom-8 right-8 text-white/40 font-mono text-xs z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        v2.0.1 — ENHANCED
      </motion.div>
    </section>
  );
};

export default HeroSection;