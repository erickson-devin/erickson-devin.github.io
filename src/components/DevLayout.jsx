import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

/**
 * DevLayout — wraps all developer-section routes (/dev, /dev/projects, etc).
 * Injects the existing Navbar and provides the slate dark base background.
 */
export default function DevLayout() {
  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}
