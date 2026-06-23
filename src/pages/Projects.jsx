import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import ProjectTabs, { TabPanel } from '../components/ProjectTabs'
import { CssManipulationExperiment } from '../components/experiments/CssManipulation'
import { JavaScriptToolsExperiment } from '../components/experiments/JavaScriptTools'
import { JewelClickerExperiment } from '../components/experiments/JewelClicker'
import { SnakeGameExperiment } from '../components/experiments/SnakeGame'
import { UsMapVisualization } from '../components/visualizations/UsMap'
import { PurpleRainVisualization } from '../components/visualizations/PurpleRain'
import { OrbitVisualization } from '../components/visualizations/Orbit'
import {
  IconArrowLeft, IconGitHub, IconGrid, IconArrowRight
} from '../components/Icons'

/* ─── Shared helpers ─────────────────────────────────────── */

const Tag = ({ children }) => <span className="tag">{children}</span>

const SectionDivider = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-xs text-brand-400 bg-brand-950/80 border border-brand-800/50 px-2 py-0.5 rounded">
      {String(number).padStart(2, '0')}
    </span>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="flex-1 h-px bg-surface-border" />
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
          <div className="w-14 h-14 rounded-2xl bg-brand-600
                          flex items-center justify-center shadow-lg shadow-brand-600/20">
            <IconGrid size={28} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">StashGrid</h2>
            <p className="text-slate-400 text-sm mt-0.5">Full-stack grocery system + physical kiosk</p>
          </div>
        </div>
        <a href="https://github.com/erickson-devin/stashgrid" target="_blank" rel="noreferrer"
          id="stashgrid-github-projects-link" className="btn-ghost text-sm">
          <IconGitHub size={16} />
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
        <SectionDivider number={1} title="Dynamic store assignments" />
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
        <SectionDivider number={2} title="Shopping list features" />
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
        <SectionDivider number={3} title="Custom physical kiosk display" />
        <div className="flex flex-wrap gap-3 mb-5">
          {[
            { label: 'Compute', value: 'Raspberry Pi 3B', color: 'text-brand-400' },
            { label: 'Display', value: 'Elecrow 5\u2033 HDMI Touch', color: 'text-brand-300' },
            { label: 'OS', value: 'RPi OS Lite', color: 'text-brand-400' },
            { label: 'Service', value: 'systemd unit (autostart)', color: 'text-brand-300' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-surface border border-surface-border rounded-xl px-4 py-3 flex flex-col gap-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-surface-muted">{label}</span>
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

function CaseStudiesTab() {
  return (
    <div>
      <p className="section-label mb-6">Featured case study</p>
      <StashGridCaseStudy />
    </div>
  )
}

/* ─── Tab 2 — Experiments ────────────────────────────────── */

function ExperimentsTab() {
  return (
    <div className="space-y-8">
      <div>
        <p className="section-label">Lab work</p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
          Interactive experiments originally built during coursework — each one ported
          to React and living in the portfolio as working demos of core web fundamentals.
        </p>
      </div>
      <CssManipulationExperiment />
      <JavaScriptToolsExperiment />
      <JewelClickerExperiment />
      <SnakeGameExperiment />
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
  const headerRef = useScrollReveal()

  return (
    <div className="min-h-[100dvh] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div ref={headerRef} className="mb-10 scroll-reveal">
          <p className="section-label">Portfolio</p>
          <h1 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Projects</h1>
          <p className="text-slate-400 leading-relaxed max-w-xl text-sm">
            Case studies, interactive experiments, and creative visualizations — spanning
            full-stack apps, hardware builds, and canvas animations.
          </p>
          <Link to="/dev" className="inline-flex items-center gap-2 mt-4 text-sm text-brand-400
                                   hover:text-brand-300 transition-colors duration-200">
            <IconArrowLeft size={16} />
            Back to home
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
