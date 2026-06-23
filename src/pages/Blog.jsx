import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconArrowLeft, IconPen } from '../components/Icons'

export default function Blog() {
  const ref = useScrollReveal()

  return (
    <div className="min-h-[100dvh] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="scroll-reveal">
          <p className="section-label">Writing</p>
          <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Blog</h1>

          <div className="card border-dashed border-surface-border bg-transparent flex flex-col items-center justify-center
                          min-h-[300px] gap-6 text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-surface-border flex items-center justify-center text-brand-400 shadow-inner">
              <IconPen size={28} />
            </div>
            <div className="max-w-md">
              <h2 className="text-xl font-semibold text-white mb-2">Thoughts in progress</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Posts and write-ups are on the way. I plan to write about
                hardware builds, web development, cybersecurity, and lessons learned along the way.
              </p>
              <span className="tag">Coming soon</span>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/dev" className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors duration-200">
              <IconArrowLeft size={16} />
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
