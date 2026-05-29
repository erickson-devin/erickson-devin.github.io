import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto animate-fade-up">
        <p className="section-label">Writing</p>
        <h1 className="text-4xl font-extrabold text-white mb-6">Blog</h1>

        <div className="card border-dashed opacity-60 flex flex-col items-center justify-center
                        min-h-[300px] gap-4 text-center">
          <span className="text-5xl">✍️</span>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Posts and write-ups are on the way. I plan to write about
            hardware builds, web development, and lessons learned along the way.
          </p>
          <span className="tag">Coming soon</span>
        </div>

        <Link to="/dev" className="inline-flex items-center gap-2 mt-8 text-sm text-brand-400 hover:text-brand-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
