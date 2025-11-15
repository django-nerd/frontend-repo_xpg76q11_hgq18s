import React from 'react'
import { Home, Activity, Camera, Settings, Waves, Fish, Compass, Radio, Gauge } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button className={`group relative flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
    active ? 'bg-cyan-400/10' : 'hover:bg-cyan-300/5'
  }`}>
    <div className={`relative grid place-items-center w-10 h-10 rounded-lg ${
      active ? 'bg-gradient-to-br from-cyan-400/30 to-emerald-400/20' : 'bg-white/5'
    } border border-cyan-300/10 shadow-[0_0_20px_-6px_rgba(34,211,238,0.35)]`">
      <Icon className={`w-5 h-5 transition-colors ${active ? 'text-cyan-300' : 'text-cyan-200/70 group-hover:text-cyan-200'}`} />
      <div className="absolute inset-0 rounded-lg bg-cyan-300/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <span className={`text-sm font-medium ${active ? 'text-cyan-100' : 'text-cyan-200/70 group-hover:text-cyan-100'}`}>{label}</span>
    {active && (
      <span className="absolute right-3 w-1.5 h-8 rounded-full bg-cyan-300/70 shadow-[0_0_16px_theme(colors.cyan.300)]" />
    )}
  </button>
)

const SideNav = () => {
  return (
    <aside className="relative z-10 w-72 p-4 flex flex-col gap-3">
      <div className="mb-2 px-3 py-2">
        <div className="text-xs tracking-widest text-cyan-200/60">AQUAVISION AI</div>
        <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-300">Deep Research Suite</div>
      </div>
      <nav className="flex-1 grid gap-2">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={Camera} label="Live Feed" />
        <NavItem icon={Fish} label="Species" />
        <NavItem icon={Activity} label="Detections" />
        <NavItem icon={Gauge} label="Sensors" />
        <NavItem icon={Radio} label="Comms" />
        <NavItem icon={Compass} label="Navigation" />
        <NavItem icon={Settings} label="Controls" />
      </nav>
      <div className="mt-auto">
        <div className="px-3 py-3 rounded-xl bg-white/5 border border-cyan-300/10">
          <div className="text-xs text-cyan-200/70">Mission</div>
          <div className="text-sm text-cyan-100">Pelagic Survey 7B</div>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
