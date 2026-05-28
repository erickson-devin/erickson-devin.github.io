import { useEffect, useRef, useState } from 'react'

/* ─── State data ─────────────────────────────────────────── */
// Current = lived/worked there · Been = visited
const STATE_CLASSES = {
  // Current (red accent)
  GA: 'Current', TN: 'Current', KY: 'Current',
  NC: 'Current', SC: 'Current', OK: 'Current',
  CO: 'Current', AL: 'Current',
  // Been (indigo accent)
  TX: 'Been', NV: 'Been', AZ: 'Been', WA: 'Been',
  CA: 'Been', ID: 'Been', UT: 'Been', KS: 'Been',
  AR: 'Been', MS: 'Been', FL: 'Been', VA: 'Been',
  DE: 'Been', NJ: 'Been', MD: 'Been', IN: 'Been',
  IL: 'Been',
}

const STATE_LABELS = {
  AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',
  CO:'Colorado',CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',
  HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',
  KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',
  MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',
  NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',
  NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',
  OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',
  SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',
  VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',
}

export function UsMapVisualization() {
  const [tooltip, setTooltip] = useState(null) // { state, cls, x, y }

  const getColor = (cls) => {
    if (cls === 'Current') return '#6366f1'   // brand-500
    if (cls === 'Been')    return '#4338ca'   // brand-700 (lighter tint)
    return '#1e293b'                           // surface-card
  }
  const getHover = (cls) => {
    if (cls === 'Current') return '#818cf8'
    if (cls === 'Been')    return '#6366f1'
    return '#334155'
  }

  return (
    <div className="card space-y-4">
      <div>
        <p className="section-label">Visualization</p>
        <h3 className="text-xl font-bold text-white mb-1">US States — Where I&apos;ve Been</h3>
        <p className="text-slate-400 text-sm">
          An interactive SVG map ported from the original <code className="font-mono text-brand-300 bg-brand-950/50 px-1 rounded text-xs">sandbox/Map.html</code>.
          Hover a state for details.
        </p>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs">
        {[
          { label: 'Lived / Worked', color: '#6366f1' },
          { label: 'Visited',        color: '#4338ca' },
          { label: 'Not yet',        color: '#1e293b' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5 text-slate-400">
            <span className="w-3 h-3 rounded-sm border border-white/10"
              style={{ backgroundColor: l.color }} />
            {l.label}
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <div className="relative overflow-hidden rounded-xl border border-[#334155] bg-[#0f172a]">
        {tooltip && (
          <div
            className="absolute z-10 px-3 py-1.5 rounded-lg text-xs font-medium
                       bg-[#1e293b] border border-[#334155] text-white shadow-xl
                       pointer-events-none transition-all"
            style={{ left: tooltip.x + 8, top: tooltip.y - 36 }}
          >
            {STATE_LABELS[tooltip.state] ?? tooltip.state}
            {tooltip.cls !== 'none' && (
              <span className={`ml-2 ${tooltip.cls === 'Current' ? 'text-brand-300' : 'text-violet-400'}`}>
                · {tooltip.cls === 'Current' ? 'Lived/Worked' : 'Visited'}
              </span>
            )}
          </div>
        )}

        {/* The actual SVG map — embed as an <object> pointing at the original file
            so we don't have to inline all 177 lines of SVG paths in JSX */}
        <object
          id="us-map-object"
          type="text/html"
          data="/sandbox/Map.html"
          title="Interactive US States Map"
          className="w-full rounded-xl"
          style={{ height: 340, border: 'none' }}
        />
      </div>

      <p className="text-xs text-slate-600 font-mono">
        SVG paths sourced from original <code>sandbox/Map.html</code> · hover states use onmouseover
      </p>
    </div>
  )
}
