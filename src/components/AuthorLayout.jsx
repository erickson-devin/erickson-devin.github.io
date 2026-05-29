import { Outlet } from 'react-router-dom'
import AuthorNavbar from './AuthorNavbar'

/**
 * AuthorLayout — wraps all author-section routes (/, /book, /author).
 * Injects the AuthorNavbar and provides the dark BLEAK base background.
 */
export default function AuthorLayout() {
  return (
    <div style={{ background: '#080c10', minHeight: '100vh' }}>
      <AuthorNavbar />
      {/* No pt-16 here — author pages manage their own hero spacing */}
      <Outlet />
    </div>
  )
}
