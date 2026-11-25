import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Reveal from './Reveal'
import { HiAcademicCap, HiBriefcase, HiBadgeCheck, HiX, HiZoomIn, HiExternalLink } from 'react-icons/hi'

// Real journey only — from the CV. Techvanto is TRAINING, not an internship.
const timelineEvents = [
  {
    type: 'Education',
    icon: HiAcademicCap,
    color: '#6C63FF',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Lovely Professional University, Punjab — CGPA 7.4',
    period: 'Aug 2023 – Present (2027)',
    desc: 'Final-year B.Tech CSE student. Core focus: Data Structures & Algorithms, OOP, Operating Systems and DBMS, alongside full-stack web development.',
    tags: ['DSA', 'OOP', 'OS', 'DBMS'],
  },
  {
    type: 'Training',
    icon: HiBriefcase,
    color: '#00D4FF',
    title: 'Full Stack Web Development Training',
    org: 'Techvanto Academy — Grade A',
    period: 'Jun 2025 – Jul 2025',
    desc: 'Completed a 6-week live training programme in React.js and modern full-stack technologies. Built dynamic, responsive applications following component-based architecture, clean coding, debugging and performance optimisation.',
    tags: ['React.js', 'Full Stack', 'Clean Code'],
  },
  {
    type: 'Education',
    icon: HiAcademicCap,
    color: '#10b981',
    title: 'Intermediate (12th) — 68.8%',
    org: 'Mahatma Gandhi Inter College, Uttar Pradesh',
    period: '2021 – 2022',
    desc: 'Intermediate from Mahatma Gandhi Inter College, Uttar Pradesh.',
    tags: ['Intermediate'],
  },
  {
    type: 'Education',
    icon: HiAcademicCap,
    color: '#f59e0b',
    title: 'Matriculation (10th) — 79.3%',
    org: 'T.D. Memorial Intermediate College, Uttar Pradesh',
    period: '2019 – 2020',
    desc: 'Matriculation from T.D. Memorial Intermediate College, Uttar Pradesh.',
    tags: ['Matriculation'],
  },
]

// Certifications exactly as listed on the CV. No credential links are
// claimed — add a real link only when you have the certificate URL.
const certifications = [
  {
    color: '#2496ed',
    title: 'Introduction to Docker and Kubernetes',
    org: 'thingQbator',
    period: 'Jan 2026',
    desc: 'Introduction to Docker and Kubernetes, covering container basics.',
    tags: ['Docker', 'Kubernetes'],
    image: null,
    credentialUrl: '#',
  },
  {
    color: '#ff9900',
    title: 'AWS DevOps',
    org: 'Amazon Web Services',
    period: 'Nov 2025',
    desc: 'AWS DevOps certification from Amazon Web Services.',
    tags: ['AWS', 'DevOps'],
    image: null,
    credentialUrl: '#',
  },
  {
    color: '#f59e0b',
    title: 'Data Structures & Algorithms Bootcamp',
    org: 'GeeksforGeeks',
    period: 'Nov 2025',
    desc: 'DSA bootcamp covering arrays, linked lists, trees, graphs and dynamic programming.',
    tags: ['DSA', 'Algorithms', 'C++', 'Java'],
    image: null,
    credentialUrl: '#',
  },
  {
    color: '#10b981',
    title: 'MERN Stack Bootcamp',
    org: 'GeeksforGeeks',
    period: 'Nov 2025',
    desc: 'Full-stack development with MongoDB, Express, React and Node.js.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: null,
    credentialUrl: '#',
  },
  {
    color: '#00D4FF',
    title: 'Cloud Computing',
    org: 'NPTEL',
    period: 'Oct 2025',
    desc: 'Cloud computing course from NPTEL.',
    tags: ['Cloud', 'AWS', 'Docker'],
    image: null,
    credentialUrl: '#',
  },
]

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
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
              <div className="flex items-center gap-2 bg-black/60 rounded-xl px-4 py-2 backdrop-blur-sm">
                <HiZoomIn size={16} className="text-white" />
                <span className="text-xs text-white font-medium">View Certificate</span>
              </div>
            </div>
          </>
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 relative"
            style={{ background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}05)` }}
          >
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
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${cert.color}60, transparent)` }}
            />
          </div>
        )}
      </div>

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

export default function Timeline() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="timeline" className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">Education &amp; training</p>
        </Reveal>

        <div className="relative mb-20">
          {timelineEvents.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} />
          ))}
        </div>

        <div id="certifications" />
        <Reveal className="text-center mb-10">
          <h2 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">Courses &amp; credentials I&apos;ve earned</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} onView={setActiveCert} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && activeCert.image && (
          <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
