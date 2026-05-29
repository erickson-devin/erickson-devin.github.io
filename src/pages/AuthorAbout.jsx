import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─── Font injection ─────────────────────────────────────────── */
function useCinzelFont() {
  useEffect(() => {
    const id = 'cinzel-font-link'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id   = id
      link.rel  = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&display=swap'
      document.head.appendChild(link)
    }
  }, [])
}

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

/* ─── RuneDivider ────────────────────────────────────────────── */
function RuneDivider({ color = '#6ea8e0' }) {
  return (
    <div aria-hidden="true" className="flex items-center gap-4 my-3">
      <div className="flex-1 h-px opacity-20" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="14" cy="14" r="2" fill={color} opacity="0.7" />
      </svg>
      <div className="flex-1 h-px opacity-20" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  )
}

/* ─── Hero header ────────────────────────────────────────────── */
function AuthorHero() {
  return (
    <section
      id="author-about-hero"
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{ background: '#080c10' }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full opacity-12 blur-[90px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <p
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2"
          style={{ color: '#4a8fd1' }}
        >
          <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
          Meet the Author
          <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
        </p>
        <h1
          className="font-black leading-tight mb-3"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            background: 'linear-gradient(135deg, #c8dff5 0%, #6ea8e0 60%, #9dc4ec 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Devin Erickson
        </h1>
        <p
          className="text-sm uppercase tracking-[0.2em]"
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#d4a96a' }}
        >
          Author · Builder · Dreamer
        </p>
        <RuneDivider />
      </div>
    </section>
  )
}

/* ─── Bio section ────────────────────────────────────────────── */
function BioSection() {
  const [ref, visible] = useIntersect()

  return (
    <section
      id="author-bio"
      ref={ref}
      className="relative py-16 px-6"
      style={{ background: '#080c10' }}
    >
      <div
        className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-14 items-start transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        {/* Photo — 2 cols */}
        <div className="lg:col-span-2 flex justify-center lg:justify-start">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl opacity-15 blur-2xl"
              style={{ background: 'radial-gradient(ellipse, #4a8fd1, transparent)' }}
            />
            {/* Author photo placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                width: 300,
                height: 380,
                background: 'linear-gradient(160deg, #0d1a28 0%, #080c10 100%)',
                border: '1px solid rgba(110,168,224,0.15)',
              }}
            >
              <div className="flex flex-col items-center gap-4 text-center px-8">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2f6fb5" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: '#4a8fd1', opacity: 0.4 }}>
                    Author Photo
                  </p>
                  <p className="text-[10px] font-mono" style={{ color: '#44403c' }}>
                    Coming soon
                  </p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#080c10] to-transparent" />
            </div>
          </div>
        </div>

        {/* Bio text — 3 cols */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-[0.3em] mb-3"
              style={{ color: '#4a8fd1' }}
            >
              The Story Behind the Story
            </p>
            <h2
              className="font-bold text-2xl sm:text-3xl mb-3"
              style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
            >
              Who Is Devin Erickson?
            </h2>
            <RuneDivider />
          </div>

          <div className="flex flex-col gap-4 text-base leading-[1.9]" style={{ color: '#a8a29e' }}>
            <p>
              Devin Erickson is an author based in the United States with a mind that never
              quite stops building worlds. He has spent years turning a deeply personal story
              idea — one that wouldn&apos;t leave him alone — into what is now{' '}
              <em style={{ color: '#c8dff5' }}>BLEAK: The Last Storm</em>.
            </p>
            <p>
              The book began as a question: <span style={{ color: '#9dc4ec' }}>what happens to
              the people left behind when the world doesn&apos;t end cleanly?</span> From that
              question grew Errvas — a dying planet, an ancient order of wind-keepers, and a
              young scavenger named Abel who discovers the weight of a heritage he never asked for.
            </p>
            <p>
              Outside of writing, Devin is a cybersecurity professional and an
              inveterate tinkerer. He builds things — software, hardware, ideas — and
              believes that creativity in one domain always bleeds into the others. The same
              instinct that makes him pull apart a Raspberry Pi is what drives him to pull
              apart a plot structure until it&apos;s exactly right.
            </p>
          </div>

          {/* Social + contact */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://www.instagram.com/dericksonwrites/"
              target="_blank"
              rel="noreferrer"
              id="author-about-instagram"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: '1.5px solid rgba(110,168,224,0.25)',
                color: '#6ea8e0',
                background: 'rgba(74,143,209,0.06)',
              }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @dericksonwrites
            </a>
            <a
              href="mailto:devin@devinerickson.com"
              id="author-about-email"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: '1.5px solid rgba(110,168,224,0.15)',
                color: '#6ea8e0',
                background: 'transparent',
              }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              devin@devinerickson.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Writing Philosophy section ─────────────────────────────── */
function WritingPhilosophySection() {
  const [ref, visible] = useIntersect()

  const pillars = [
    {
      icon: '🌪️',
      title: 'Earned Worlds',
      body: 'Every element of Errvas — its magic, its politics, its people — exists because it earns its place in the story. World-building is only meaningful when it serves the characters moving through it.',
      accent: '#6ea8e0',
      border: 'rgba(110,168,224,0.25)',
    },
    {
      icon: '💀',
      title: 'Honest Darkness',
      body: 'Post-apocalyptic stories can lie about how hard survival is. BLEAK doesn\'t. The darkness is real, the cost is real — but so is the hope that keeps people moving through it.',
      accent: '#d4a96a',
      border: 'rgba(212,169,106,0.25)',
    },
    {
      icon: '✦',
      title: 'Characters First',
      body: 'Plot is what characters do under pressure. If the reader doesn\'t feel Abel\'s loss, the stakes don\'t matter. The story lives or dies on whether you believe the people in it.',
      accent: '#c8dff5',
      border: 'rgba(200,223,245,0.2)',
    },
  ]

  return (
    <section
      id="writing-philosophy"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080c10 0%, #0a1018 60%, #080c10 100%)',
        borderTop: '1px solid rgba(110,168,224,0.06)',
      }}
    >
      <div
        className="max-w-5xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        <div className="text-center mb-14">
          <p
            className="text-xs font-mono uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2"
            style={{ color: '#4a8fd1' }}
          >
            <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
            On Writing
            <span className="inline-block w-6 h-px" style={{ background: '#2f6fb5' }} />
          </p>
          <h2
            className="font-bold text-2xl sm:text-3xl"
            style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
          >
            The Craft Behind the Storm
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5"
              style={{
                background: 'rgba(14,20,28,0.7)',
                border: `1px solid ${p.border}`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(30px)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
              />
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3
                className="font-semibold text-base mb-3"
                style={{ fontFamily: "'Cinzel', Georgia, serif", color: p.accent }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#78716c' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA — Explore the Book ─────────────────────────────────── */
function ExploreBookSection() {
  const [ref, visible] = useIntersect()

  return (
    <section
      id="author-book-cta"
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: '#080c10' }}
    >
      <div
        className="max-w-3xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)' }}
      >
        <h2
          className="font-bold text-2xl sm:text-3xl mb-4"
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: '#c8dff5' }}
        >
          Ready to Enter the Storm?
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: '#78716c' }}>
          Dive into the world of Errvas — the synopsis, the lore, the characters, and the
          newsletter that will keep you first in line when BLEAK releases.
        </p>
        <Link
          to="/book"
          id="author-about-book-cta"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,143,209,0.4)]"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #2f6fb5 0%, #4a8fd1 50%, #6ea8e0 100%)',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(74,143,209,0.25)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Explore BLEAK: The Last Storm
        </Link>
      </div>
    </section>
  )
}

