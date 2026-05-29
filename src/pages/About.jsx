import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto animate-fade-up">
        <p className="section-label">Who I am</p>
        <h1 className="text-4xl font-extrabold text-white mb-6">About</h1>

        <div className="card mb-6">
          <p className="text-slate-400 leading-relaxed">
            Hi — I&apos;m Devin Erickson, a cybersecurity professional based in the United States.
            I build things for the web and occasionally for hardware. When I&apos;m
            not writing my book, I&apos;m probably tinkering with a Raspberry Pi or
            planning the next project on a whiteboard.
          </p>
        </div>

        <div className="card border-dashed opacity-60 flex flex-col items-center justify-center
                        min-h-[200px] gap-2 text-center">
          <span className="text-4xl">🛠️</span>
          <p className="text-sm font-mono text-slate-500">
            Full bio coming soon — check back later.
          </p>
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
