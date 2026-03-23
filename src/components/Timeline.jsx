import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Reveal from './Reveal'
import { HiAcademicCap, HiBriefcase, HiBadgeCheck, HiX, HiZoomIn, HiExternalLink } from 'react-icons/hi'

// ─── To add a certificate image ───────────────────────────────────────────────
// 1. Drop the image into src/img/  (e.g. cert-gfg-dsa.jpg)
// 2. Import it at the top:  import certGfgDsa from '../img/cert-gfg-dsa.jpg'
// 3. Set  image: certGfgDsa  on the matching cert object below
// ──────────────────────────────────────────────────────────────────────────────

// Example imports — uncomment and rename once you add the files:
// import certDsa    from '../img/cert-dsa.jpg'
// import certMern   from '../img/cert-mern.jpg'
// import certHack   from '../img/cert-hackathon.jpg'
// import certNptel  from '../img/cert-nptel.jpg'

const timelineEvents = [
  // {
  //   type: 'Training',
  //   icon: HiAcademicCap,
  //   color: '#6C63FF',
  //   title: 'Full Stack Web Development Training',
  //   org: 'Self-Directed / Online Platforms',
  //   period: '2022 – 2023',
  //   desc: 'Completed intensive training in React, Node.js, Express, and MongoDB. Built multiple projects to solidify full-stack skills.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  // },
  // {
  //   type: 'Internship',
  //   icon: HiBriefcase,
  //   color: '#00D4FF',
  //   title: 'Web Development Intern',
  //   org: 'Tech Company / Startup',
  //   period: 'Summer 2023',
  //   desc: 'Worked on real-world projects involving frontend development with React and backend APIs with Node.js. Collaborated in an Agile team.',
  //   tags: ['React', 'Express', 'Git', 'Agile'],
  // },
]

const certifications = [
  {
    color: '#f59e0b',
    title: 'Data Structures & Algorithms Bootcamp',
    org: 'GeeksforGeeks',
    period: '2023',
    desc: 'Completed intensive DSA bootcamp covering arrays, linked lists, trees, graphs, dynamic programming, and 200+ problem-solving exercises.',
    tags: ['DSA', 'Algorithms', 'C++', 'Java'],
    image: null,           // ← replace with: certDsa
    credentialUrl: '#',
  },
  {
    color: '#10b981',
    title: 'MERN Stack Bootcamp',
    org: 'GeeksforGeeks',
    period: '2023',
    desc: 'Certified in full-stack development with MongoDB, Express, React, and Node.js. Built and deployed 3 end-to-end projects.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: null,           // ← replace with: certMern
    credentialUrl: '#',
  },
  {
    color: '#6C63FF',
    title: 'Code Off Duty — Web Hackathon',
    org: 'Hackathon Event',
    period: '2023',
    desc: 'Built and deployed a full-stack web application within 24 hours. Implemented real-time features using React and Node.js. Competed against 200+ participants.',
    tags: ['React', 'Node.js', 'Hackathon'],
    image: null,           // ← replace with: certHack
    credentialUrl: '#',
  },
  {
    color: '#00D4FF',
    title: 'Cloud Computing & DevOps Fundamentals',
    org: 'NPTEL',
    period: '2023',
    desc: 'Completed NPTEL course covering AWS, Docker, Kubernetes, and cloud computing principles with hands-on lab exercises.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Cloud'],
    image: null,           // ← replace with: certNptel
    credentialUrl: '#',
  },
]

