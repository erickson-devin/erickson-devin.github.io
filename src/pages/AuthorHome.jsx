import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IconBolt } from '../components/Icons'

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useIntersect(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.12, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Floating wind particles ────────────────────────────────── */
function WindParticles({ count = 25 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5,
    delay: `${Math.random() * 10}s`,
    duration: `${Math.random() * 12 + 8}s`,
    opacity: Math.random() * 0.4 + 0.05,
  }))
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left, top: p.top,
            width: `${p.size}px`, height: `${p.size}px`,
            opacity: p.opacity,
            background: '#6ea8e0',
            animationName: 'drift',
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      ))}
    </div>
  )
}

/* ─── RuneDivider ────────────────────────────────────────────── */
function RuneDivider({ color = '#6ea8e0' }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-4 my-3">
      <div className="flex-1 h-px opacity-25" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="14" cy="14" r="2" fill={color} opacity="0.8" />
      </svg>
      <div className="flex-1 h-px opacity-25" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  )
}

/* ─── Section: Hero ──────────────────────────────────────────── */
function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const h = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <section
      id="author-hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: '#080c10' }}
    >
      {/* Parallax background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/bleak_hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: `translateY(${scrollY * 0.25}px)`,
          filter: 'brightness(0.25) saturate(0.6)',
          willChange: 'transform',
        }}
      />

      {/* Gradient overlays */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/50 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080c10]/90 via-transparent to-[#080c10]/70" />

      {/* Storm glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, transparent 70%)' }}
      />

      <WindParticles />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center px-6 pt-32 pb-28 lg:py-32">

        {/* ── Book cover ── */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last animate-fade-in">
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-2xl blur-3xl opacity-35"
              style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, #1a4f8a 60%, transparent 80%)' }}
            />
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/70 border border-[#1e2d3d]"
              style={{ width: 260, height: 390 }}
            >
              {/* Placeholder — author will add real cover art */}
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(160deg, #0a1520 0%, #080c10 100%)', border: '1px solid rgba(110,168,224,0.15)' }}
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2f6fb5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <span
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: '#4a8fd1', opacity: 0.5 }}
                >
                  Cover Art Coming Soon
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border text-xs font-mono font-semibold"
              style={{
                background: 'rgba(8,12,16,0.95)',
                borderColor: '#4a8fd1',
                color: '#9dc4ec',
                boxShadow: '0 0 20px rgba(74,143,209,0.25)',
              }}
            >
              <IconBolt size={12} /> Coming Soon
            </div>
          </div>
        </div>

        {/* ── Title & CTAs ── */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] flex items-center gap-2"
            style={{ color: '#4a8fd1' }}
          >
            <span className="inline-block w-8 h-px" style={{ background: '#2f6fb5' }} />
            An Epic Post-Apocalyptic Fantasy
            <span className="inline-block w-8 h-px" style={{ background: '#2f6fb5' }} />
          </p>

          <div>
            <h1
              className="font-black leading-none tracking-wider"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                background: 'linear-gradient(135deg, #c8dff5 0%, #6ea8e0 40%, #9dc4ec 70%, #d4a96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 25px rgba(110,168,224,0.35))',
              }}
            >
              BLEAK
            </h1>
            <p
              className="text-xl sm:text-2xl tracking-[0.2em] uppercase mt-1"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                color: '#d4a96a',
                textShadow: '0 0 18px rgba(212,169,106,0.4)',
              }}
            >
              The Last Storm
            </p>
          </div>

          <RuneDivider />

          <blockquote
            className="text-lg sm:text-xl leading-relaxed italic"
            style={{ color: '#9dc4ec', textShadow: '0 0 12px rgba(157,196,236,0.15)' }}
          >
            &ldquo;The wind knows your name.{' '}
            <span style={{ color: '#c8dff5' }}>You just have to listen.</span>&rdquo;
          </blockquote>

          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              to="/book"
              id="hero-cta-explore"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,143,209,0.5)]"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #2f6fb5 0%, #4a8fd1 50%, #6ea8e0 100%)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(74,143,209,0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Explore the World
            </Link>
            <a
              href="https://forms.gle/1iutuBPuybrk81K99"
              id="hero-cta-mailing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                letterSpacing: '0.04em',
                border: '1.5px solid rgba(110,168,224,0.4)',
                color: '#9dc4ec',
                background: 'rgba(74,143,209,0.07)',
              }}
            >
              Stay in the Storm →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35">
        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: '#6ea8e0' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6ea8e0] to-transparent animate-pulse" />
      </div>
    </section>
  )
}

