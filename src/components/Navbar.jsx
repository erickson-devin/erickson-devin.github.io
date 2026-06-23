import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/dev',          label: 'Home',     end: true  },
  { to: '/dev/about',    label: 'About',    end: false },
  { to: '/dev/projects', label: 'Projects', end: false },
  { to: '/dev/blog',     label: 'Blog',     end: false },
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

export default function Navbar() {
  const shrunk = useScrollShrink()
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav
      id="navbar"
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500 ease-spring',
        shrunk
          ? 'py-2 bg-surface/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-surface-border'
          : 'py-5 bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/dev"
          onClick={closeMenu}
          className={[
            'font-bold tracking-tight transition-all duration-500 ease-spring',
            'text-white',
            shrunk ? 'text-lg' : 'text-xl',
          ].join(' ')}
        >
          <span className="text-brand-400">D</span>evin Erickson
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ease-spring',
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand-500" />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <Link
          to="/dev/projects"
          className="hidden md:inline-flex btn-primary text-sm px-4 py-2"
        >
          View work
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
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-spring origin-center
            ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-spring
            ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-slate-300 rounded-full transition-all duration-300 ease-spring origin-center
            ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        id="nav-links"
        className={[
          'md:hidden overflow-hidden transition-all duration-500 ease-spring',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="bg-surface/98 backdrop-blur-md border-t border-surface-border px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-brand-600/15 text-brand-300 border border-brand-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/dev/projects"
            onClick={closeMenu}
            className="btn-primary mt-2 justify-center text-sm"
          >
            View work
          </Link>
        </div>
      </div>
    </nav>
  )
}
