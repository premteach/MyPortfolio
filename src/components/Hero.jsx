import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profilePhoto from '../img/profile.jpg'
import cvPdf from '../img/cv.pdf'

const socials = [
  { icon: FaGithub, href: 'https://github.com/Premchandra-gupta', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prem0493/', label: 'LinkedIn' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.25) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0,212,255,0.1) 0%, transparent 60%)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating orbs */}
        {[
          { w: 300, h: 300, top: '10%', left: '5%', color: 'rgba(108,99,255,0.08)' },
          { w: 200, h: 200, top: '60%', right: '8%', color: 'rgba(0,212,255,0.08)' },
          { w: 150, h: 150, bottom: '15%', left: '20%', color: 'rgba(108,99,255,0.06)' },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{ width: orb.w, height: orb.h, top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom, background: orb.color }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-xs font-mono text-primary mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Prem</span>
            <br />
            <span className="text-white/90">Chandra Gupta</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-white/60 mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Problem Solver', 2000,
                'Tech Enthusiast', 2000,
                'Java & React Dev', 2000,
              ]}
              repeat={Infinity}
              wrapper="span"
              className="gradient-text"
            />
          </div>

          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
            Building scalable web applications with modern tech. Passionate about clean code,
            great UX, and solving real-world problems through technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <HiArrowDown className="animate-bounce" />
            </motion.button>
            <motion.a
              href={cvPdf}
              download="Prem_Chandra_Gupta_CV.pdf"
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload /> Download CV
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-xl text-white/50 hover:text-white hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile Photo */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            {/* ── Outer ambient glow ── */}
            <div
              className="absolute rounded-full blur-3xl opacity-50 pointer-events-none"
              style={{
                inset: '-18%',
                background: 'radial-gradient(circle, rgba(108,99,255,0.35) 0%, rgba(0,212,255,0.15) 60%, transparent 80%)',
              }}
            />

            {/* ── Spinning gradient ring ── */}
            <motion.div
              className="absolute rounded-full"
              style={{
                inset: -3,
                background: 'conic-gradient(from 0deg, #6C63FF, #00D4FF, #6C63FF)',
                borderRadius: '50%',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* ── Static inner ring (masks the spinner to a thin border) ── */}
            <div
              className="absolute rounded-full"
              style={{
                inset: 3,
                background: '#0A0A0F',
                borderRadius: '50%',
                zIndex: 1,
              }}
            />

            {/* ── Glass backdrop disc ── */}
            <div
              className="absolute rounded-full"
              style={{
                inset: 6,
                background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,255,0.06))',
                backdropFilter: 'blur(12px)',
                borderRadius: '50%',
                zIndex: 2,
              }}
            />

            {/* ── Profile photo ── */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{ zIndex: 3, boxShadow: '0 0 40px rgba(108,99,255,0.25), 0 0 80px rgba(0,212,255,0.1)' }}
            >
              <img
                src={profilePhoto}
                alt="Prem Chandra Gupta"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%' }}
              />

              {/* Subtle inner vignette for depth */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(108,99,255,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,212,255,0.06) 0%, transparent 50%)',
                }}
              />
            </div>

            {/* ── Floating tech badges ── */}
            {[
              { label: '⚛ React',   top: '4%',   right: '-14%', delay: 0.5 },
              { label: '🟢 Node.js', bottom: '8%', left: '-16%',  delay: 0.7 },
              { label: '☕ Java',    top: '42%',  right: '-18%', delay: 0.9 },
            ].map(({ label, delay: d, ...pos }) => (
              <motion.div
                key={label}
                className="absolute px-3 py-1.5 glass rounded-lg text-xs font-mono text-accent border border-accent/20"
                style={{ ...pos, zIndex: 10 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: d, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {label}
              </motion.div>
            ))}

            {/* ── Online indicator dot ── */}
            <motion.div
              className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-green-400 border-2 border-dark"
              style={{ zIndex: 10 }}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              title="Available for hire"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono tracking-widest">SCROLL</span>
        <HiArrowDown size={14} />
      </motion.div>
    </section>
  )
}
