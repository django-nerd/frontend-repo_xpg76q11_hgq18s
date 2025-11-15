import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Animated kelp strands and fish schools to evoke deep ocean motion
const Kelp = ({ index }) => {
  const delay = index * 0.6
  return (
    <motion.div
      className="absolute bottom-0 w-20 sm:w-24 md:w-28 h-[55vh] origin-bottom"
      style={{ left: `${index * 7 + 3}%` }}
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, -6, 4, -2, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div className="w-full h-full rounded-t-full bg-gradient-to-t from-emerald-400/20 via-cyan-300/10 to-transparent" />
      <div className="absolute -left-2 top-1/4 w-3 h-24 rounded-full bg-emerald-300/20" />
      <div className="absolute left-3 top-1/2 w-2 h-20 rounded-full bg-teal-300/20" />
    </motion.div>
  )
}

const Fish = ({ x, y, delay = 0 }) => {
  const path = useMemo(() => {
    const amplitude = 20 + Math.random() * 30
    const length = 60 + Math.random() * 60
    return { amplitude, length }
  }, [])

  return (
    <motion.div
      className="absolute w-8 h-3"
      style={{ left: x, top: y }}
      initial={{ x: -50, opacity: 0 }}
      animate={{
        x: ['-10%', '110%'],
        y: [0, -10, 10, -6, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <div className="relative w-8 h-3">
        <div className="absolute inset-y-0 left-0 w-6 rounded-r-full bg-cyan-200/70 shadow-[0_0_12px_theme(colors.cyan.300)]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-2 rounded-l-full bg-cyan-300/70" />
        <div className="absolute left-1 top-1 w-1 h-1 rounded-full bg-cyan-50/80" />
      </div>
    </motion.div>
  )
}

const FloatingParticles = () => {
  const dots = new Array(30).fill(0)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-200/40 shadow-[0_0_10px_theme(colors.cyan.300)]"
          style={{ left: `${(i * 13) % 100}%`, top: `${(i * 7) % 100}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, 10, -6, 0], opacity: [0, 0.8, 0.2, 0.6, 0] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}
    </div>
  )
}

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Deep ocean gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/10 via-[#041B2D] to-[#010A14]" />

      {/* Soft wave caustics */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
          <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="n" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" seed="2"/>
                <feDisplacementMap in="SourceGraphic" scale="50"/>
              </filter>
            </defs>
            <rect width="1200" height="800" fill="rgba(0,255,255,0.05)" filter="url(%23n)"/>
          </svg>
        `)}`
      }} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Kelp forest left side */}
      {[...Array(6)].map((_, i) => (
        <Kelp key={i} index={i} />
      ))}

      {/* Fish schools */}
      {[...Array(6)].map((_, i) => (
        <Fish key={i} x={`${i * 12}%`} y={`${20 + i * 10}%`} delay={i * 1.8} />
      ))}
    </div>
  )
}

export default AnimatedBackground
