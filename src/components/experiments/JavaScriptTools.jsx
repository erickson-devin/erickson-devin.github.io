import { useState } from 'react'

const FRUITS = {
  banana: { switchMsg: 'Banana is yellow!', condMsg: 'B-A-N-A-N-A-S' },
  orange: { switchMsg: "Don't call me mandarin.", condMsg: "Orange you glad I didn't say banana?" },
  apple:  { switchMsg: 'How you like them apples?', condMsg: 'An Apple a day keeps the doctor away.' },
}

/* ─── Loop demos ─────────────────────────────────────────── */
function LoopsDemo() {
  const [whileNums, setWhileNums] = useState([])
  const [forNums,   setForNums]   = useState([])

  return (
    <div className="space-y-4">
      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">While Loop</p>
      <div className="flex items-start gap-4 flex-wrap">
        <button id="js-while-btn" onClick={() => setWhileNums([...Array(10).keys()])}
          className="btn-primary text-xs px-3 py-1.5">
          Count 0–9
        </button>
        {whileNums.length > 0 && (
          <div id="js-while-output" className="flex gap-1 flex-wrap">
            {whileNums.map(n => (
              <span key={n} className="tag">{n}</span>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-4">For Loop — Odd Numbers</p>
      <div className="flex items-start gap-4 flex-wrap">
        <button id="js-for-btn" onClick={() => setForNums([1,3,5,7,9])}
          className="btn-ghost text-xs px-3 py-1.5">
          Show Odds
        </button>
        {forNums.length > 0 && (
          <div id="js-for-output" className="flex gap-1 flex-wrap">
            {forNums.map(n => (
              <span key={n} className="tag">{n}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Switch & Conditional ───────────────────────────────── */
function FruitDemo() {
  const [fruit, setFruit]       = useState('apple')
  const [switchMsg, setSwitchMsg] = useState('')
  const [condMsg, setCondMsg]   = useState('')

  const check = () => {
    const f = fruit.toLowerCase().trim()
    const result = FRUITS[f]
    setSwitchMsg(result ? result.switchMsg : 'I have never heard of that fruit.')
    setCondMsg(result ? result.condMsg : 'Did you know that you should follow the directions?')
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">Switch + Conditional</p>
      <p className="text-slate-400 text-xs">
        Enter <span className="text-brand-300 font-mono">banana</span>,{' '}
        <span className="text-brand-300 font-mono">orange</span>, or{' '}
        <span className="text-brand-300 font-mono">apple</span>. Something else if you dare.
      </p>
      <div className="flex gap-2 flex-wrap">
        <input
          id="js-fruit-input"
          type="text"
          value={fruit}
          onChange={e => setFruit(e.target.value)}
          className="bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2
                     text-sm text-white focus:outline-none focus:border-brand-500
                     transition-colors w-40"
        />
        <button id="js-fruit-btn" onClick={check} className="btn-primary text-xs px-4 py-2">
          Check Fruit
        </button>
      </div>
      {switchMsg && (
        <div className="space-y-1 mt-2">
          <p id="js-switch-msg" className="text-sm text-violet-300">
            <span className="text-slate-500 font-mono text-xs">switch → </span>{switchMsg}
          </p>
          <p id="js-cond-msg" className="text-sm text-brand-300">
            <span className="text-slate-500 font-mono text-xs">if/else → </span>{condMsg}
          </p>
        </div>
      )}
    </div>
  )
}

/* ─── Exported experiment card ───────────────────────────── */
export function JavaScriptToolsExperiment() {
  return (
    <div className="card space-y-8">
      <div>
        <p className="section-label">Experiment</p>
        <h3 className="text-xl font-bold text-white mb-1">JavaScript Fundamentals</h3>
        <p className="text-slate-400 text-sm">
          Interactive demos of core JS control-flow patterns — while loops, for loops,
          switch statements, and if/else conditionals — all rendered live in the browser.
        </p>
      </div>
      <LoopsDemo />
      <FruitDemo />
    </div>
  )
}
