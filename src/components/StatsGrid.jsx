import React from 'react'
import { Fish, Turtle, Shell, Camera, Activity, AlertTriangle } from 'lucide-react'

const StatCard = ({ label, value, trend = '+0.0%', accent = 'cyan' }) => (
  <div className="relative rounded-2xl p-4 border border-cyan-300/10 bg-white/5">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/5" />
    <div className="relative">
      <div className="text-xs text-cyan-200/70">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-cyan-50">{value}</div>
      <div className="text-xs text-emerald-300/80">{trend}</div>
    </div>
  </div>
)

const DetectionLog = () => (
  <div className="relative rounded-2xl p-4 border border-cyan-300/10 bg-white/5">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/5" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="text-sm text-cyan-100 font-medium">Recent Detections</div>
        <div className="text-xs text-cyan-200/70">Auto-classifier v2.3</div>
      </div>
      <div className="mt-3 space-y-2">
        {[
          { t: '13:02:11', s: 'Blue Tang', c: '95%' },
          { t: '12:59:48', s: 'Hawksbill Turtle', c: '88%' },
          { t: '12:55:04', s: 'Lionfish', c: '91%' },
          { t: '12:50:22', s: 'Manta Ray', c: '83%' },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/20 border border-cyan-300/10">
            <div className="text-xs text-cyan-200/70">{row.t}</div>
            <div className="text-sm text-cyan-100">{row.s}</div>
            <div className="text-xs text-emerald-300">{row.c}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ControlsPanel = () => (
  <div className="relative rounded-2xl p-4 border border-cyan-300/10 bg-white/5">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-emerald-400/5" />
    <div className="relative space-y-3">
      <div className="text-sm text-cyan-100 font-medium">ROV Controls</div>
      <div className="grid grid-cols-3 gap-2">
        {['Hold', 'Ascend', 'Descend', 'Left', 'Right', 'Boost'].map((c) => (
          <button key={c} className="px-3 py-2 rounded-lg bg-cyan-300/10 border border-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20 transition-colors">
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="px-3 py-2 rounded-lg bg-emerald-300/10 border border-emerald-300/10 text-emerald-100 hover:bg-emerald-300/20 transition-colors">Start Scan</button>
        <button className="px-3 py-2 rounded-lg bg-rose-300/10 border border-rose-300/10 text-rose-100 hover:bg-rose-300/20 transition-colors">Emergency Stop</button>
      </div>
    </div>
  </div>
)

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Species Count" value="128" trend="+3 today" />
        <StatCard label="Detections / min" value="42" trend="+12%" />
        <StatCard label="Cameras" value="6" trend="Operational" />
      </div>
      <div>
        <DetectionLog />
      </div>
      <div>
        <ControlsPanel />
      </div>
    </div>
  )
}

export default StatsGrid
