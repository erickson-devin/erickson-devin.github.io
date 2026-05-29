import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const AUTHOR_NAV_LINKS = [
  { to: '/',       label: 'Home',             end: true },
  { to: '/book',   label: 'The Book',         end: false },
  { to: '/author', label: 'About the Author', end: false },
]

function useScrollShrink(threshold = 50) {
  const [shrunk, setShrunk] = useState(false)
  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return shrunk
}

export default function AuthorNavbar() {
  const shrunk = useScrollShrink()
  const [open, setOpen]   = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav
      id="author-navbar"
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        shrunk
          ? 'py-2 bg-[#080c10]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#1e2d3d]'
          : 'py-5 bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/"
          onClick={closeMenu}
          className={[
            'transition-all duration-300',
            shrunk ? 'text-lg' : 'text-xl',
          ].join(' ')}
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontWeight: 700,
            letterSpacing: '0.05em',
            background: 'linear-gradient(90deg, #c8dff5, #6ea8e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Devin Erickson
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {AUTHOR_NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                id={`author-nav-${label.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive ? 'text-[#c8dff5]' : 'text-[#6ea8e0]/70 hover:text-[#c8dff5]',
                  ].join(' ')
                }
                style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: '0.05em' }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6ea8e0]" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a
          href="#bleak-newsletter"
          id="author-nav-cta"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(74,143,209,0.4)]"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            letterSpacing: '0.04em',
            background: 'linear-gradient(135deg, #2f6fb5, #4a8fd1)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(74,143,209,0.25)',
          }}
          onClick={(e) => {
            // If not on the book page, navigate there first
            if (!window.location.pathname.includes('/book')) {
              e.preventDefault()
              window.location.href = '/book#bleak-newsletter'
            }
          }}
        >
          Join the Resistance
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          id="author-menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#6ea8e0' }} />
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} style={{ background: '#6ea8e0' }} />
          <span className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#6ea8e0' }} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        id="author-nav-links"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div
          className="border-t px-6 py-4 flex flex-col gap-1"
          style={{
            background: 'rgba(8,12,16,0.98)',
            backdropFilter: 'blur(12px)',
            borderColor: '#1e2d3d',
          }}
        >
          {AUTHOR_NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  isActive
                    ? 'text-[#c8dff5] border'
                    : 'text-[#6ea8e0]/70 hover:text-[#c8dff5] hover:bg-white/5',
                ].join(' ')
              }
              style={({ isActive }) => ({
                fontFamily: "'Cinzel', Georgia, serif",
                letterSpacing: '0.05em',
                ...(isActive ? { background: 'rgba(74,143,209,0.08)', borderColor: 'rgba(110,168,224,0.3)' } : {}),
              })}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/book#bleak-newsletter"
            onClick={closeMenu}
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300"
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              background: 'linear-gradient(135deg, #2f6fb5, #4a8fd1)',
              color: '#fff',
            }}
          >
            Join the Resistance
          </a>
        </div>
      </div>
    </nav>
  )
}
