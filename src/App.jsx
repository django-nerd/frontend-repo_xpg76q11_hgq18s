import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import SideNav from './components/SideNav'
import LiveFeed from './components/LiveFeed'
import StatsGrid from './components/StatsGrid'

function App() {
  return (
    <div className="relative min-h-screen text-cyan-50">
      <AnimatedBackground />

      {/* top glow header */}
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-cyan-400/20 to-transparent" />

      <div className="relative z-10 flex gap-6 p-6">
        {/* side navigation */}
        <SideNav />

        {/* main content */}
        <div className="flex-1 grid gap-6">
          {/* heading */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-emerald-200 to-teal-200">AquaVision AI — Marine Biology Dashboard</h1>
              <p className="text-cyan-200/70 text-sm">Live pelagic monitoring with bioluminescent UI</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded-xl bg-white/5 border border-cyan-300/10">Mission Time: 03:14:26</div>
              <div className="px-3 py-2 rounded-xl bg-white/5 border border-cyan-300/10">Depth: 3,876 m</div>
            </div>
          </div>

          {/* live feed panel */}
          <LiveFeed />

          {/* stats and controls */}
          <StatsGrid />
        </div>
      </div>
    </div>
  )
}

export default App
