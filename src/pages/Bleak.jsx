import { useState, useEffect, useRef } from 'react'

/* ─── Google Font import via link injection ─────────────────── */
function useCinzelFont() {
  useEffect(() => {
    const id = 'cinzel-font-link'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700&display=swap'
      document.head.appendChild(link)
    }
  }, [])
}

/* ─── useIntersect hook (scroll-reveal) ────────────────────── */
function useIntersect(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.15, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, isVisible]
}

/* ─── WindParticle: animated floating dust mote ─────────────── */
function WindParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 8}s`,
    duration: `${Math.random() * 10 + 8}s`,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full bg-storm-300"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
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

/* ─── Rune decorative divider ───────────────────────────────── */
function RuneDivider({ color = 'storm' }) {
  const stroke = color === 'storm' ? '#6ea8e0' : color === 'ochre' ? '#c49a52' : '#39ff14'
  return (
    <div aria-hidden="true" className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-current opacity-30" style={{ color: stroke }} />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2 L26 14 L14 26 L2 14 Z" stroke={stroke} strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M14 6 L22 14 L14 22 L6 14 Z" stroke={stroke} strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="14" cy="14" r="2" fill={stroke} opacity="0.8" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-current opacity-30" style={{ color: stroke }} />
    </div>
  )
}

/* ─── Section label (lore-styled) ───────────────────────────── */
function LoreLabel({ children }) {
  return (
    <p className="text-xs font-mono uppercase tracking-[0.25em] text-storm-400 mb-3 flex items-center gap-2">
      <span className="inline-block w-6 h-px bg-storm-400" />
      {children}
      <span className="inline-block w-6 h-px bg-storm-400" />
    </p>
  )
}

/* ─── Section: Hero ─────────────────────────────────────────── */
function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      id="bleak-hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#080c10' }}
    >
      {/* ── Parallax background image ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/bleak_hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'brightness(0.35) saturate(0.7)',
          willChange: 'transform',
        }}
      />

      {/* ── Gradient overlays ── */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#080c10] via-[#080c10]/40 to-[#080c10]/20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#080c10]/80 via-transparent to-[#080c10]/60" />

      {/* ── Storm glow top ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-20 blur-[80px]"
        style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, transparent 70%)' }}
      />

      <WindParticles />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center px-6 py-24 lg:py-32">

        {/* ── Book Cover ── */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last animate-fade-in">
          <div className="relative">
            {/* Glow behind cover */}
            <div
              className="absolute -inset-8 rounded-2xl blur-3xl opacity-40"
              style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, #39ff14 50%, transparent 80%)' }}
            />
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/70 border border-storm-700/40"
              style={{ width: 280, height: 420 }}>
              <img
                src="/assets/bleak_book_cover.png"
                alt="BLEAK: The Last Storm book cover"
                className="w-full h-full object-cover"
              />
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border text-xs font-mono font-semibold"
              style={{
                background: 'rgba(8,12,16,0.95)',
                borderColor: '#6ea8e0',
                color: '#9dc4ec',
                boxShadow: '0 0 20px rgba(74,143,209,0.3)',
              }}>
              ⚡ Coming Soon
            </div>
          </div>
        </div>

        {/* ── Title & CTA ── */}
        <div className="flex flex-col gap-6 animate-fade-up">
          <LoreLabel>An Epic Post-Apocalyptic Fantasy</LoreLabel>

          <div>
            <h1
              className="font-serif font-black leading-none tracking-wider"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                background: 'linear-gradient(135deg, #c8dff5 0%, #6ea8e0 40%, #9dc4ec 70%, #d4a96a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 30px rgba(110,168,224,0.4))',
              }}
            >
              BLEAK
            </h1>
            <p
              className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase mt-1"
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                color: '#d4a96a',
                textShadow: '0 0 20px rgba(212,169,106,0.4)',
              }}
            >
              The Last Storm
            </p>
          </div>

          <RuneDivider />

          <blockquote
            className="text-lg sm:text-xl leading-relaxed italic"
            style={{ color: '#9dc4ec', textShadow: '0 0 15px rgba(157,196,236,0.2)' }}
          >
            &ldquo;The wind knows your name.{' '}
            <span style={{ color: '#c8dff5' }}>You just have to listen.</span>&rdquo;
          </blockquote>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#bleak-hook"
              id="bleak-cta-chapter"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(74,143,209,0.5)]"
              style={{
                background: 'linear-gradient(135deg, #2f6fb5 0%, #4a8fd1 50%, #6ea8e0 100%)',
                color: '#fff',
                boxShadow: '0 4px 20px rgba(74,143,209,0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Read the First Chapter
            </a>
            <a
              href="#bleak-newsletter"
              id="bleak-cta-preorder"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1.5px solid #6ea8e0',
                color: '#9dc4ec',
                background: 'rgba(74,143,209,0.08)',
              }}
            >
              Pre-Order Now →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[10px] font-mono uppercase tracking-widest text-storm-300">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-storm-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

/* ─── Section: Logline / The Hook ───────────────────────────── */
function HookSection() {
  const [ref, visible] = useIntersect()
  return (
    <section
      id="bleak-hook"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080c10 0%, #0b1018 50%, #080c10 100%)' }}
    >
      {/* Storm-blue glow center */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[600px] h-[300px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, transparent 70%)' }}
        />
      </div>

      <div
        className="relative max-w-4xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        <LoreLabel>The Story</LoreLabel>
        <h2
          className="text-2xl sm:text-3xl font-serif font-bold mb-10"
          style={{ fontFamily: "'Cinzel', serif", color: '#c8dff5' }}
        >
          The Synopsis
        </h2>

        <div
          className="relative p-8 sm:p-12 rounded-2xl text-left"
          style={{
            background: 'rgba(22,30,40,0.6)',
            border: '1px solid rgba(110,168,224,0.2)',
            boxShadow: 'inset 0 0 60px rgba(74,143,209,0.05)',
          }}
        >
          {/* Decorative quote mark */}
          <span
            className="absolute -top-6 left-8 font-serif text-8xl leading-none select-none"
            style={{
              fontFamily: "'Cinzel', serif",
              color: '#2f6fb5',
              opacity: 0.4,
            }}
          >
            &ldquo;
          </span>

          <p className="text-lg sm:text-xl leading-[1.9] text-ash-200 relative z-10 mb-4">
            In a dying world scourged by endless winds and fading hope,{' '}
              <strong className="font-semibold" style={{ color: '#c8dff5' }}>Abel Corentin</strong>{' '}
            has spent his life scavenging the ruins of a forgotten age. But when{' '}
              <strong className="font-semibold" style={{ color: '#9dc4ec' }}>
            mysterious whispers lead him to an ancient relic
              </strong>{' '}
            buried beneath the shattered city of Veldrien, he uncovers the first clues to a lost legacy tied to the legendary{' '}
              <strong className="font-semibold" style={{ color: '#6ea8e0' }}>Keepers of Errvas</strong>.
          </p>
          <p className="text-lg sm:text-xl leading-[1.9] text-ash-200 relative z-10">
            As strange powers awaken within him and long-buried truths begin to surface, Abel finds himself drawn into a conflict far greater than he ever imagined. To save his people, he must challenge the{' '}
              <strong className="font-semibold" style={{ color: '#39ff14' }}>Skuggi Syndicate</strong>
            , a shadowy force feeding on the world&apos;s decline. But some secrets were buried for a reason, and with every answer he uncovers, Abel moves one step closer to{' '}
              <strong className="font-semibold" style={{ color: '#dc2626' }}>
            awakening a darkness even the Keepers feared—a darkness they were sworn to contain
              </strong>
            .
          </p>

          <span
            className="absolute -bottom-8 right-8 font-serif text-8xl leading-none select-none rotate-180"
            style={{
              fontFamily: "'Cinzel', serif",
              color: '#2f6fb5',
              opacity: 0.4,
            }}
          >
            &ldquo;
          </span>
        </div>
      </div>
    </section>
  )
}

/* ─── Section: About the Book ───────────────────────────────── */
function AboutSection() {
  const [ref, visible] = useIntersect()
  return (
    <section
      id="bleak-about"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: '#080c10' }}
    >
      {/* Ochre glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #c49a52 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: title block ── */}
        <div
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(-40px)' }}
        >
          <LoreLabel>About the Book</LoreLabel>
          <h2
            className="font-serif font-bold text-4xl sm:text-5xl mb-6 leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: '#c8dff5' }}
          >
            A World of{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #d4a96a, #c49a52)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ash &amp; Tempest
            </span>
          </h2>
          <RuneDivider color="ochre" />

          <div className="mt-6 flex flex-col gap-4">
            {[
              { icon: '🌪️', label: 'Wind Magic' },
              { icon: '💀', label: 'Post-Apocalyptic' },
              { icon: '👽', label: 'Alien Invasion' },
              { icon: '⚔️', label: 'Epic Fantasy' },
            ].map(tag => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-sm font-mono"
                style={{
                  background: 'rgba(22,30,40,0.8)',
                  border: '1px solid rgba(110,168,224,0.25)',
                  color: '#9dc4ec',
                }}
              >
                {tag.icon} {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: summary ── */}
        <div
          className="transition-all duration-1000 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(40px)' }}
        >
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'rgba(22,30,40,0.5)',
              border: '1px solid rgba(110,168,224,0.15)',
            }}
          >
            <p className="text-base sm:text-lg leading-[1.95] text-ash-200">
              Fifteen years after{' '}
              <strong style={{ color: '#9dc4ec' }}>Errvas</strong>{' '}
              collapsed into wind, ash, and scarcity,{' '}
              <strong style={{ color: '#c8dff5' }}>Abel</strong>{' '}
              survives as a provider for{' '}
              <strong style={{ color: '#d4a96a' }}>Olsborg</strong>
              , a colony built from the bones of a fallen world. Haunted by memories of a family he
              believes he lost, Abel begins hearing a voice in the wind that leads him into{' '}
              <strong style={{ color: '#6ea8e0' }}>Veldrien</strong>
              , the ruined capital. There he uncovers relics of the{' '}
              <strong style={{ color: '#9dc4ec' }}>Keepers</strong>
              —ancient protectors bound to the forces of Errvas—and learns that the storms, quakes,
              and shadows are not random signs of decay. They are symptoms of{' '}
              <strong style={{ color: '#dc2626' }}>an alien invasion begun long before his birth</strong>.
              To save Olsborg, find his family, and confront the{' '}
              <strong style={{ color: '#39ff14' }}>Skuggi</strong>{' '}
              who are draining the planet, Abel must become the very thing he doubts he can be:{' '}
              <strong style={{ color: '#c8dff5', fontStyle: 'italic' }}>
                the last storm standing between Errvas and the dark beneath it
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section: World & Lore Grid ────────────────────────────── */
const LORE_CARDS = [
  {
    id: 'errvas',
    title: 'Errvas',
    subtitle: 'The Dying World',
    icon: '🌍',
    accent: '#6ea8e0',
    glow: 'rgba(74,143,209,0.2)',
    border: 'rgba(110,168,224,0.3)',
    description:
      'A once-thriving green world now reduced to dust, tempests, and shadowed skies — slowly being harvested to its core. What remains is beautiful only in the way that ruins are: a haunting echo of everything that was.',
    runes: ['◈', '⟁', '◇'],
  },
  {
    id: 'keepers',
    title: 'The Keepers',
    subtitle: 'Ancient Guardians',
    icon: '⚡',
    accent: '#c8dff5',
    glow: 'rgba(200,223,245,0.15)',
    border: 'rgba(200,223,245,0.25)',
    description:
      'An ancient, forgotten order empowered to shape the elements, tasked with protecting the planet\'s balance. Bound by oath to the storms of Errvas, their bloodline carries the last hope of a shattered world.',
    runes: ['✦', '⋆', '✧'],
  },
  {
    id: 'skuggi',
    title: 'The Skuggi Syndicate',
    subtitle: 'The Eternal Hunger',
    icon: '☠',
    accent: '#39ff14',
    glow: 'rgba(57,255,20,0.15)',
    border: 'rgba(57,255,20,0.25)',
    description:
      'A corrupted, immortal race from Noctirion, draining the life-force of Errvas to feed their unending hunger. They arrived before memory, wearing the faces of allies — and the shadows beneath their feet never quite match the light.',
    runes: ['⚠', '✕', '◉'],
  },
]

function LoreCard({ card, index, visible }) {
  return (
    <div
      className="relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-default"
      style={{
        background: 'rgba(22,30,40,0.6)',
        border: `1px solid ${card.border}`,
        boxShadow: `0 4px 30px ${card.glow}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transitionDelay: `${index * 150}ms`,
        transitionDuration: '800ms',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${card.glow} 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 font-serif"
          style={{
            background: `rgba(${card.id === 'skuggi' ? '57,255,20' : card.id === 'keepers' ? '200,223,245' : '110,168,224'}, 0.1)`,
            border: `1px solid ${card.border}`,
            color: card.accent,
          }}
        >
          {card.icon}
        </div>

        <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: card.accent, opacity: 0.7 }}>
          {card.subtitle}
        </p>
        <h3
          className="font-serif font-bold text-xl mb-4"
          style={{ fontFamily: "'Cinzel', serif", color: card.accent }}
        >
          {card.title}
        </h3>
        <p className="text-sm leading-relaxed text-ash-300">{card.description}</p>

        {/* Rune decorations */}
        <div className="flex gap-3 mt-6" style={{ color: card.accent, opacity: 0.3 }}>
          {card.runes.map((r, i) => (
            <span key={i} className="text-lg">{r}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function LoreSection() {
  const [ref, visible] = useIntersect()
  return (
    <section
      id="bleak-lore"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080c10 0%, #0a1015 50%, #080c10 100%)' }}
    >
      {/* Skuggi green background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #39ff14 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <LoreLabel>The World of Errvas</LoreLabel>
          <h2
            className="font-serif font-bold text-3xl sm:text-4xl"
            style={{ fontFamily: "'Cinzel', serif", color: '#c8dff5' }}
          >
            Powers. Worlds. Darkness.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {LORE_CARDS.map((card, i) => (
            <LoreCard key={card.id} card={card} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Characters ───────────────────────────────────── */
const CHARACTERS = [
  {
    id: 'abel',
    name: 'Abel Corentin',
    role: 'Scavenger/Keeper',
    color: '#6ea8e0',
    glow: 'rgba(74,143,209,0.3)',
    emoji: '🌪️',
    description:
      'A reluctant scavenger who discovers his bloodline holds the power of the wind. Haunted by loss and driven by truth, Abel must choose between the safety of ignorance and the storm that is his birthright.',
    traits: ['Reluctant Hero', 'Wind-Keeper', 'Orphan Scavenger'],
  },
  {
    id: 'eleanor',
    name: 'Eleanor',
    role: 'Olsborg\'s Anchor',
    color: '#d4a96a',
    glow: 'rgba(212,169,106,0.3)',
    emoji: '🏹',
    description:
      'An archer and the emotional anchor of Olsborg, whose fierce hope pushes back against the bleakness. Eleanor\'s strength isn\'t in what she fights — it\'s in what she refuses to give up on.',
    traits: ['Master Archer', 'Fierce Hope', 'Colony Guardian'],
  },
  {
    id: 'kari',
    name: 'Kari',
    role: 'Voice of the Wind',
    color: '#c8dff5',
    glow: 'rgba(200,223,245,0.3)',
    emoji: '✦',
    description:
      'An ancient, ethereal wind-spirit who serves as Abel\'s guide to his lost heritage. Neither fully present nor fully gone, Kari exists in the space between breaths — the memory of Errvas given voice.',
    traits: ['Wind-Spirit', 'Ancient Guide', 'Ethereal Presence'],
  },
  {
    id: 'jordan',
    name: 'Jordan',
    role: 'The Broken Warrior',
    color: '#dc2626',
    glow: 'rgba(220,38,38,0.3)',
    emoji: '⚔️',
    description:
      'A tragic warrior burdened by sudden leadership, destined to break under the pressure of survival. Jordan\'s story is a warning written in blood: what happens when the strongest person in the room carries everyone but themselves.',
    traits: ['Tragic Warrior', 'Burdened Leader', 'Destined to Break'],
  },
]

function CharacterSection() {
  const [active, setActive] = useState(0)
  const [ref, visible] = useIntersect()
  const char = CHARACTERS[active]

  return (
    <section
      id="bleak-characters"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: '#080c10' }}
    >
      {/* Character color glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${char.glow} 0%, transparent 60%)`,
          opacity: 0.15,
        }}
      />

      <div
        className="max-w-6xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        <div className="text-center mb-12">
          <LoreLabel>Meet the Cast</LoreLabel>
          <h2
            className="font-serif font-bold text-3xl sm:text-4xl"
            style={{ fontFamily: "'Cinzel', serif", color: '#c8dff5' }}
          >
            Those Who Shape the Storm
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CHARACTERS.map((c, i) => (
            <button
              key={c.id}
              id={`char-tab-${c.id}`}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: active === i ? `rgba(${c.id === 'abel' ? '74,143,209' : c.id === 'eleanor' ? '212,169,106' : c.id === 'kari' ? '200,223,245' : '220,38,38'}, 0.15)` : 'rgba(22,30,40,0.6)',
                border: `1px solid ${active === i ? c.color : 'rgba(110,168,224,0.2)'}`,
                color: active === i ? c.color : '#94a3b8',
                boxShadow: active === i ? `0 0 20px ${c.glow}` : 'none',
              }}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        {/* Character card */}
        <div
          key={char.id}
          className="relative rounded-2xl p-8 sm:p-12 grid sm:grid-cols-3 gap-8 items-center transition-all duration-500"
          style={{
            background: 'rgba(16,22,30,0.8)',
            border: `1px solid ${char.color}33`,
            boxShadow: `0 0 60px ${char.glow}`,
          }}
        >
          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
            style={{ background: `linear-gradient(90deg, transparent, ${char.color}, transparent)` }}
          />

          {/* Avatar/Icon */}
          <div className="flex justify-center">
            <div
              className="w-36 h-36 rounded-2xl flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(135deg, rgba(${char.id === 'abel' ? '74,143,209' : char.id === 'eleanor' ? '212,169,106' : char.id === 'kari' ? '200,223,245' : '220,38,38'}, 0.1) 0%, rgba(8,12,16,0.8) 100%)`,
                border: `2px solid ${char.color}44`,
                boxShadow: `0 0 40px ${char.glow}`,
              }}
            >
              {char.emoji}
            </div>
          </div>

          {/* Info */}
          <div className="sm:col-span-2 flex flex-col gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: char.color, opacity: 0.7 }}>
                {char.role}
              </p>
              <h3
                className="font-serif font-bold text-2xl sm:text-3xl"
                style={{ fontFamily: "'Cinzel', serif", color: char.color }}
              >
                {char.name}
              </h3>
            </div>
            <p className="text-base leading-relaxed text-ash-200">{char.description}</p>
            <div className="flex flex-wrap gap-2">
              {char.traits.map(t => (
                <span
                  key={t}
                  className="inline-block px-3 py-1 text-xs font-mono rounded-full"
                  style={{
                    background: `${char.color}15`,
                    border: `1px solid ${char.color}33`,
                    color: char.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {CHARACTERS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              aria-label={`View ${c.name}`}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: active === i ? c.color : 'rgba(110,168,224,0.2)',
                width: active === i ? '24px' : '8px',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section: Newsletter / Footer ──────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'sent' | 'error'
  const [ref, visible] = useIntersect()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@')) { setStatus('error'); return }
    setStatus('sent')
    setEmail('')
  }

  return (
    <section
      id="bleak-newsletter"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #080c10 0%, #050810 100%)',
        borderTop: '1px solid rgba(110,168,224,0.1)',
      }}
    >
      {/* Atmospheric glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-10 blur-[60px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, transparent 70%)' }}
      />

      <div
        className="max-w-3xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)' }}
      >
        <LoreLabel>Join the Resistance</LoreLabel>
        <h2
          className="font-serif font-bold text-3xl sm:text-4xl mb-4"
          style={{ fontFamily: "'Cinzel', serif", color: '#c8dff5' }}
        >
          Hear the Wind First
        </h2>
        <p className="text-base text-ash-300 mb-10 leading-relaxed">
          Sign up for updates, exclusive lore drops, and release dates.{' '}
          <span style={{ color: '#9dc4ec' }}>The storm is coming — be ready.</span>
        </p>

        {status === 'sent' ? (
          <div
            className="py-6 px-8 rounded-2xl text-center"
            style={{
              background: 'rgba(74,143,209,0.1)',
              border: '1px solid rgba(110,168,224,0.3)',
            }}
          >
            <p className="text-storm-300 font-serif text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
              ✦ The wind has heard you. ✦
            </p>
            <p className="text-sm text-ash-400 mt-2">You&apos;ll be among the first to know when the storm breaks.</p>
          </div>
        ) : (
          <form id="bleak-newsletter-form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              id="bleak-email-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 max-w-sm px-5 py-3.5 rounded-xl text-sm font-mono outline-none transition-all duration-300"
              style={{
                background: 'rgba(22,30,40,0.8)',
                border: `1px solid ${status === 'error' ? '#dc2626' : 'rgba(110,168,224,0.3)'}`,
                color: '#c8dff5',
              }}
            />
            <button
              id="bleak-newsletter-submit"
              type="submit"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(74,143,209,0.4)] whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #2f6fb5, #4a8fd1)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(74,143,209,0.25)',
              }}
            >
              Join the Resistance →
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-2 text-xs text-red-400 font-mono">Please enter a valid email address.</p>
        )}

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-14">
          {[
            {
              label: 'Instagram', href: 'https://www.instagram.com/dericksonwrites/', icon: (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              )
            },
          ].map(social => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-all duration-300 hover:-translate-y-1"
              style={{ color: '#4a8fd1', opacity: 0.6 }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = '#9dc4ec' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.color = '#4a8fd1' }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Author contact */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-ash-500"
          style={{ borderTop: '1px solid rgba(110,168,224,0.1)' }}
        >
          <p>
            <span style={{ fontFamily: "'Cinzel', serif", color: '#4a8fd1', fontWeight: 600 }}>BLEAK: The Last Storm</span>
            {' '}— by Devin Erickson
          </p>
          <a
            href="mailto:devin@devinerickson.com"
            className="transition-colors hover:text-storm-300"
            style={{ color: '#4a8fd1' }}
          >
            devin@devinerickson.com
          </a>
          <p style={{ color: '#292524' }}>© 2026 All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

/* ─── Page: Bleak ─────────────────────────────────────────────── */
export default function Bleak() {
  useCinzelFont()

  return (
    <div
      style={{ background: '#080c10', color: '#d6d3d1' }}
      className="relative"
    >
      {/* Page SEO */}
      <title>BLEAK: The Last Storm — Epic Post-Apocalyptic Fantasy Novel</title>
      <meta
        name="description"
        content="In a dying world where the wind whispers with the voices of the forgotten, orphaned scavenger Abel Corentin discovers he is heir to the ancient Keepers of Errvas. Pre-order BLEAK: The Last Storm."
      />

      <HeroSection />
      <HookSection />
      <AboutSection />
      <LoreSection />
      <CharacterSection />
      <NewsletterSection />
    </div>
  )
}
