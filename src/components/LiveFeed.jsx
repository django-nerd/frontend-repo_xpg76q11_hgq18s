import React from 'react'
import { motion } from 'framer-motion'
import { Camera, SignalHigh, Waves } from 'lucide-react'

const HoloLabel = ({ label, value }) => (
  <div className="relative px-4 py-2 rounded-lg border border-cyan-300/20 bg-cyan-300/5 text-cyan-100 text-xs tracking-wide">
    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 blur-md" />
    <div className="relative flex items-center gap-2">
      <span className="text-cyan-200/80">{label}</span>
      <span className="font-semibold text-cyan-100">{value}</span>
    </div>
  </div>
)

const LiveFeed = () => {
  return (
    <div className="relative aspect-video rounded-3xl overflow-hidden border border-cyan-300/10 bg-white/5">
      {/* video placeholder */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
          <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="w" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" seed="3"/>
                <feDisplacementMap in="SourceGraphic" scale="80"/>
              </filter>
            </defs>
            <rect width="1200" height="800" fill="rgba(0,255,255,0.05)" filter="url(%23w)"/>
          </svg>
        `)}`
      }} />

      {/* holographic chrome */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-cyan-300/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-300/20 to-transparent" />

      {/* floating chrome labels */}
      <div className="absolute top-4 left-4 flex gap-2">
        <HoloLabel label="Depth" value="3876 m" />
        <HoloLabel label="Temp" value="2.1 °C" />
      </div>
      <div className="absolute top-4 right-4 flex gap-2">
        <HoloLabel label="Signal" value={<span className="inline-flex items-center gap-1"><SignalHigh className="w-3 h-3"/> 98%</span>} />
        <HoloLabel label="Cam" value={<span className="inline-flex items-center gap-1"><Camera className="w-3 h-3"/> A7R-IV</span>} />
      </div>

      {/* floating scan rings */}
      <motion.div
        className="absolute inset-0 grid place-items-center"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full border border-cyan-300/20"
            style={{ width: `${30 + i * 18}%`, height: `${30 + i * 18}%` }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* wave meter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] h-14 rounded-xl overflow-hidden border border-cyan-300/10 bg-black/20">
        <motion.div
          className="absolute inset-0"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%', '0%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="56" viewBox="0 0 1200 56">
                <path d="M0 28 Q 50 8 100 28 T 200 28 T 300 28 T 400 28 T 500 28 T 600 28 T 700 28 T 800 28 T 900 28 T 1000 28 T 1100 28 T 1200 28" stroke="rgba(34,211,238,0.6)" stroke-width="2" fill="none"/>
              </svg>
            `)}`,
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>
    </div>
  )
}

export default LiveFeed
