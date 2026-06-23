import { IconGitHub } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border bg-surface-raised/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white tracking-tight">
              Devin Erickson
            </span>
            <p className="text-xs text-surface-muted leading-relaxed max-w-[28ch]">
              Cybersecurity engineer, author, and builder of things.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-surface-muted mb-1">
              Navigate
            </span>
            <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              Author site
            </a>
            <a href="/dev" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              Developer portfolio
            </a>
            <a href="/book" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              The book
            </a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-surface-muted mb-1">
              Connect
            </span>
            <a
              href="https://github.com/erickson-devin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              <IconGitHub size={14} />
              GitHub
            </a>
            <a
              href="mailto:devin@devinerickson.com"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              devin@devinerickson.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-surface-muted">
            &copy; {year} Devin Erickson. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-surface-muted/50">
            Built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
