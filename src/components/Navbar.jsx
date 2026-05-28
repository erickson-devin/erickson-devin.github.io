import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

/**
 * useScrollShrink — returns true when the page has scrolled past `threshold` px.
 * Mirrors the original navbar.js scroll listener logic.
 */
function useScrollShrink(threshold = 50) {
  const [shrunk, setShrunk] = useState(false)

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return shrunk
}

export default function Navbar() {
  const shrunk = useScrollShrink()
  const [open, setOpen] = useState(false)

  // Close mobile menu whenever the route changes (click on a link)
  const closeMenu = () => setOpen(false)

  return (
    <nav
      id="navbar"
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 ease-in-out',
        shrunk
          ? 'py-2 bg-[#0f172a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#1e293b]'
          : 'py-5 bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/"
          onClick={closeMenu}
          className={[
            'font-bold tracking-tight transition-all duration-300',
            'bg-gradient-to-r from-brand-300 to-violet-400 bg-clip-text text-transparent',
            shrunk ? 'text-lg' : 'text-xl',
          ].join(' ')}
        >
          Devin Erickson
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-400" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <Link
          to="/projects"
          className="hidden md:inline-flex btn-primary text-sm px-4 py-2"
        >
          View Work
        </Link>

        {/* ── Mobile hamburger button ── */}
        <button
          id="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg
                     hover:bg-white/5 transition-colors"
        >
          {/* Animated bars — morph to X when open */}
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 origin-center
            ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300
            ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 origin-center
            ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        id="nav-links"
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="bg-[#0f172a]/98 backdrop-blur-md border-t border-[#1e293b] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-500/15 text-brand-300 border border-brand-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/projects"
            onClick={closeMenu}
            className="btn-primary mt-2 justify-center text-sm"
          >
            View Work
          </Link>
        </div>
      </div>
    </nav>
  )
}
