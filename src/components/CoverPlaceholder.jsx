import { IconBolt } from './Icons'

/* ─── Book cover placeholder ─────────────────────────────────────
   Used in the BLEAK heroes until the real cover art exists.
   Swap the inner placeholder for an <img> once it's ready.      */
export default function CoverPlaceholder({ width = 260, height = 390 }) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 rounded-2xl blur-3xl opacity-35"
        style={{ background: 'radial-gradient(ellipse, #4a8fd1 0%, #1a4f8a 60%, transparent 80%)' }}
      />
      <div
        className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/70 border border-[#1e2d3d]"
        style={{ width, height }}
      >
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-4"
          style={{ background: 'linear-gradient(160deg, #0a1520 0%, #080c10 100%)', border: '1px solid rgba(110,168,224,0.15)' }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2f6fb5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: '#4a8fd1', opacity: 0.5 }}
          >
            Cover Art Coming Soon
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      </div>
      {/* Floating badge */}
      <div
        className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl border text-xs font-mono font-semibold"
        style={{
          background: 'rgba(8,12,16,0.95)',
          borderColor: '#4a8fd1',
          color: '#9dc4ec',
          boxShadow: '0 0 20px rgba(74,143,209,0.25)',
        }}
      >
        <IconBolt size={12} /> Coming Soon
      </div>
    </div>
  )
}
