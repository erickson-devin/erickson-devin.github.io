import { useEffect, useRef, useState } from 'react'

/* ─── Purple Rain — p5.js reimplemented as a raw canvas ─────
   We replicate the sketch/drop logic with requestAnimationFrame
   instead of importing p5.js as a dependency.                  */

function usePurpleRain(canvasRef, running) {
  const rafRef  = useRef(null)
  const dropsRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const W = canvas.width
    const H = canvas.height

    function Drop() {
      this.x      = Math.random() * W
      this.y      = Math.random() * -500
      this.z      = Math.random() * 20
      this.len    = lerp(10, 20, this.z / 20)
      this.yspeed = lerp(1, 20, this.z / 20)
    }

    function lerp(a, b, t) { return a + (b - a) * t }

    Drop.prototype.fall = function () {
      this.y += this.yspeed
      const grav = lerp(0, 0.2, this.z / 20)
      this.yspeed += grav
      if (this.y > H) {
        this.y      = Math.random() * -200 - 100
        this.yspeed = lerp(4, 10, this.z / 20)
      }
    }

    Drop.prototype.show = function () {
      const thick = lerp(1, 3, this.z / 20)
      ctx.strokeStyle = 'rgba(138, 43, 226, 0.85)'
      ctx.lineWidth   = thick
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(this.x, this.y + this.len)
      ctx.stroke()
    }

    // Init drops
    dropsRef.current = Array.from({ length: 500 }, () => new Drop())

    function draw() {
      if (!running) return
      ctx.fillStyle = 'rgba(230, 230, 250, 0.3)'
      ctx.fillRect(0, 0, W, H)
      for (const d of dropsRef.current) { d.fall(); d.show() }
      rafRef.current = requestAnimationFrame(draw)
    }

    if (running) {
      ctx.fillStyle = 'rgb(230, 230, 250)'
      ctx.fillRect(0, 0, W, H)
      rafRef.current = requestAnimationFrame(draw)
    }

    return () => cancelAnimationFrame(rafRef.current)
  }, [canvasRef, running])
}

export function PurpleRainVisualization() {
  const canvasRef = useRef(null)
  const [running, setRunning] = useState(false)

  usePurpleRain(canvasRef, running)

  return (
    <div className="card space-y-4">
      <div>
        <p className="section-label">Visualization</p>
        <h3 className="text-xl font-bold text-white mb-1">Purple Rain</h3>
        <p className="text-slate-400 text-sm">
          A p5.js sketch by{' '}
          <a href="https://thecodingtrain.com" target="_blank" rel="noreferrer"
            className="text-brand-400 hover:underline">Daniel Shiffman</a>
          , reimplemented as a raw canvas animation with{' '}
          <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">
            requestAnimationFrame
          </code>.
          500 drops with parallax depth using z-axis mapping.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          id="rain-toggle-btn"
          onClick={() => setRunning(r => !r)}
          className={running ? 'btn-ghost text-sm' : 'btn-primary text-sm'}
        >
          {running ? '⏸ Pause' : '▶ Start Rain'}
        </button>
      </div>

      <div className="rounded-xl overflow-hidden border border-[#334155]">
        <canvas
          id="purple-rain-canvas"
          ref={canvasRef}
          width={640}
          height={320}
          className="w-full block"
          style={{ background: 'rgb(230,230,250)' }}
        />
      </div>
    </div>
  )
}
