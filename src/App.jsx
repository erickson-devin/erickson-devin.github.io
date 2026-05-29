import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Bleak from './pages/Bleak'

export default function App() {
  return (
    <BrowserRouter>
      {/* Persistent navbar across all routes */}
      <Navbar />

      {/* Main content — padded to clear fixed navbar */}
      <main className="pt-16">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about"    element={<About />} />
          <Route path="/blog"     element={<Blog />} />
          <Route path="/bleak"    element={<Bleak />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
