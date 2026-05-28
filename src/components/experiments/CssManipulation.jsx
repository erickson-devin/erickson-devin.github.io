import { useState, useRef } from 'react'

/* ─── CSS Click Playground ───────────────────────────────── */
function CssClickBox() {
  const colors  = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6']
  const fonts   = ['Inter, sans-serif', 'Georgia, serif', 'Courier New, monospace', 'Impact, fantasy', 'Trebuchet MS, sans-serif']
  const bgColors= ['#1e1b4b', '#500724', '#451a03', '#052e16', '#2e1065']
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  const cycle = () => setIdx(i => (i + 1) % colors.length)

  return (
    <div className="space-y-3">
      <div
        id="css-click-box"
        onClick={cycle}
        style={{
          color: colors[idx],
          backgroundColor: bgColors[idx],
          fontFamily: fonts[idx],
          visibility: visible ? 'visible' : 'hidden',
        }}
        className="cursor-pointer select-none rounded-xl px-6 py-4 border border-white/10
                   transition-all duration-300 text-sm font-medium"
      >
        Click me to cycle color &amp; font!
      </div>
      <div className="flex gap-2">
        <button id="css-hide-btn" onClick={() => setVisible(false)}
          className="btn-ghost text-xs px-3 py-1.5">Hide</button>
        <button id="css-show-btn" onClick={() => setVisible(true)}
          className="btn-primary text-xs px-3 py-1.5">Show</button>
      </div>
    </div>
  )
}

/* ─── Mouse-over Reactive Box ────────────────────────────── */
function HoverBox() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      id="css-hover-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: hovered ? 240 : 200 }}
      className="cursor-default rounded-xl px-5 py-3 border border-brand-500/40
                 bg-[#0f172a] transition-all duration-200 text-sm"
    >
      <span style={{ color: hovered ? 'white' : '#ec4899' }}>
        {hovered ? 'Woah! Get off!' : 'Mouse over me'}
      </span>
    </div>
  )
}

/* ─── Text uppercaser ────────────────────────────────────── */
function UpperCaseInput() {
  const [val, setVal]   = useState('')
  const [msg, setMsg]   = useState('')

  const handleChange = (e) => {
    const upper = e.target.value.toUpperCase()
    setVal(upper)
    if (upper) setMsg('See what I did there?')
    else setMsg('')
  }

  return (
    <div className="space-y-2">
      <label className="text-xs text-slate-400 block">
        Type your name in lowercase — watch what happens
      </label>
      <input
        id="css-uppercase-input"
        type="text"
        value={val}
        onChange={handleChange}
        placeholder="your name"
        className="bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2
                   text-sm text-white placeholder-slate-600 focus:outline-none
                   focus:border-brand-500 transition-colors w-full max-w-xs"
      />
      {msg && (
        <p id="css-uppercase-msg" className="text-brand-400 text-xs font-mono">{msg}</p>
      )}
    </div>
  )
}

/* ─── Exported experiment card ───────────────────────────── */
export function CssManipulationExperiment() {
  return (
    <div className="card space-y-8">
      <div>
        <p className="section-label">Experiment</p>
        <h3 className="text-xl font-bold text-white mb-1">CSS Manipulation with JavaScript</h3>
        <p className="text-slate-400 text-sm">
          Three live demos showing how JavaScript reaches into the DOM to mutate CSS
          styles at runtime — color cycling, hover reactions, and text transformation.
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Demo 1 — Click to style</p>
        <CssClickBox />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Demo 2 — Hover reaction</p>
        <HoverBox />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Demo 3 — Input transform</p>
        <UpperCaseInput />
      </div>
    </div>
  )
}
