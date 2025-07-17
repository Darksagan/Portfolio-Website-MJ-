'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Play, Pause, Volume2, Heart, Share2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface Track {
  id: number
  title: string
  artist: string
  duration: string
  cover: string
  audio?: string
  genre: string
  year: number
}

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [likedTracks, setLikedTracks] = useState<number[]>([])
  const audioRef = useRef<HTMLAudioElement>(null)

  const tracks: Track[] = [
    {
      id: 1,
      title: "Digital Dreams",
      artist: "Marcus Johnson",
      duration: "3:42",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      genre: "Electronic",
      year: 2024
    },
    {
      id: 2,
      title: "Neural Networks",
      artist: "Marcus Johnson",
      duration: "4:15",
      cover: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=400&fit=crop",
      genre: "Ambient",
      year: 2024
    },
    {
      id: 3,
      title: "Code Symphony",
      artist: "Marcus Johnson",
      duration: "5:23",
      cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop",
      genre: "Synthwave",
      year: 2023
    },
    {
      id: 4,
      title: "AI Lullaby",
      artist: "Marcus Johnson",
      duration: "3:58",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
      genre: "Downtempo",
      year: 2023
    },
    {
      id: 5,
      title: "Binary Beats",
      artist: "Marcus Johnson",
      duration: "4:07",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      genre: "Techno",
      year: 2024
    }
  ]

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLike = (trackId: number) => {
    setLikedTracks(prev => 
      prev.includes(trackId) 
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    )
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    // Simulate audio progress
    if (isPlaying && currentTrack) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1
          if (newTime >= 240) { // 4 minutes max for demo
            setIsPlaying(false)
            return 0
          }
          return newTime
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isPlaying, currentTrack])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white">
      {/* Page Transition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-8"
      >
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="group flex items-center space-x-3 hover-lift">
            <motion.div
              className="p-2 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Back to Portfolio
            </span>
          </Link>

          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-2 text-gradient shared-element">
              MUSIC
            </h1>
            <p className="text-gray-400 font-mono">CREATIVE COMPOSITIONS</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Track List */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  className={`group relative p-6 rounded-lg border transition-all duration-300 cursor-pointer hover-lift ${
                    currentTrack?.id === track.id
                      ? 'bg-purple-900/30 border-purple-500/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  onClick={() => playTrack(track)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={`track-glow-${track.id}`}
                  />

                  <div className="flex items-center space-x-4 relative z-10">
                    {/* Album Cover */}
                    <motion.div
                      className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-6 h-6 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Track Info */}
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-lg font-semibold mb-1 truncate project-title"
                        animate={{
                          color: currentTrack?.id === track.id ? "#a855f7" : "#ffffff"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {track.title}
                      </motion.h3>
                      <p className="text-gray-400 text-sm mb-2">{track.artist}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{track.genre}</span>
                        <span>•</span>
                        <span>{track.year}</span>
                        <span>•</span>
                        <span>{track.duration}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(track.id)
                        }}
                        className={`p-2 rounded-full transition-colors duration-300 ${
                          likedTracks.includes(track.id)
                            ? 'text-red-500 hover:text-red-400'
                            : 'text-gray-400 hover:text-white'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={likedTracks.includes(track.id) ? 'currentColor' : 'none'}
                        />
                      </motion.button>

                      <motion.button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full text-gray-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Progress Bar for Current Track */}
                  {currentTrack?.id === track.id && (
                    <motion.div
                      className="mt-4 pt-4 border-t border-white/10"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs text-gray-400 w-10">
                          {formatTime(currentTime)}
                        </span>
                        <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${(currentTime / 240) * 100}%` }}
                            transition={{ duration: 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-10">
                          {track.duration}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Player Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="sticky top-8">
              {/* Now Playing */}
              <AnimatePresence mode="wait">
                {currentTrack ? (
                  <motion.div
                    key={currentTrack.id}
                    className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-500/30 mb-6"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-sm font-mono text-purple-300 mb-4 tracking-wider">
                      NOW PLAYING
                    </h3>

                    <motion.div
                      className="w-full aspect-square rounded-lg overflow-hidden mb-4 project-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={currentTrack.cover}
                        alt={currentTrack.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.h4
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentTrack.title}
                    </motion.h4>
                    <motion.p
                      className="text-gray-300 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentTrack.artist}
                    </motion.p>

                    {/* Controls */}
                    <motion.div
                      className="flex items-center justify-center space-x-4 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        onClick={togglePlayPause}
                        className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </motion.button>
                    </motion.div>

                    {/* Volume */}
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Volume2 className="w-4 h-4 text-gray-400" />
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white"
                          style={{ width: `${volume * 100}%` }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="bg-white/5 p-6 rounded-lg border border-white/10 mb-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-gray-400">Select a track to start playing</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stats */}
              <motion.div
                className="bg-white/5 p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-sm font-mono text-gray-400 mb-4 tracking-wider">
                  COLLECTION STATS
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Tracks</span>
                    <span className="text-white font-semibold">{tracks.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Liked</span>
                    <span className="text-white font-semibold">{likedTracks.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Genres</span>
                    <span className="text-white font-semibold">
                      {new Set(tracks.map(t => t.genre)).size}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Background Elements */}
      <motion.div
        className="fixed top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-purple-500/30 to-transparent"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-1/4 right-10 w-2 h-24 bg-gradient-to-t from-pink-500/30 to-transparent"
        animate={{ scaleY: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  )
}

