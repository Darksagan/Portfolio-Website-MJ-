'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import ProcessSection from './components/ProcessSection'
import ProjectsSection from './components/ProjectsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="relative">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsSection /> {/* ✅ Added here under Process */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
