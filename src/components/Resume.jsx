import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import {
  HiDownload, HiEye, HiCode, HiAcademicCap,
  HiLightningBolt, HiX, HiZoomIn,
} from 'react-icons/hi'
import cvImage from '../img/cv.jpg'
import cvPdf from '../img/cv.pdf'

const highlights = [
  { icon: HiAcademicCap,  label: 'Education',   value: 'B.Tech CSE, LPU — 2027 · CGPA 7.4', color: '#6C63FF' },
  { icon: HiCode,         label: 'Core Stack',   value: 'React · Node.js · Express · Java · MongoDB', color: '#10b981' },
  { icon: HiLightningBolt,label: 'Seeking',      value: 'SDE / Full Stack / Backend — entry level', color: '#f59e0b' },
]

export default function Resume() {
  const [lightbox, setLightbox] = useState(false)

  return (
    <section id="resume" className="py-28 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">A snapshot of my skills and experience</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left — CV preview (clickable) */}
          <Reveal direction="left">
            <motion.div
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={() => setLightbox(true)}
            >
              {/* Shadow stack */}
              <div
                className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3 opacity-30"
                style={{ background: 'linear-gradient(135deg, #6C63FF22, #00D4FF22)', border: '1px solid rgba(108,99,255,0.2)' }}
              />
              <div
                className="absolute inset-0 rounded-2xl translate-x-1.5 translate-y-1.5 opacity-50"
                style={{ background: 'linear-gradient(135deg, #6C63FF22, #00D4FF22)', border: '1px solid rgba(108,99,255,0.2)' }}
              />

              {/* Main card */}
              <div className="relative glass-card overflow-hidden">
                {/* Mac-style top bar */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                  {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                    <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                  <div className="flex-1 h-5 rounded-md bg-white/5 ml-2 flex items-center px-3">
                    <span className="text-xs text-white/20 font-mono">Prem_Chandra_Gupta_CV.pdf</span>
                  </div>
                </div>

                {/* CV image */}
                <div className="relative overflow-hidden" style={{ maxHeight: 480 }}>
                  <img
                    src={cvImage}
                    alt="Prem Chandra Gupta CV"
                    className="w-full object-cover object-top"
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{ background: 'linear-gradient(transparent, rgba(26,26,46,0.97))' }}
                  />
                  {/* Hover zoom hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 rounded-2xl px-5 py-3 flex items-center gap-2 backdrop-blur-sm">
                      <HiZoomIn size={18} className="text-white" />
                      <span className="text-sm text-white font-medium">Click to view full</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <span className="text-xs text-white/40 font-mono">↓ Download for full version</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right — Info + CTA */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="text-white/60 text-base leading-relaxed">
                One page, up to date: my exact skills, my real GitHub projects, and my
                education — the same CV I send with job applications. Download it below.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <Reveal key={h.label} delay={0.1 + i * 0.08}>
                    <motion.div
                      className="glass-card p-4 flex flex-col gap-2"
                      whileHover={{ y: -3, boxShadow: `0 0 20px ${h.color}22` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${h.color}15` }}
                      >
                        <Icon size={15} style={{ color: h.color }} />
                      </div>
                      <p className="text-xs text-white/40">{h.label}</p>
                      <p className="text-sm font-semibold text-white/80">{h.value}</p>
                    </motion.div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-2">
                <motion.a
                  href={cvPdf}
                  download="Prem_Chandra_Gupta_CV.pdf"
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload size={16} />
                  Download Resume
                </motion.a>
                <motion.a
                  href={cvPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiEye size={16} />
                  View Online
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={() => setLightbox(false)}
              >
                <HiX size={18} />
              </button>
              <img
                src={cvImage}
                alt="Prem Chandra Gupta CV Full"
                className="w-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
