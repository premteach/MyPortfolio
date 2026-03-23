import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'

const links = ['Home', 'Dashboard', 'Projects',  'Certifications', 'Resume', 'Contact']

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      const current = sections.findLast((s) => s && s.getBoundingClientRect().top <= 120)
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1))
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('home')}
          className="text-xl font-black gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          PREM<span className="text-white/30">.</span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                active === link ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {active === link && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(108,99,255,0.2)', border: '1px solid rgba(108,99,255,0.3)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link}</span>
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg glass text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
          </motion.button>

          <motion.button
            className="btn-primary hidden md:block"
            onClick={() => scrollTo('Contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active === link
                    ? 'text-white bg-primary/20 border border-primary/30'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
