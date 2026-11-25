import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { HiDownload, HiMail, HiCheckCircle } from 'react-icons/hi'
import cvPdf from '../img/cv.pdf'

// A terminal that types itself — the first thing a recruiter sees after
// the hero, and the thing most portfolios don't have: the candidate,
// answering in the language of the job.
const SCRIPT = [
  { cmd: 'whoami', out: 'Prem Chandra Gupta — B.Tech CSE, LPU (2027)' },
  { cmd: 'cat role.txt', out: 'SDE · Full Stack · Backend · Frontend — internships & entry-level' },
  { cmd: 'ls skills/', out: 'React  Node.js  Express  Java  MongoDB  REST APIs  DSA' },
  { cmd: './hire-me --now', out: 'Available now — immediate joining. Email: premchandgupta8957@gmail.com' },
]

function useTerminal() {
  const [lines, setLines] = useState([]) // finished {cmd,out} lines
  const [typed, setTyped] = useState('') // current command being typed

  useEffect(() => {
    let line = 0
    let char = 0
    let timer = null
    let cancelled = false

    const tick = () => {
      if (cancelled) return
      const current = SCRIPT[line]
      if (!current) {
        // Pause, then replay from the top
        timer = setTimeout(() => {
          if (cancelled) return
          line = 0
          char = 0
          setLines([])
          setTyped('')
          timer = setTimeout(tick, 400)
        }, 5000)
        return
      }
      if (char <= current.cmd.length) {
        setTyped(current.cmd.slice(0, char))
        char += 1
        timer = setTimeout(tick, 55)
      } else {
        timer = setTimeout(() => {
          if (cancelled) return
          setLines((l) => [...l, current])
          setTyped('')
          line += 1
          char = 0
          timer = setTimeout(tick, 350)
        }, 450)
      }
    }
    timer = setTimeout(tick, 600)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  return { lines, typed }
}

const reasons = [
  {
    title: 'Ready on day 1',
    desc: 'React, Node.js, Express, Java and MongoDB — the exact stack in my 4 GitHub projects. I have already built auth, CRUD, REST APIs and dashboards, not just watched tutorials.',
    accent: '#10b981',
  },
  {
    title: 'Proof, not promises',
    desc: 'Every claim on this page links to real code. GeeksforGeeks global rank 5201, CodeChef Bronze for 50+ problems, and a threat-intel dashboard built on 19,204 real incidents.',
    accent: '#6C63FF',
  },
  {
    title: 'Available now',
    desc: 'Final-year student, graduating 2027, immediate joining. Looking for SDE, Full Stack, Backend or Frontend internships and entry-level roles — and I reply within 24 hours.',
    accent: '#00D4FF',
  },
]

const facts = [
  { value: '7.4', label: 'CGPA · B.Tech CSE' },
  { value: '5201', label: 'GFG global rank' },
  { value: '50+', label: 'CodeChef problems' },
  { value: '5', label: 'Certifications' },
  { value: '4', label: 'Projects on GitHub' },
]

export default function HireMe() {
  const { lines, typed } = useTerminal()

  return (
    <section id="hire" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            Why hire <span className="gradient-text">Prem?</span>
          </h2>
          <p className="section-subtitle">If you're hiring, here's the short version.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Terminal */}
          <Reveal direction="left">
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
                <span className="flex-1 text-center text-xs text-white/30 font-mono">prem@portfolio: ~</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed min-h-[240px] text-left">
                {lines.map((l, i) => (
                  <div key={i} className="mb-3">
                    <p className="text-white/90">
                      <span className="text-green-400">➜ ~ </span>
                      <span className="text-white">{l.cmd}</span>
                    </p>
                    <p className="text-accent/90 pl-5">{l.out}</p>
                  </div>
                ))}
                <p className="text-white/90">
                  <span className="text-green-400">➜ ~ </span>
                  <span>{typed}</span>
                  <span className="inline-block w-2 h-4 bg-white/70 animate-pulse ml-0.5 align-middle" />
                </p>
              </div>
            </div>
          </Reveal>

          {/* Reasons */}
          <div className="flex flex-col gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={0.1 + i * 0.08}>
                <motion.div
                  className="glass-card p-5 flex gap-4"
                  whileHover={{ y: -3, boxShadow: `0 0 24px ${r.accent}22` }}
                >
                  <HiCheckCircle size={22} style={{ color: r.accent }} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white/90 mb-1">{r.title}</p>
                    <p className="text-sm text-white/55 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap gap-4 mt-1">
                <motion.a
                  href={cvPdf}
                  download="Prem_Chandra_Gupta_CV.pdf"
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload size={16} /> Download CV
                </motion.a>
                <motion.a
                  href="mailto:premchandgupta8957@gmail.com"
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiMail size={16} /> Email Prem
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quick facts strip */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="glass-card p-4 text-center">
                <p className="text-2xl font-black gradient-text">{f.value}</p>
                <p className="text-xs text-white/40 mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
