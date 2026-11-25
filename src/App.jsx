import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HireMe from './components/HireMe'
import Story from './components/Story'
import DsaDemo from './components/DsaDemo'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [loaded, setLoaded] = useState(false)

  // Loader: dismiss after 1.2s — recruiters should not wait
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // Apply dark/light class to <html>
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      root.classList.remove('light')
      document.body.style.background = '#0A0A0F'
      document.body.style.color = '#ffffff'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      document.body.style.background = '#F0F2FF'
      document.body.style.color = '#0A0A0F'
    }
  }, [darkMode])

  return (
    <>
      {/* Global overlays */}
      <Cursor />
      <ScrollProgress />
      <Loader done={loaded} />

      {/* Main layout */}
      <div
        className="min-h-screen transition-colors duration-500"
        style={{ background: darkMode ? '#0A0A0F' : '#F0F2FF' }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Hero />
          <HireMe />
          <Story />
          <Dashboard />
          <Projects />
          <DsaDemo />
          <Timeline />
          <Resume />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
