import { useEffect, useRef, useState } from 'react'

/* ─── Earth / Moon Orbit — canvas animation ─────────────────
   Ported from scripts/orbit.js (MDN example).
   Uses emoji instead of image URLs so no external deps.        */

function drawOrbit(ctx, time) {
  const W = 300, H = 300

  ctx.globalCompositeOperation = 'destination-over'
  ctx.clearRect(0, 0, W, H)

  // ── Stars background ──────────────────────────────────────
  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = '#0f172a'
  ctx.fillRect(0, 0, W, H)

  // ── Earth orbit path ──────────────────────────────────────
  ctx.strokeStyle = 'rgba(99, 102, 241, 0.35)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
  ctx.stroke()

  // ── Sun (centre) ──────────────────────────────────────────
  ctx.save()
  ctx.translate(150, 150)
  ctx.font = '42px serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('☀️', 0, 0)

  // ── Earth ─────────────────────────────────────────────────
  const earthAngle =
    ((2 * Math.PI) / 60) * time.getSeconds() +
    ((2 * Math.PI) / 60000) * time.getMilliseconds()
  ctx.rotate(earthAngle)
  ctx.translate(105, 0)

  // Earth shadow
  ctx.fillStyle = 'rgba(0,0,0,0.4)'
  ctx.fillRect(0, -12, 50, 24)

  ctx.font = '22px serif'
  ctx.fillText('🌍', 0, 0)

  // ── Moon ─────────────────────────────────────────────────
  ctx.save()
  const moonAngle =
    ((2 * Math.PI) / 6) * time.getSeconds() +
    ((2 * Math.PI) / 6000) * time.getMilliseconds()
  ctx.rotate(moonAngle)
  ctx.translate(0, 28)
  ctx.font = '13px serif'
  ctx.fillText('🌕', 0, 0)
  ctx.restore()

  ctx.restore()
}

export function OrbitVisualization() {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) {
      cancelAnimationFrame(rafRef.current)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const loop = () => {
      drawOrbit(ctx, new Date())
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(rafRef.current)
  }, [running])

  return (
    <div className="card space-y-4">
      <div>
        <p className="section-label">Visualization</p>
        <h3 className="text-xl font-bold text-white mb-1">Earth / Moon Orbit</h3>
        <p className="text-slate-400 text-sm">
          A canvas animation ported from the MDN orbit example in{' '}
          <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">
            scripts/orbit.js
          </code>. The Earth and Moon positions are driven by{' '}
          <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">
            new Date()
          </code>{' '}
          — they&apos;re always in their real angular positions relative to the current time.
        </p>
      </div>

      <button
        id="orbit-toggle-btn"
        onClick={() => setRunning(r => !r)}
        className={running ? 'btn-ghost text-sm' : 'btn-primary text-sm'}
      >
        {running ? '⏸ Pause' : '▶ Start Orbit'}
      </button>

      <div className="flex justify-center">
        <div className="rounded-2xl overflow-hidden border border-[#334155] shadow-xl shadow-black/40">
          <canvas
            id="orbit-canvas"
            ref={canvasRef}
            width={300}
            height={300}
            style={{ background: '#0f172a' }}
          />
        </div>
      </div>
    </div>
  )
}