/* ─── The Hidden Gateway ─────────────────────────────────────── */
function HiddenGateway() {
  return (
    <section
      id="hidden-gateway"
      className="relative px-6 pb-16"
      style={{ background: '#080c10' }}
    >
      <div
        className="max-w-3xl mx-auto"
        style={{ borderTop: '1px solid rgba(110,168,224,0.06)', paddingTop: '3rem' }}
      >
        <p
          className="text-xs leading-relaxed text-center"
          style={{ color: '#292524', fontFamily: 'JetBrains Mono, monospace' }}
        >
          Writing books isn&apos;t my only hobby.{' '}
          <Link
            to="/dev"
            id="hidden-dev-gateway"
            className="transition-colors duration-300 hover:opacity-100"
            style={{ color: '#1a4f8a', textDecoration: 'underline', textDecorationColor: 'rgba(26,79,138,0.4)', textUnderlineOffset: '3px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#4a8fd1' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#1a4f8a' }}
          >
            I build things too — see my other projects.
          </Link>
        </p>
      </div>
    </section>
  )
}

/* ─── Page: AuthorAbout ──────────────────────────────────────── */
export default function AuthorAbout() {
  useCinzelFont()

  return (
    <div style={{ background: '#080c10', color: '#d6d3d1' }} className="relative">
      <title>About the Author — Devin Erickson</title>
      <meta
        name="description"
        content="Meet Devin Erickson — author of BLEAK: The Last Storm, an epic post-apocalyptic fantasy. Learn about the writer behind the storm."
      />

      <AuthorHero />
      <BioSection />
      <WritingPhilosophySection />
      <ExploreBookSection />
      <HiddenGateway />
    </div>
  )
}