/* ─── Section: Book Progress ─────────────────────────────────── */

// ── Update this number whenever the revision phase advances ──────
const REVISION_PROGRESS = 12 // percent (0–100)

function BookProgressSection() {
  const [ref, visible] = useIntersect()

  const milestones = [
    { label: 'First Draft', status: 'complete', icon: '✦' },
    { label: 'Revision & Updates', status: 'in-progress', icon: <IconBolt size={14} />, progress: REVISION_PROGRESS },
    { label: 'Beta Readers', status: 'upcoming', icon: '◈' },
    { label: 'Query / Publish', status: 'upcoming', icon: '◇' },
  ]

  const statusColors = {
    complete: { color: '#6ea8e0', bg: 'rgba(74,143,209,0.12)', border: 'rgba(110,168,224,0.35)' },
    'in-progress': { color: '#d4a96a', bg: 'rgba(212,169,106,0.1)', border: 'rgba(212,169,106,0.4)' },
    upcoming: { color: '#4a5568', bg: 'rgba(74,85,104,0.06)', border: 'rgba(74,85,104,0.2)' },
  }

  return (
    <section
      id="book-progress"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080c10 0%, #0a1018 60%, #080c10 100%)' }}
    >
      {/* Ochre glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c49a52 0%, transparent 70%)' }}
      />

      <div
        className="max-w-4xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        <div className="text-center mb-14">
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2"
            style={{ color: '#4a8fd1' }}
          >
            <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
            The Journey
            <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
          </p>
          <h2
            className="font-bold text-3xl sm:text-4xl mb-4"
            style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
          >
            Where We Are
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#78716c' }}>
            Writing a book is a long storm to weather. Here&apos;s a look at where{' '}
            <span style={{ color: '#9dc4ec' }}>BLEAK: The Last Storm</span> currently stands on its journey to your hands.
          </p>
        </div>

        {/* Progress milestones */}
        <div className="relative">
          <div className="flex flex-col gap-5">
            {milestones.map((m, i) => {
              const s = statusColors[m.status]
              const isInProgress = m.status === 'in-progress'
              const pct = m.progress ?? 0

              return (
                <div
                  key={m.label}
                  className="relative rounded-2xl overflow-hidden transition-all duration-500"
                  style={{
                    border: `1px solid ${s.border}`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'none' : 'translateX(-20px)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {/* ── Background fill layer ── */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: s.bg }}
                  />
                  {/* Progress fill gradient — only for in-progress */}
                  {isInProgress && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none transition-all duration-[1400ms] ease-out"
                      style={{
                        background: `linear-gradient(
                          90deg,
                          rgba(212,169,106,0.18) 0%,
                          rgba(212,169,106,0.10) ${pct * 0.8}%,
                          transparent ${pct}%
                        )`,
                        clipPath: visible
                          ? `inset(0 ${100 - pct}% 0 0 round 1rem)`
                          : 'inset(0 100% 0 0 round 1rem)',
                      }}
                    />
                  )}

                  {/* ── Card content ── */}
                  <div className="relative z-10 flex items-center gap-5 px-6 py-5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0"
                      style={{
                        background: s.bg,
                        border: `1.5px solid ${s.color}`,
                        color: s.color,
                        boxShadow: m.status !== 'upcoming' ? `0 0 16px ${s.bg}` : 'none',
                      }}
                    >
                      {m.icon}
                    </div>

                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <span
                        className="font-semibold text-sm"
                        style={{ fontFamily: "'Cinzel', Georgia, serif", color: s.color }}
                      >
                        {m.label}
                      </span>

                      {isInProgress ? (
                        <div className="flex items-center gap-2.5 mt-0.5">
                          <div
                            className="relative h-1.5 rounded-full overflow-hidden"
                            style={{
                              background: 'rgba(212,169,106,0.12)',
                              flex: '1 1 0%',
                              maxWidth: '240px',
                            }}
                          >
                            <div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{
                                width: visible ? `${pct}%` : '0%',
                                transition: 'width 1.4s ease-out',
                                background: 'linear-gradient(90deg, #c49a52, #d4a96a, #e8c07a)',
                                boxShadow: '0 0 8px rgba(212,169,106,0.55)',
                              }}
                            />
                          </div>
                          <span
                            className="text-xs font-mono shrink-0 tabular-nums"
                            style={{ color: '#d4a96a', opacity: 0.85 }}
                          >
                            {pct}%
                          </span>
                        </div>
                      ) : (
                        <span
                          className="text-xs font-mono uppercase tracking-widest"
                          style={{ color: m.status === 'upcoming' ? '#4a5568' : s.color, opacity: 0.7 }}
                        >
                          {m.status === 'complete' ? 'Complete' : 'Upcoming'}
                        </span>
                      )}
                    </div>

                    {isInProgress && (
                      <div
                        className="shrink-0 text-xs font-mono px-3 py-1 rounded-full"
                        style={{
                          background: 'rgba(212,169,106,0.12)',
                          border: '1px solid rgba(212,169,106,0.3)',
                          color: '#d4a96a',
                        }}
                      >
                        Active
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Genre', value: 'Epic Fantasy / Sci-Fi' },
            { label: 'Status', value: 'Revision Phase' },
            { label: 'Target Release', value: 'TBD' },
          ].map(stat => (
            <div
              key={stat.label}
              className="rounded-2xl px-5 py-4 text-center"
              style={{
                background: 'rgba(22,30,40,0.5)',
                border: '1px solid rgba(110,168,224,0.12)',
              }}
            >
              <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: '#4a8fd1', opacity: 0.6 }}>
                {stat.label}
              </p>
              <p className="text-sm font-semibold" style={{ color: '#9dc4ec' }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: About the Author Teaser ──────────────────────── */
function AuthorTeaserSection() {
  const [ref, visible] = useIntersect()

  return (
    <section
      id="author-teaser"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#080c10', borderTop: '1px solid rgba(110,168,224,0.08)' }}
    >
      {/* Storm glow bottom-left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2f6fb5 0%, transparent 70%)' }}
      />

      <div
        className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        {/* Author photo placeholder */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
              style={{ background: 'radial-gradient(ellipse, #4a8fd1, transparent)' }}
            />
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                width: 280,
                height: 340,
                background: 'linear-gradient(160deg, #0d1a28 0%, #080c10 100%)',
                border: '1px solid rgba(110,168,224,0.15)',
              }}
            >
              {/* Photo placeholder */}
              <div className="flex flex-col items-center gap-3 text-center px-8">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2f6fb5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: '#4a8fd1', opacity: 0.45 }}>
                  Author Photo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div className="flex flex-col gap-6">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-[0.3em] mb-3 flex items-center gap-2"
              style={{ color: '#4a8fd1' }}
            >
              <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
              The Author
            </p>
            <h2
              className="font-bold text-3xl sm:text-4xl mb-2"
              style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
            >
              Devin Erickson
            </h2>
            <RuneDivider />
          </div>

          <p className="text-base leading-[1.9]" style={{ color: '#a8a29e' }}>
            Devin Erickson is an father, hobbyist, and lifelong dreamer from the United States.
            When a story idea about{' '}
            <span style={{ color: '#9dc4ec' }}>what the world would look like if the sun was covered to look barely brighter than the moon</span>{' '}
            wouldn&apos;t leave him alone, he sat down and started writing.{' '}
            <em style={{ color: '#c8dff5' }}>BLEAK: The Last Storm</em> is the result — a
            post-apocalyptic epic fantasy years in the making.
          </p>

          <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
            Follow along on Instagram for behind-the-scenes writing updates, lore drops,
            and peaks into the chaos of bringing a world to life for a father of 4.
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              to="/author"
              id="teaser-cta-author"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                letterSpacing: '0.04em',
                border: '1.5px solid rgba(110,168,224,0.35)',
                color: '#9dc4ec',
                background: 'rgba(74,143,209,0.07)',
              }}
            >
              About the Author →
            </Link>
            <a
              href="https://www.instagram.com/dericksonwrites/"
              target="_blank"
              rel="noreferrer"
              id="teaser-cta-instagram"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                color: '#6ea8e0',
                background: 'rgba(74,143,209,0.05)',
                border: '1.5px solid rgba(110,168,224,0.15)',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @dericksonwrites
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Mailing List Footer ──────────────────────────── */
function MailingFooterSection() {
  const [ref, visible] = useIntersect()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@')) { setStatus('error'); return }
    setStatus('sent')
    setEmail('')
  }

  return (
    <section
      id="home-newsletter"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080c10 0%, #050810 100%)',
        borderTop: '1px solid rgba(110,168,224,0.08)',
      }}
    >
      <div
        className="max-w-2xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)' }}
      >
        <p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2"
          style={{ color: '#4a8fd1' }}
        >
          <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
          The Storm is Approaching
          <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
        </p>
        <h2
          className="font-bold text-2xl sm:text-3xl mb-3"
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
        >
          Hear the Wind First
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: '#78716c' }}>
          Sign up for release announcements, lore drops, and updates.{' '}
          <span style={{ color: '#6ea8e0' }}>No spam — just the storm.</span>
        </p>

        {status === 'sent' ? (
          <div
            className="py-5 px-8 rounded-2xl"
            style={{ background: 'rgba(74,143,209,0.08)', border: '1px solid rgba(110,168,224,0.25)' }}
          >
            <p className="text-[#9dc4ec]" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
              ✦ The wind has heard you. ✦
            </p>
            <p className="text-xs text-[#78716c] mt-2">You&apos;ll be among the first to know when the storm breaks.</p>
          </div>
        ) : (
          <form id="home-newsletter-form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              id="home-email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 max-w-xs px-5 py-3.5 rounded-xl text-sm font-mono outline-none transition-all duration-300"
              style={{
                background: 'rgba(22,30,40,0.8)',
                border: `1px solid ${status === 'error' ? '#dc2626' : 'rgba(110,168,224,0.25)'}`,
                color: '#c8dff5',
              }}
            />
            <button
              id="home-newsletter-submit"
              type="submit"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                background: 'linear-gradient(135deg, #2f6fb5, #4a8fd1)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(74,143,209,0.2)',
              }}
            >
              Join the Colony →
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-2 text-xs text-red-400 font-mono">Please enter a valid email address.</p>
        )}

        {/* Footer line */}
        <div
          className="mt-12 pt-8 text-xs font-mono flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(110,168,224,0.08)', color: '#44403c' }}
        >
          <span style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#2f6fb5', fontWeight: 600 }}>
            BLEAK: The Last Storm
          </span>
          <a href="mailto:devin@devinerickson.com" className="transition-colors hover:text-[#6ea8e0]" style={{ color: '#2f6fb5' }}>
            devin@devinerickson.com
          </a>
          <span>© 2026 Devin Erickson</span>
        </div>
      </div>
    </section>
  )
}

/* ─── Page: AuthorHome ───────────────────────────────────────── */
export default function AuthorHome() {
  return (
    <div style={{ background: '#080c10', color: '#d6d3d1' }} className="relative">
      <title>Devin Erickson — Author of BLEAK: The Last Storm</title>
      <meta
        name="description"
        content="Official author site for Devin Erickson. Explore BLEAK: The Last Storm — an epic post-apocalyptic fantasy about wind magic, alien invasion, and a dying world."
      />

      <HeroSection />
      <BookProgressSection />
      <AuthorTeaserSection />
      <MailingFooterSection />
    </div>
  )
}
