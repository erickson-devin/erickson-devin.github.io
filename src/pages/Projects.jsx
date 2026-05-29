import { Link } from 'react-router-dom'
import ProjectTabs, { TabPanel } from '../components/ProjectTabs'
import { CssManipulationExperiment } from '../components/experiments/CssManipulation'
import { JavaScriptToolsExperiment } from '../components/experiments/JavaScriptTools'
import { JewelClickerExperiment } from '../components/experiments/JewelClicker'
import { UsMapVisualization } from '../components/visualizations/UsMap'
import { PurpleRainVisualization } from '../components/visualizations/PurpleRain'
import { OrbitVisualization } from '../components/visualizations/Orbit'

/* ─── Shared helpers ─────────────────────────────────────── */

const Tag = ({ children }) => <span className="tag">{children}</span>

const SectionDivider = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs text-brand-400 bg-brand-950 border border-brand-800 px-2 py-0.5 rounded">
      {String(number).padStart(2, '0')}
    </span>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="flex-1 h-px bg-[#334155]" />
  </div>
)

/* ─── Tab 1 — Case Studies ───────────────────────────────── */

function StashGridCaseStudy() {
  const tags = ['Python', 'Flask', 'React', 'SQLite', 'Linux', 'Raspberry Pi', 'Elecrow']

  return (
    <article id="stashgrid" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600
                          flex items-center justify-center shadow-lg shadow-brand-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">StashGrid</h2>
            <p className="text-slate-400 text-sm mt-0.5">Full-stack grocery system + physical kiosk</p>
          </div>
        </div>
        <a href="https://github.com/erickson-devin/stashgrid" target="_blank" rel="noreferrer"
          id="stashgrid-github-projects-link" className="btn-ghost text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.31 9.42 7.9 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.3-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.74.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.19 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" />
          </svg>
          GitHub
        </a>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>

      {/* Overview */}
      <div className="card">
        <p className="section-label">Overview</p>
        <p className="text-slate-300 leading-relaxed text-sm">
          StashGrid started as a simple shopping list and evolved into a full-stack system
          with a Flask backend, a React frontend, and a dedicated hardware interface that
          sits on the kitchen counter like a purpose-built appliance.
        </p>
      </div>

      {/* Section 1 */}
      <div className="card">
        <SectionDivider number={1} title="Dynamic Store Assignments" />
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            The dynamic store assignment system maps each grocery item to one or more
            preferred store locations. When you add an item, StashGrid suggests the best
            store based on saved preferences, historical purchase data, and availability.
            Items can be reassigned on the fly if a store is out of stock.
          </p>
          <p>
            A lightweight SQLite schema tracks store metadata, item–store relationships,
            and assignment history. The Flask API exposes endpoints for querying and
            updating assignments, keeping the frontend fully decoupled.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="card">
        <SectionDivider number={2} title="Shopping List Features" />
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            Items are grouped by store, sorted by aisle, and prioritized so time-sensitive
            purchases surface to the top. Users can add items by name or barcode, attach
            notes, set a quantity, and mark items as recurring so they reappear automatically
            on the next list.
          </p>
          <p>
            The React frontend keeps list state optimistically updated — changes appear
            instantly while the API call fires in the background, giving the feel of a
            native app even over a local Wi-Fi connection.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="card">
        <SectionDivider number={3} title="Custom Physical Kiosk Display" />
        <div className="flex flex-wrap gap-3 mb-5">
          {[
            { label: 'Compute', value: 'Raspberry Pi 3B', color: 'text-emerald-400' },
            { label: 'Display', value: 'Elecrow 5" HDMI Touch', color: 'text-violet-400' },
            { label: 'OS', value: 'RPi OS Lite', color: 'text-brand-400' },
            { label: 'Service', value: 'systemd unit (autostart)', color: 'text-amber-400' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-3 flex flex-col gap-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{label}</span>
              <span className={`text-sm font-semibold ${color}`}>{value}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <p>
            The Pi boots into Raspberry Pi OS Lite, launches Chromium in kiosk mode via a{' '}
            <code className="font-mono text-brand-300 bg-brand-950/50 px-1.5 py-0.5 rounded text-xs">systemd</code>{' '}
            service unit, and points it at the local Flask server — the entire system runs
            self-contained on a single $35 board.
          </p>
          <p>
            The touch UI is optimized for the 5-inch form factor: large tap targets,
            high-contrast text, landscape layout. Tapping an item checks it off via the same
            REST API the web UI uses — changes sync everywhere instantly.
          </p>
        </div>
      </div>
    </article>
  )
}

function FutureProjectCard({ number }) {
  return (
    <div className="card border-dashed opacity-40 flex flex-col items-center justify-center
                    min-h-[140px] gap-2 cursor-default">
      <span className="font-mono text-xs text-slate-600">Project {number} — Coming soon</span>
      <div className="w-7 h-7 rounded-full border border-dashed border-slate-700
                      flex items-center justify-center text-slate-700">+</div>
    </div>
  )
}

function CaseStudiesTab() {
  return (
    <div>
      <p className="section-label mb-6">Featured Case Study</p>
      <StashGridCaseStudy />
      <div className="mt-12">
        <p className="section-label mb-4">More Projects</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FutureProjectCard number={2} />
          <FutureProjectCard number={3} />
        </div>
      </div>
    </div>
  )
}

/* ─── Tab 2 — Experiments ────────────────────────────────── */

function ExperimentsTab() {
  return (
    <div className="space-y-8">
      <div>
        <p className="section-label">Lab Work</p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
          Interactive experiments originally built during coursework — each one ported
          to React and living in the portfolio as working demos of core web fundamentals.
        </p>
      </div>
      <CssManipulationExperiment />
      <JavaScriptToolsExperiment />
      <JewelClickerExperiment />
    </div>
  )
}

/* ─── Tab 3 — Visualizations ─────────────────────────────── */

function VisualizationsTab() {
  return (
    <div className="space-y-8">
      <div>
        <p className="section-label">Visualizations</p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
          Creative coding experiments — an interactive US states map, a p5.js rain
          animation ported to raw canvas, and a real-time planetary orbit.
        </p>
      </div>
      <UsMapVisualization />
      <PurpleRainVisualization />
      <OrbitVisualization />
    </div>
  )
}

/* ─── Page: Projects ─────────────────────────────────────── */

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="mb-10 animate-fade-up">
          <p className="section-label">Portfolio</p>
          <h1 className="text-4xl font-extrabold text-white mb-3">Projects</h1>
          <p className="text-slate-400 leading-relaxed max-w-xl text-sm">
            Case studies, interactive experiments, and creative visualizations — spanning
            full-stack apps, hardware builds, and canvas animations.
          </p>
          <Link to="/dev" className="inline-flex items-center gap-2 mt-4 text-sm text-brand-400
                                   hover:text-brand-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Tabbed content */}
        <ProjectTabs>
          <TabPanel tabId="case-studies"><CaseStudiesTab /></TabPanel>
          <TabPanel tabId="experiments"><ExperimentsTab /></TabPanel>
          <TabPanel tabId="visualizations"><VisualizationsTab /></TabPanel>
        </ProjectTabs>
      </div>
    </div>
  )
}