// ─── Timeline Item ─────────────────────────────────────────────────────────────
function TimelineItem({ event, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0
  const Icon = event.icon

  return (
    <div ref={ref} className={`relative flex items-start gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      <div className="hidden md:block flex-1" />
      <div className="relative flex flex-col items-center mx-4 md:mx-8 shrink-0">
        <motion.div
          className="w-12 h-12 rounded-2xl flex items-center justify-center z-10 shrink-0"
          style={{ background: `${event.color}20`, border: `2px solid ${event.color}50` }}
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
        >
          <Icon size={20} style={{ color: event.color }} />
        </motion.div>
        {index < timelineEvents.length - 1 && (
          <motion.div
            className="w-0.5 mt-2"
            style={{ background: `linear-gradient(180deg, ${event.color}40, transparent)` }}
            initial={{ height: 0 }}
            animate={inView ? { height: 80 } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          />
        )}
      </div>
      <motion.div
        className="flex-1 glass-card p-6 mb-8"
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <div>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
              style={{ background: `${event.color}15`, color: event.color }}
            >
              {event.type}
            </span>
            <h3 className="text-base font-bold text-white">{event.title}</h3>
            <p className="text-sm text-white/40">{event.org}</p>
          </div>
          <span className="text-xs font-mono text-white/30 bg-white/5 px-3 py-1 rounded-lg shrink-0">
            {event.period}
          </span>
        </div>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{event.desc}</p>
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-lg bg-white/5 text-white/40 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

// ─── Cert Card ─────────────────────────────────────────────────────────────────
function CertCard({ cert, index, onView }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: `0 0 28px ${cert.color}25` }}
    >
      {/* Certificate image area */}
      <div
        className="relative overflow-hidden cursor-pointer group"
        style={{ height: 180 }}
        onClick={() => cert.image && onView(cert)}
      >
        {cert.image ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <div className="flex items-center gap-2 bg-black/60 rounded-xl px-4 py-2 backdrop-blur-sm">
                <HiZoomIn size={16} className="text-white" />
                <span className="text-xs text-white font-medium">View Certificate</span>
              </div>
            </div>
          </>
        ) : (
          /* Stylish placeholder when no image */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 relative"
            style={{ background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}05)` }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: `${cert.color}20`, border: `2px solid ${cert.color}40` }}
            >
              <HiBadgeCheck size={32} style={{ color: cert.color }} />
            </div>
            <span className="text-xs text-white/30 font-mono">Certificate Preview</span>
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
            />
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${cert.color}18` }}
            >
              <HiBadgeCheck size={15} style={{ color: cert.color }} />
            </div>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: `${cert.color}15`, color: cert.color }}
            >
              {cert.period}
            </span>
          </div>
          {cert.credentialUrl && cert.credentialUrl !== '#' && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              title="View Credential"
            >
              <HiExternalLink size={15} />
            </a>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold text-white leading-snug">{cert.title}</h3>
          <p className="text-xs text-white/40 mt-0.5">{cert.org}</p>
        </div>

        <p className="text-xs text-white/55 leading-relaxed flex-1">{cert.desc}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {cert.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-white/40 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* View button — only if image exists */}
        {cert.image && (
          <motion.button
            className="mt-2 w-full py-2 rounded-xl text-xs font-semibold text-white/70 border border-white/10 hover:border-white/20 bg-white/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onView(cert)}
          >
            View Certificate
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

// ─── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-3xl w-full"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <p className="text-white font-semibold text-sm">{cert.title}</p>
            <p className="text-white/40 text-xs">{cert.org} · {cert.period}</p>
          </div>
          <button
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={onClose}
          >
            <HiX size={18} />
          </button>
        </div>
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full rounded-2xl shadow-2xl"
        />
        {cert.credentialUrl && cert.credentialUrl !== '#' && (
          <div className="flex justify-center mt-4">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/20 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/30 transition-colors"
            >
              <HiExternalLink size={15} />
              View Credential Online
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function Timeline() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="timeline" className="py-28 relative overflow-hidden">
      {/* <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 hidden md:block"
        style={{ height: '40%', background: 'linear-gradient(180deg, transparent, rgba(108,99,255,0.2) 20%, rgba(108,99,255,0.2) 80%, transparent)' }}
      /> */}

      <div className="max-w-5xl mx-auto px-6">

        {/* Timeline */}
        {/* <Reveal className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">Training & experience</p>
        </Reveal> */}

        <div className="relative mb-20">
          {timelineEvents.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div id="certifications" />
        <Reveal className="text-center mb-10">
          
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">Courses & credentials I've earned</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} onView={setActiveCert} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeCert && activeCert.image && (
          <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
