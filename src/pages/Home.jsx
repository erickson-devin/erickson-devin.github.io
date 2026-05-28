import { Link } from 'react-router-dom'

/* ─── Tiny sub-components ────────────────────────────────── */

/** Animated dot used in the "available" badge */
const PulseDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
  </span>
)

/** StashGrid project feature pill */
const FeaturePill = ({ children }) => (
  <span className="tag">{children}</span>
)

/** Individual highlight point in the StashGrid card */
const ProjectHighlight = ({ icon, children }) => (
  <li className="flex items-start gap-3 text-sm text-slate-400">
    <span className="mt-0.5 text-brand-400 shrink-0">{icon}</span>
    <span>{children}</span>
  </li>
)

/* ─── Section: Hero ──────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full
                        bg-brand-600/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-violet-600/15 blur-[100px] animate-pulse-slow animate-delay-300" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24">
        {/* ── Left col: text ── */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full
                          border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
            <PulseDot />
            Open to opportunities
          </div>

          {/* Name / headline */}
          <div>
            <p className="section-label">Hello, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="gradient-text">Devin</span>{' '}
              <span className="text-white">Erickson</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-md">
            Cybersecurity Professional, tinkerer, and builder of things — from web
            apps to Raspberry Pi kiosk displays.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <Link to="/projects" id="cta-view-work" className="btn-primary">
              {/* Arrow right icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              View My Work
            </Link>
            <a
              href="mailto:devin@erickson-devin.github.io"
              id="cta-get-in-touch"
              className="btn-ghost"
            >
              {/* Mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/erickson-devin"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.31 9.42 7.9 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.3-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.74.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.19 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <span className="text-slate-700 text-xs font-mono">
              erickson-devin.github.io
            </span>
          </div>
        </div>

        {/* ── Right col: headshot / photo ── */}
        <HeroPhoto />
      </div>
    </section>
  )
}

/** Hero photo card using the existing Erickson_Fam_2017.jpg asset */
function HeroPhoto() {
  return (
    <div className="hidden lg:flex justify-center items-center animate-fade-up animate-delay-200">
      <div className="relative">
        {/* Glow ring behind photo */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/30 to-violet-500/30 blur-2xl" />

        {/* Photo frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10
                        shadow-2xl shadow-black/50 w-72 h-80">
          <img
            src="/assets/Erickson_Fam_2017.jpg"
            alt="Devin Erickson"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3
                          bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
        </div>

        {/* Floating badge — bottom left */}
        <div className="absolute -bottom-4 -left-4 card px-4 py-2 rounded-xl text-xs font-mono
                        border-brand-500/30 shadow-xl flex items-center gap-2">
          <span className="text-brand-400">{'<'}</span>
          <span className="text-slate-300">Developer</span>
          <span className="text-brand-400">{'/>'}</span>
        </div>

        {/* Floating badge — top right */}
        <div className="absolute -top-4 -right-4 card px-3 py-2 rounded-xl text-xs font-mono
                        border-violet-500/30 shadow-xl flex items-center gap-2">
          <span className="text-violet-400">⌘</span>
          <span className="text-slate-300">Builder</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Section: StashGrid Featured Preview ────────────────── */
function StashGridPreview() {
  const highlights = [
    {
      icon: '🏪',
      text: 'Dynamic store assignments — intelligently maps products to the right store location in real time.',
    },
    {
      icon: '🛒',
      text: 'Smart shopping list features — add, prioritize, and track items across multiple grocery runs.',
    },
    {
      icon: '📟',
      text: 'Custom kiosk display powered by a Raspberry Pi 3B and an Elecrow 5" HDMI touchscreen — a physical in-store interface built from scratch.',
    },
  ]

  const tags = ['Python', 'Flask', 'Raspberry Pi', 'React', 'SQLite', 'Linux']

  return (
    <section id="featured-project" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Featured Project</p>
        <h2 className="text-3xl font-bold text-white mb-12">
          A closer look at <span className="gradient-text">StashGrid</span>
        </h2>

        {/* Card */}
        <div className="card rounded-2xl p-0 overflow-hidden group
                        hover:border-brand-500/60 transition-all duration-300
                        shadow-xl shadow-black/20">

          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-brand-500 to-violet-500" />

          <div className="grid lg:grid-cols-5 gap-0">
            {/* ── Left: info ── */}
            <div className="lg:col-span-3 p-8 flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {/* Grid icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-600
                                    flex items-center justify-center text-white text-lg shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">StashGrid</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    A full-stack grocery management system with dynamic store routing,
                    smart shopping lists, and a custom-built physical kiosk interface.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-4">
                {highlights.map((h, i) => (
                  <ProjectHighlight key={i} icon={h.icon}>{h.text}</ProjectHighlight>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map(tag => (
                  <FeaturePill key={tag}>{tag}</FeaturePill>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/projects#stashgrid"
                  id="stashgrid-case-study-link"
                  className="btn-primary text-sm px-5 py-2.5"
                >
                  Read Case Study →
                </Link>
                <a
                  href="https://github.com/erickson-devin/stashgrid"
                  target="_blank"
                  rel="noreferrer"
                  id="stashgrid-github-link"
                  className="btn-ghost text-sm px-5 py-2.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.31 9.42 7.9 10.95.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.3-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.95 10.95 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.74.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.19 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* ── Right: visual panel ── */}
            <div className="lg:col-span-2 bg-gradient-to-br from-brand-950/80 to-[#0f172a]
                            flex items-center justify-center p-10 border-l border-[#334155]
                            min-h-[260px]">
              {/* Decorative kiosk / terminal illustration */}
              <div className="text-center">
                <div className="mx-auto w-32 h-44 rounded-xl border-2 border-brand-500/40
                                bg-[#0f172a] shadow-lg shadow-brand-500/10 flex flex-col overflow-hidden">
                  {/* Screen top bar */}
                  <div className="h-5 bg-brand-900/60 flex items-center gap-1 px-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                  </div>
                  {/* Screen content mock */}
                  <div className="flex-1 p-2 flex flex-col gap-1.5">
                    {['Produce', 'Dairy', 'Bakery', 'Frozen'].map(row => (
                      <div key={row} className="h-5 rounded flex items-center gap-1 bg-brand-900/40 px-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                        <span className="text-[7px] font-mono text-brand-300">{row}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-xs font-mono text-slate-500">
                  RPi 3B · Elecrow 5&quot;
                </p>
                <p className="text-[10px] text-slate-600 mt-1">
                  Custom kiosk display
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page: Home ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <StashGridPreview />
    </>
  )
}
