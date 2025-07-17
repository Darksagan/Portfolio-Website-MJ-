'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Pause, Volume2, Download, Home, Music2, Zap, Headphones } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Navigation from '../components/Navigation'

interface MusicProject {
  id: number
  title: string
  album: string
  year: string
  genre: string
  duration: string
  audioUrl: string
  coverArt: string
  description: string
  tags: string[]
}

const MusicPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({})
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const musicProjects: MusicProject[] = [
    {
      id: 1,
      title: "CALI SUMMERS",
      album: "PORTFOLIO IV SOUNDTRACK",
      year: "2024",
      genre: "ELECTRONIC / AMBIENT",
      duration: "4:32",
      audioUrl: "/music/Cali_Summers.mp3", // You'll upload your MP3s here
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      description: "An experimental nostalgic piece for summer time vibes.",
      tags: ["EXPERIMENTAL", "SYNTHESIZER", "DANCE"]
    },
    {
      id: 2,
      title: "BROKEN RULES",
      album: "UNCONVENTIONAL EP",
      year: "2024",
      genre: "GLITCH HOP / INDUSTRIAL",
      duration: "3:47",
      audioUrl: "/music/sample2.mp3",
      coverArt: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
      description: "A chaotic symphony that deliberately breaks musical conventions, much like my design philosophy.",
      tags: ["GLITCH", "INDUSTRIAL", "CHAOS"]
    },
    {
      id: 3,
      title: "CODE & SOUND",
      album: "DEV SESSIONS",
      year: "2023",
      genre: "LO-FI / STUDY BEATS",
      duration: "5:21",
      audioUrl: "/music/sample3.mp3",
      coverArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
      description: "Coding soundtrack - the rhythms that fuel late-night development sessions.",
      tags: ["LO-FI", "CHILL", "PRODUCTIVITY"]
    },
    {
      id: 4,
      title: "MATRIX SYMPHONY",
      album: "EASTER EGG COLLECTION",
      year: "2023",
      genre: "CYBERPUNK / ORCHESTRAL",
      duration: "6:15",
      audioUrl: "/music/sample4.mp3",
      coverArt: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
      description: "The ultimate Easter egg - a full orchestral piece with cyberpunk elements.",
      tags: ["ORCHESTRAL", "CYBERPUNK", "EPIC"]
    }
  ]

  const playTrack = (id: number) => {
    // Pause all other tracks
    Object.values(audioRefs.current).forEach(audio => {
      if (audio && !audio.paused) {
        audio.pause()
      }
    })

    const audio = audioRefs.current[id]
    if (audio) {
      if (currentlyPlaying === id) {
        audio.pause()
        setCurrentlyPlaying(null)
      } else {
        audio.volume = volume
        audio.play()
        setCurrentlyPlaying(id)
      }
    }
  }

  const handleTimeUpdate = (id: number) => {
    const audio = audioRefs.current[id]
    if (audio && currentlyPlaying === id) {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration)
    }
  }

  const handleSeek = (id: number, newTime: number) => {
    const audio = audioRefs.current[id]
    if (audio) {
      audio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />

      {/* Artistic background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(255, 0, 150, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(0, 255, 100, 0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(150, 0, 255, 0.4) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating design violations */}
      <motion.div
        className="absolute top-32 right-20 text-red-500 text-xs font-mono opacity-30 transform rotate-12"
        animate={{
          rotate: [12, -12, 12],
          y: [-10, 10, -10]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        RULE: "SEPARATE_MUSIC_FROM_PORTFOLIO"<br/>
        STATUS: COMPLETELY_IGNORED<br/>
        REASON: CREATIVITY_KNOWS_NO_BOUNDARIES
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-10 text-cyan-400 text-xs font-mono opacity-40 transform -rotate-6"
        animate={{
          x: [-5, 5, -5],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {`// MUSIC !== just_hobby`}<br/>
        {`// MUSIC === creative_expression`}
      </motion.div>

      <div ref={sectionRef} className="container mx-auto px-6 py-32 relative">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-black mb-8 relative"
            animate={{
              textShadow: [
                '0 0 0 transparent',
                '3px 0 0 #ff0066, -3px 0 0 #00ffff',
                '0 0 0 transparent',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            <motion.span className="text-white">M</motion.span>
            <motion.span
              className="text-red-500 transform skew-y-6 inline-block"
              animate={{ skewY: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              U
            </motion.span>
            <motion.span
              className="text-cyan-400 transform scale-110 inline-block"
              animate={{ scale: [1.1, 1.3, 1.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              S
            </motion.span>
            <motion.span className="text-white">I</motion.span>
            <motion.span
              className="text-yellow-400 transform -skew-x-12 inline-block"
              animate={{ skewX: [-12, 12, -12] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              C
            </motion.span>

            {/* Floating musical elements */}
            <motion.div
              className="absolute -top-8 -right-8 text-purple-500 text-4xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              ♪
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-green-400 text-3xl"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, -360]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ♫
            </motion.div>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            WHERE CODE MEETS SOUND<span className="text-red-500"> /</span> BREAKING AUDIO RULES SINCE 2014
          </motion.p>

          {/* Control panel */}
          <motion.div
            className="flex justify-center items-center space-x-6 text-green-400 font-mono text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="flex items-center space-x-2 border border-green-400 px-3 py-1">
              <Headphones size={16} />
              <span>AUDIO_READY</span>
            </div>
            <span className="opacity-60">| PROJECTS: {musicProjects.length}</span>
            <span className="opacity-60">| STATUS: EXPERIMENTAL</span>
          </motion.div>
        </motion.div>

        {/* Music Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {musicProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900/50 border-2 border-gray-800 hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              style={{ perspective: 1000 }}
            >
              {/* Glitch effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                animate={currentlyPlaying === project.id ? { opacity: [0, 0.3, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="p-6 relative z-10">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={project.coverArt}
                      alt={project.title}
                      className="w-20 h-20 object-cover border-2 border-gray-600"
                    />
                    {currentlyPlaying === project.id && (
                      <motion.div
                        className="absolute inset-0 border-2 border-cyan-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-black font-mono mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-mono">{project.album} — {project.year}</p>
                    <p className="text-cyan-400 text-xs font-mono mt-1">{project.genre}</p>
                  </div>

                  <motion.button
                    onClick={() => playTrack(project.id)}
                    className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {currentlyPlaying === project.id ?
                      <Pause size={20} className="text-white" /> :
                      <Play size={20} className="text-white ml-1" />
                    }
                  </motion.button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="text-xs bg-gray-800 text-green-400 px-2 py-1 font-mono border border-gray-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + tagIndex * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Audio Player */}
                <div className="space-y-3">
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[project.id] = el
                    }}
                    onTimeUpdate={() => handleTimeUpdate(project.id)}
                    onEnded={() => setCurrentlyPlaying(null)}
                    preload="metadata"
                  >
                    <source src={project.audioUrl} type="audio/mpeg" />
                  </audio>

                  {/* Progress bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-700 h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        style={{
                          width: currentlyPlaying === project.id ?
                            `${(currentTime / duration) * 100}%` : '0%'
                        }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                    {currentlyPlaying === project.id && (
                      <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={(e) => handleSeek(project.id, parseFloat(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    )}
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>
                      {currentlyPlaying === project.id ? formatTime(currentTime) : '0:00'} / {project.duration}
                    </span>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Volume2 size={14} />
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="w-16 h-1 bg-gray-700 appearance-none cursor-pointer"
                        />
                      </div>
                      <motion.button
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download size={14} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project number */}
              <div className="absolute top-4 left-4 text-xs font-mono text-gray-600">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Portfolio */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="/"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-black via-purple-900 to-black text-white px-8 py-4 hover:from-purple-900 hover:via-black hover:to-purple-900 transition-all duration-500 transform skew-x-12 hover:skew-x-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} className="transform -skew-x-12" />
            <span className="font-bold transform -skew-x-12">BACK TO PORTFOLIO</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating artistic elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-3 h-3 bg-red-500 rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/3 left-16 w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent"
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 text-purple-500 text-6xl font-black opacity-20 transform rotate-45"
        animate={{ rotate: [45, 405, 45] }}
        transition={{ duration: 15, repeat: Infinity }}
      >
        ♪
      </motion.div>
    </div>
  )
}

export default MusicPage
