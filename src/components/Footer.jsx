import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = ['Home', 'Story', 'Dashboard', 'Projects',  'Certifications', 'Resume', 'Contact']
const socials = [
  { icon: FaGithub, href: 'https://github.com/premteach', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prem0493/', label: 'LinkedIn' },
  
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6C63FF44, #00D4FF44, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('home')}
            className="text-2xl font-black gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Prem Chandra Gupta<span className="text-white/20"></span>
          </motion.button>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 glass rounded-xl text-white/40 hover:text-white transition-colors"
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Prem Chandra Gupta — B.Tech CSE, LPU (2027)</p>
          <p className="text-xs text-white/30">Seeking SDE / Full Stack / Backend roles · <a className="text-white/60 hover:text-white" href="mailto:premchandgupta8957@gmail.com">premchandgupta8957@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}
