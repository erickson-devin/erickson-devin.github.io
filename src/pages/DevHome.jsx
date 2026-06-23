import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  IconArrowRight, IconMail, IconGitHub, IconGrid,
  IconStore, IconCart, IconMonitor
} from '../components/Icons'

/* ─── Tiny sub-components ────────────────────────────────── */

const PulseDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
  </span>
)

const FeaturePill = ({ children }) => (
  <span className="tag">{children}</span>
)

const ProjectHighlight = ({ icon, children }) => (
  <li className="flex items-start gap-3 text-sm text-slate-400">
    <span className="mt-0.5 text-brand-400 shrink-0">{icon}</span>
    <span>{children}</span>
  </li>
)

/* ─── Back-to-author link ────────────────────────────────── */
function BackToAuthor() {
  return (
    <div
      className="border-b border-surface-border px-6 py-2.5 flex items-center"
      style={{ background: '#070a12' }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <Link
          to="/"
          id="dev-back-to-author"
          className="inline-flex items-center gap-2 text-xs font-mono text-surface-muted/50
                     hover:text-brand-400 transition-colors duration-300 ease-spring"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Author site
        </Link>
      </div>
    </div>
  )
}

/* ─── Section: Hero ──────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="dev-hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden px-6"
    >
      {/* Background ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-600/15 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-800/10 blur-[120px] animate-pulse-slow animate-delay-300" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* ── Left col: text ── */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-medium">
            <PulseDot />
            Open to opportunities
          </div>

          <div>
            <p className="section-label">Hello, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none">
              <span className="gradient-text">Devin</span>{' '}
              <span className="text-white">Erickson</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-[50ch]">
            Cybersecurity professional, tinkerer, and builder of things — from web
            apps to Raspberry Pi kiosk displays.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link to="/dev/projects" id="dev-cta-view-work" className="btn-primary">
              <IconArrowRight size={16} />
              View my work
            </Link>
            <a
              href="mailto:devin@devinerickson.com"
              id="dev-cta-get-in-touch"
              className="btn-ghost"
            >
              <IconMail size={16} />
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/erickson-devin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-600 hover:text-white transition-colors duration-300"
            >
              <IconGitHub size={18} />
            </a>
            <span className="text-surface-muted/40 text-xs font-mono">
              erickson-devin.github.io
            </span>
          </div>
        </div>

        {/* ── Right col: photo ── */}
        <HeroPhoto />
      </div>
    </section>
  )
}

function HeroPhoto() {
  return (
    <div className="hidden lg:flex justify-center items-center animate-fade-up animate-delay-200">
      <div className="relative">
        {/* Glow */}
        <div className="absolute -inset-4 rounded-3xl bg-brand-500/15 blur-3xl" />
        {/* Image container (double-bezel) */}
        <div className="relative bg-surface-raised/60 border border-surface-border rounded-[1.5rem] p-1.5">
          <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden shadow-2xl shadow-black/50 w-72 h-80">
            <img
              src="/assets/Erickson_Fam_2017.jpg"
              alt="Devin Erickson"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/80 to-transparent" />
          </div>
        </div>
        {/* Floating badges */}
        <div className="absolute -bottom-4 -left-4 bg-surface-card px-4 py-2 rounded-xl text-xs font-mono border border-brand-600/30 shadow-xl shadow-brand-900/20 flex items-center gap-2">
          <span className="text-brand-400">{'<'}</span>
          <span className="text-slate-300">Developer</span>
          <span className="text-brand-400">{'/>'}</span>
        </div>
        <div className="absolute -top-4 -right-4 bg-surface-card px-3 py-2 rounded-xl text-xs font-mono border border-brand-600/30 shadow-xl shadow-brand-900/20 flex items-center gap-2">
          <span className="text-brand-400">&#9632;</span>
          <span className="text-slate-300">Builder</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Section: StashGrid Featured Preview ────────────────── */
function StashGridPreview() {
  const ref = useScrollReveal()

  const highlights = [
    { icon: <IconStore size={16} />, text: 'Dynamic store assignments — intelligently maps products to the right store location in real time.' },
    { icon: <IconCart size={16} />, text: 'Smart shopping list features — add, prioritize, and track items across multiple grocery runs.' },
    { icon: <IconMonitor size={16} />, text: 'Custom kiosk display powered by a Raspberry Pi 3B and an Elecrow 5\u2033 HDMI touchscreen — a physical in-store interface built from scratch.' },
  ]

  const tags = ['Python', 'Flask', 'Raspberry Pi', 'React', 'SQLite', 'Linux']

  return (
    <section id="dev-featured-project" className="py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto scroll-reveal">
        <p className="section-label">Featured project</p>
        <h2 className="text-3xl font-bold text-white mb-12">
          A closer look at <span className="gradient-text">StashGrid</span>
        </h2>

        {/* Double-bezel card */}
        <div className="card-featured group hover:border-brand-600/40 transition-all duration-500 ease-spring shadow-xl shadow-black/20">
          <div className="card-featured-inner p-0 overflow-hidden">
            <div className="h-0.5 bg-gradient-to-r from-brand-600 to-brand-400" />

            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 p-8 flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20">
                        <IconGrid size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">StashGrid</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                      A full-stack grocery management system with dynamic store routing,
                      smart shopping lists, and a custom-built physical kiosk interface.
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {highlights.map((h, i) => (
                    <ProjectHighlight key={i} icon={h.icon}>{h.text}</ProjectHighlight>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {tags.map(tag => <FeaturePill key={tag}>{tag}</FeaturePill>)}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Link to="/dev/projects#stashgrid" id="dev-stashgrid-case-study-link" className="btn-primary text-sm px-5 py-2.5">
                    Read case study
                    <IconArrowRight size={14} />
                  </Link>
                  <a
                    href="https://github.com/erickson-devin/stashgrid"
                    target="_blank"
                    rel="noreferrer"
                    id="dev-stashgrid-github-link"
                    className="btn-ghost text-sm px-5 py-2.5"
                  >
                    <IconGitHub size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Kiosk illustration */}
              <div className="lg:col-span-2 bg-gradient-to-br from-surface-raised to-surface flex items-center justify-center p-10 border-l border-surface-border min-h-[260px]">
                <div className="text-center">
                  <div className="mx-auto w-32 h-44 rounded-xl border-2 border-brand-600/40 bg-surface shadow-lg shadow-brand-900/10 flex flex-col overflow-hidden">
                    <div className="h-5 bg-brand-950/60 flex items-center gap-1 px-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 p-2 flex flex-col gap-1.5">
                      {['Produce', 'Dairy', 'Bakery', 'Frozen'].map(row => (
                        <div key={row} className="h-5 rounded flex items-center gap-1 bg-brand-950/40 px-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                          <span className="text-[7px] font-mono text-brand-300">{row}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-mono text-surface-muted">RPi 3B &middot; Elecrow 5&quot;</p>
                  <p className="text-[10px] text-surface-muted/50 mt-1">Custom kiosk display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page: DevHome ──────────────────────────────────────── */
export default function DevHome() {
  return (
    <>
      <title>Devin Erickson — Developer Portfolio</title>
      <meta
        name="description"
        content="Devin Erickson's developer portfolio. Cybersecurity professional, full-stack builder, and hardware tinkerer."
      />
      <BackToAuthor />
      <HeroSection />
      <StashGridPreview />
    </>
  )
}
