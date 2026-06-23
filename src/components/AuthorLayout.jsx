import { Outlet } from 'react-router-dom'
import AuthorNavbar from './AuthorNavbar'
import Footer from './Footer'

export default function AuthorLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <AuthorNavbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
