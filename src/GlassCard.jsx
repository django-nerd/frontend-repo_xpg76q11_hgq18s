import React from 'react'

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-xl bg-cyan-200/[0.04] border border-cyan-300/10 shadow-[0_0_60px_-10px_rgba(34,211,238,0.35)] rounded-2xl ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard
