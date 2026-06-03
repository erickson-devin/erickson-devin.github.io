import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── Constants ──────────────────────────────────────────── */
const COLS      = 20
const ROWS      = 20
const CELL      = 18          // px per cell → canvas 360 × 360
const FPS       = 10
const START_LEN = 5
const W         = COLS * CELL
const H         = ROWS * CELL

/* ─── Helpers ────────────────────────────────────────────── */
function placeFood(snake) {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    }
  } while (snake.some(s => s.x === pos.x && s.y === pos.y))
  return pos
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function buildInitialSnake() {
  const midR = Math.floor(ROWS / 2)
  const midC = Math.floor(COLS / 2)
  return Array.from({ length: START_LEN }, (_, i) => ({
    x: midC - (START_LEN - 1 - i),
    y: midR,
  }))
}

function drawFrame(ctx, snake, food) {
  // Background
  ctx.fillStyle = '#0f172a'
  ctx.fillRect(0, 0, W, H)

  // Grid
  ctx.strokeStyle = 'rgba(30,41,59,0.5)'
  ctx.lineWidth = 0.5
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, H); ctx.stroke()
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(W, r * CELL); ctx.stroke()
  }

  // Snake
  snake.forEach((seg, i) => {
    const isHead = i === snake.length - 1
    if (isHead) {
      ctx.fillStyle = '#6ee7b7'
    } else {
      const t = i / Math.max(snake.length - 1, 1)
      const g = Math.round(130 + t * 95)
      ctx.fillStyle = `rgb(0,${g},90)`
    }
    roundRect(ctx, seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2, isHead ? 5 : 3)
    ctx.fill()
  })

  // Food
  if (food) {
    const fx = food.x * CELL + CELL / 2
    const fy = food.y * CELL + CELL / 2
    ctx.shadowColor = '#f87171'
    ctx.shadowBlur  = 12
    ctx.fillStyle   = '#f87171'
    ctx.beginPath()
    ctx.arc(fx, fy, (CELL - 4) / 2, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

/* ─── Component ──────────────────────────────────────────── */
export function SnakeGameExperiment() {
  const canvasRef  = useRef(null)
  const stateRef   = useRef(null)   // mutable game state (avoids stale closures)
  const loopRef    = useRef(null)

  const [phase,  setPhase]  = useState('idle')   // 'idle' | 'playing' | 'dead'
  const [score,  setScore]  = useState(0)
  const [best,   setBest]   = useState(() => parseInt(localStorage.getItem('snake-best') || '0', 10))
  const [length, setLength] = useState(START_LEN)

  /* ── Draw helper (reads from stateRef) ── */
  const redraw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx || !stateRef.current) return
    drawFrame(ctx, stateRef.current.snake, stateRef.current.food)
  }, [])

  /* ── Tick ── */
  const tick = useCallback(() => {
    const s = stateRef.current
    if (!s) return

    s.dir = { ...s.nextDir }
    const tail = s.snake[s.snake.length - 1]
    const head = {
      x: (tail.x + s.dir.x + COLS) % COLS,
      y: (tail.y + s.dir.y + ROWS) % ROWS,
    }

    // Self collision
    if (s.snake.some(seg => seg.x === head.x && seg.y === head.y)) {
      clearInterval(loopRef.current)
      setPhase('dead')
      return
    }

    s.snake = [...s.snake, head]
    if (head.x === s.food.x && head.y === s.food.y) {
      // Ate food
      s.score += 10
      s.food   = placeFood(s.snake)
      setScore(s.score)
      setLength(s.snake.length)
      if (s.score > s.best) {
        s.best = s.score
        setBest(s.score)
        localStorage.setItem('snake-best', s.score)
      }
    } else {
      s.snake.shift()
    }

    redraw()
  }, [redraw])

  /* ── Start ── */
  const startGame = useCallback(() => {
    clearInterval(loopRef.current)

    const snake = buildInitialSnake()
    stateRef.current = {
      snake,
      dir:     { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      food:    placeFood(snake),
      score:   0,
      best:    parseInt(localStorage.getItem('snake-best') || '0', 10),
    }

    setScore(0)
    setLength(START_LEN)
    setPhase('playing')
    redraw()
    loopRef.current = setInterval(tick, 1000 / FPS)
  }, [tick, redraw])

  /* ── Direction input ── */
  const setDir = useCallback((dx, dy) => {
    const s = stateRef.current
    if (!s) return
    // Prevent reversing
    if (dx !== 0 && s.dir.x === -dx) return
    if (dy !== 0 && s.dir.y === -dy) return
    s.nextDir = { x: dx, y: dy }
  }, [])

  /* ── Keyboard ── */
  useEffect(() => {
    const KEYS = { 37:[-1,0], 38:[0,-1], 39:[1,0], 40:[0,1] }
    const onKey = e => {
      if (!KEYS[e.keyCode]) return
      e.preventDefault()
      if (phase !== 'playing') { startGame(); return }
      const [dx, dy] = KEYS[e.keyCode]
      setDir(dx, dy)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, startGame, setDir])

  /* ── Initial idle frame ── */
  useEffect(() => {
    const snake = buildInitialSnake()
    stateRef.current = {
      snake,
      dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 },
      food: placeFood(snake), score: 0, best,
    }
    redraw()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Cleanup on unmount ── */
  useEffect(() => () => clearInterval(loopRef.current), [])

  const isPlaying = phase === 'playing'
  const isDead    = phase === 'dead'

  return (
    <div className="card space-y-4">
      {/* Header */}
      <div>
        <p className="section-label">Experiment</p>
        <h3 className="text-xl font-bold text-white mb-1">Snake Game</h3>
        <p className="text-slate-400 text-sm">
          Classic Snake — built with{' '}
          <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">
            HTML5 Canvas
          </code>{' '}
          and ported to React. Use arrow keys or the d-pad.
        </p>
      </div>

      {/* Scoreboard */}
      <div className="flex items-center gap-6 text-sm font-mono">
        <div>
          <span className="text-slate-500 text-xs block">Score</span>
          <p id="snake-score" className="text-2xl font-bold text-emerald-400">{score}</p>
        </div>
        <div>
          <span className="text-slate-500 text-xs block">Best</span>
          <p id="snake-best" className="text-2xl font-bold text-amber-400">{best}</p>
        </div>
        <div>
          <span className="text-slate-500 text-xs block">Length</span>
          <p id="snake-length" className="text-2xl font-bold text-white">{length}</p>
        </div>
        {isDead && (
          <span id="snake-game-over" className="text-red-400 font-semibold animate-fade-in ml-2">
            Game Over!
          </span>
        )}
      </div>

      {/* Canvas + overlay */}
      <div className="relative rounded-xl overflow-hidden border border-[#334155]"
           style={{ width: W, height: H, maxWidth: '100%' }}>
        <canvas
          ref={canvasRef}
          id="snake-canvas"
          width={W}
          height={H}
          style={{ display: 'block', maxWidth: '100%' }}
        />
        {/* Start / Game-over overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3
                          bg-[#0a0f1e]/85 backdrop-blur-sm">
            <p className="text-2xl font-extrabold text-white">
              {isDead ? '💀 Game Over' : '🐍 Snake'}
            </p>
            {isDead && (
              <p className="text-emerald-400 font-mono text-sm">
                Score: {score} &nbsp;•&nbsp; Best: {best}
              </p>
            )}
            <button
              id="snake-start-btn"
              onClick={startGame}
              className="btn-primary"
            >
              {isDead ? 'Play Again' : 'Click to Start!'}
            </button>
          </div>
        )}
      </div>

      {/* D-pad */}
      <div className="grid gap-1.5" style={{ gridTemplateAreas: '". up ." "left . right" ". down ."', width: 'fit-content' }}>
        {[
          { id: 'snake-btn-up',    label: '▲', area: 'up',    dx: 0,  dy: -1 },
          { id: 'snake-btn-left',  label: '◀', area: 'left',  dx: -1, dy: 0  },
          { id: 'snake-btn-right', label: '▶', area: 'right', dx: 1,  dy: 0  },
          { id: 'snake-btn-down',  label: '▼', area: 'down',  dx: 0,  dy: 1  },
        ].map(({ id, label, area, dx, dy }) => (
          <button
            key={id}
            id={id}
            aria-label={area}
            onClick={() => {
              if (!isPlaying) { startGame(); return }
              setDir(dx, dy)
            }}
            className="w-11 h-11 rounded-lg border border-[#334155] bg-[#1e293b]
                       text-slate-400 flex items-center justify-center text-sm
                       hover:bg-[#334155] hover:text-white active:scale-90
                       transition-all duration-100"
            style={{ gridArea: area }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#6ee7b7]" />Head
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#00a060]" />Body
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#f87171]" />Food
        </span>
      </div>
    </div>
  )
}
