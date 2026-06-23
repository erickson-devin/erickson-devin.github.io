import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { IconArrowLeft, IconPen, IconTerminal, IconShield } from '../components/Icons'

export default function About() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal(0.1)

  return (
    <div className="min-h-[100dvh] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div ref={ref1} className="scroll-reveal mb-12">
          <p className="section-label">Who I am</p>
          <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">About</h1>

          <div className="card">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Hi — I&apos;m Devin Erickson, a cybersecurity professional based in the United States. 
              I build things for the web, secure networks, and occasionally tinker with hardware. 
              When I&apos;m not writing code or analyzing systems, I&apos;m probably working on my 
              post-apocalyptic fantasy novel or planning the next project on a whiteboard.
            </p>
          </div>
        </div>

        <div ref={ref2} className="scroll-reveal space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">What I do</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-featured group hover:border-brand-600/40 transition-all duration-500 ease-spring">
              <div className="card-featured-inner h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-surface-border text-brand-400 shadow-inner">
                  <IconShield size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Cybersecurity</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-auto">
                  Protecting systems, analyzing vulnerabilities, and building secure architectures. 
                  My day job involves keeping the bad guys out.
                </p>
              </div>
            </div>

            <div className="card-featured group hover:border-brand-600/40 transition-all duration-500 ease-spring">
              <div className="card-featured-inner h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-surface-border text-brand-400 shadow-inner">
                  <IconTerminal size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Software Engineering</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-auto">
                  From React frontends to Python backends and Raspberry Pi kiosks. 
                  I enjoy turning ideas into tangible digital products.
                </p>
              </div>
            </div>

            <div className="card-featured group hover:border-brand-600/40 transition-all duration-500 ease-spring sm:col-span-2">
              <div className="card-featured-inner h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center border border-surface-border text-brand-400 shadow-inner">
                  <IconPen size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">Writing</h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-auto">
                  Currently writing <em>BLEAK: The Last Storm</em>, an epic post-apocalyptic fantasy. 
                  I love world-building as much as I love system-building.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/dev" className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors duration-200">
            <IconArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
