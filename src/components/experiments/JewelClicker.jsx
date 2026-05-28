import { useState, useEffect, useRef, useCallback } from 'react'

/* ─── Gem colours + values ───────────────────────────────── */
const GEM_TYPES = [
  { label: 'green',  value: 10, ttl: 1200, color: '#10b981', ring: '#059669' },
  { label: 'blue',   value: 20, ttl: 1000, color: '#6366f1', ring: '#4338ca' },
  { label: 'orange', value: 50, ttl: 750,  color: '#f97316', ring: '#ea580c' },
]

function randomBetween(lo, hi) {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo
}

/* ─── Single gem component ───────────────────────────────── */
function Gem({ gem, onCatch }) {
  return (
    <button
      id={`gem-${gem.id}`}
      onClick={() => onCatch(gem)}
      title={`+${gem.value} pts`}
      className="absolute w-7 h-7 rounded-full border-2 cursor-pointer
                 transition-transform hover:scale-125 active:scale-90
                 shadow-lg animate-fade-in"
      style={{
        left:   gem.x,
        top:    gem.y,
        backgroundColor: gem.color,
        borderColor:     gem.ring,
        boxShadow: `0 0 12px ${gem.color}80`,
      }}
    />
  )
}

/* ─── High-score list ────────────────────────────────────── */
function HighScores() {
  const raw    = localStorage.getItem('stashgrid-gem-scores')
  const scores = raw
    ? JSON.parse(raw).sort((a, b) => b - a).slice(0, 10)
    : []

  if (!scores.length) return null

  return (
    <div className="mt-4">
      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
        High Scores (localStorage)
      </p>
      <ol className="space-y-1">
        {scores.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-xs">
            <span className="text-slate-600 w-4 text-right">{i + 1}.</span>
            <span className={i === 0 ? 'text-amber-400 font-bold' : 'text-slate-400'}>{s} pts</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ─── Main game component ────────────────────────────────── */
export function JewelClickerExperiment() {
  const [gems,     setGems]     = useState([])
  const [score,    setScore]    = useState(0)
  const [timeLeft, setTimeLeft] = useState(null)  // null = not started
  const [gameOver, setGameOver] = useState(false)
  const [, forceRefresh]        = useState(0)

  const spawnRef   = useRef(null)
  const timerRef   = useRef(null)
  const scoreRef   = useRef(0)
  const gemsRef    = useRef([])

  const saveScore = useCallback((final) => {
    const raw    = localStorage.getItem('stashgrid-gem-scores')
    const scores = raw ? JSON.parse(raw) : []
    scores.push(final)
    scores.sort((a, b) => b - a)
    scores.length = Math.min(scores.length, 10)
    localStorage.setItem('stashgrid-gem-scores', JSON.stringify(scores))
  }, [])

  const spawnGem = useCallback(() => {
    const type = GEM_TYPES[randomBetween(0, 2)]
    const gem  = {
      id:    Math.random().toString(36).slice(2),
      x:     randomBetween(4, 88) + '%',
      y:     randomBetween(4, 80) + '%',
      color: type.color,
      ring:  type.ring,
      value: type.value,
    }
    gemsRef.current = [...gemsRef.current, gem]
    setGems([...gemsRef.current])

    // Auto-remove after ttl
    setTimeout(() => {
      gemsRef.current = gemsRef.current.filter(g => g.id !== gem.id)
      setGems([...gemsRef.current])
    }, type.ttl)
  }, [])

  const handleCatch = useCallback((gem) => {
    gemsRef.current = gemsRef.current.filter(g => g.id !== gem.id)
    setGems([...gemsRef.current])
    scoreRef.current += gem.value
    setScore(scoreRef.current)
  }, [])

  const startGame = () => {
    // Reset
    gemsRef.current = []
    scoreRef.current = 0
    setGems([])
    setScore(0)
    setGameOver(false)
    setTimeLeft(10)

    spawnRef.current = setInterval(spawnGem, 750)

    let count = 10
    timerRef.current = setInterval(() => {
      count -= 1
      setTimeLeft(count)
      if (count <= 0) {
        clearInterval(spawnRef.current)
        clearInterval(timerRef.current)
        gemsRef.current = []
        setGems([])
        setGameOver(true)
        setTimeLeft(null)
        saveScore(scoreRef.current)
        forceRefresh(n => n + 1)  // re-render high scores
      }
    }, 1000)
  }

  // Cleanup on unmount
  useEffect(() => () => {
    clearInterval(spawnRef.current)
    clearInterval(timerRef.current)
  }, [])

  const playing = timeLeft !== null

  return (
    <div className="card space-y-4">
      <div>
        <p className="section-label">Experiment</p>
        <h3 className="text-xl font-bold text-white mb-1">Jewel Clicker</h3>
        <p className="text-slate-400 text-sm">
          10 seconds — click as many gems as you can. Scores are persisted in{' '}
          <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">
            localStorage
          </code>
          .
        </p>
      </div>

      {/* Scoreboard row */}
      <div className="flex items-center gap-6 text-sm">
        <div>
          <span className="text-slate-500 text-xs">Score</span>
          <p id="gem-score" className="text-2xl font-bold text-white font-mono">{score}</p>
        </div>
        {playing && (
          <div>
            <span className="text-slate-500 text-xs">Time</span>
            <p id="gem-timer" className={`text-2xl font-bold font-mono ${timeLeft <= 3 ? 'text-red-400' : 'text-brand-300'}`}>
              {timeLeft}s
            </p>
          </div>
        )}
        {gameOver && (
          <span id="gem-game-over" className="text-violet-400 font-semibold animate-fade-in">
            Game Over!
          </span>
        )}
      </div>

      {/* Game arena */}
      <div
        id="gem-arena"
        className="relative rounded-xl border border-[#334155] bg-[#0f172a]"
        style={{ height: 220 }}
      >
        {/* Start overlay */}
        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <button
              id="gem-start-btn"
              onClick={startGame}
              className="btn-primary"
            >
              {gameOver ? 'Play Again' : 'Click to Start!'}
            </button>
            <HighScores />
          </div>
        )}
        {/* Active gems */}
        {gems.map(gem => (
          <Gem key={gem.id} gem={gem} onCatch={handleCatch} />
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 flex-wrap">
        {GEM_TYPES.map(t => (
          <div key={t.label} className="flex items-center gap-1.5 text-xs text-slate-400">
            <span className="w-3 h-3 rounded-full border"
              style={{ backgroundColor: t.color, borderColor: t.ring }} />
            +{t.value} pts
          </div>
        ))}
      </div>
    </div>
  )
}
