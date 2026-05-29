import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// ── Layouts ─────────────────────────────────────────────────────
import AuthorLayout from './components/AuthorLayout'
import DevLayout    from './components/DevLayout'

// ── Author Section pages ─────────────────────────────────────────
import AuthorHome  from './pages/AuthorHome'
import AuthorAbout from './pages/AuthorAbout'
import Bleak       from './pages/Bleak'

// ── Developer Section pages ──────────────────────────────────────
import DevHome   from './pages/DevHome'
import Projects  from './pages/Projects'
import About     from './pages/About'
import Blog      from './pages/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ══ AUTHOR SECTION ════════════════════════════════════ */}
        <Route element={<AuthorLayout />}>
          <Route path="/"       element={<AuthorHome />} />
          <Route path="/book"   element={<Bleak />} />
          <Route path="/author" element={<AuthorAbout />} />
          {/* Backward-compat redirect: /bleak → /book */}
          <Route path="/bleak"  element={<Navigate to="/book" replace />} />
        </Route>

        {/* ══ DEVELOPER SECTION ═════════════════════════════════ */}
        <Route path="/dev" element={<DevLayout />}>
          <Route index              element={<DevHome />} />
          <Route path="projects"    element={<Projects />} />
          <Route path="about"       element={<About />} />
          <Route path="blog"        element={<Blog />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
