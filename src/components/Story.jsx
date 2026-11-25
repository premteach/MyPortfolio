import { motion } from 'framer-motion'
import Reveal from './Reveal'

// First person, plain words, only things that actually happened.
// No "passionate about cutting-edge technology" — just the story.
const entries = [
  {
    when: 'Aug 2023',
    title: 'I left home for LPU',
    text: "I'm from Gorakhpur, Uttar Pradesh. In August 2023 I joined B.Tech Computer Science at Lovely Professional University in Punjab. That's where I started writing code properly — Java first, then web development.",
  },
  {
    when: 'Apr 2025',
    title: 'My first full-stack app',
    text: 'AgriCommerce — an e-commerce site for farm products, in PHP and MySQL. Browsing, search, cart, checkout, orders, and an admin section. It was rough in places, but it worked end to end, and it taught me more than any tutorial.',
  },
  {
    when: 'Jun – Jul 2025',
    title: 'Six weeks of full-stack training',
    text: 'Techvanto Academy, live training in React and full-stack development. I finished with Grade A. That summer is when React really clicked for me.',
  },
  {
    when: 'Jan 2026',
    title: 'Smart Notes',
    text: 'A MERN note-taking app with real login — JWT auth, password hashing, password reset. Rich-text editor, auto-save, tags, pinning. The auth part took the longest, and it was worth it.',
  },
  {
    when: 'Apr 2026',
    title: 'Warehouse, with real DSA',
    text: 'A warehouse inventory system — Java core, React frontend. I used a Segment Tree for range stock queries, Dijkstra for the shortest picking path, and a HashMap for O(1) product lookup. DSA finally had a job to do, not just an exam.',
  },
  {
    when: 'Late 2026',
    title: 'The bug I actually found',
    text: 'My cyberthreat dashboard reads 19,204 real incidents into MongoDB and predicts urgency with scikit-learn. One day it crashed: the model predicted text labels, and the code tried int() on them. I fixed it by label-encoding the labels to numbers first. Small fix, but it was mine — I found it by running the thing, not by reading about it.',
  },
  {
    when: 'Now · Nov 2026',
    title: 'Looking for my first job',
    text: "Final year, graduating 2027. I've sent 100+ applications for SDE, Full Stack and Backend roles, and I'm still going. I don't have years of experience. I have real projects, real code on GitHub, and I learn fast. That's the honest version.",
  },
]

export default function Story() {
  return (
    <section id="story" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            My story, <span className="gradient-text">in my words</span>
          </h2>
          <p className="section-subtitle">Not a template. This is actually how it happened.</p>
        </Reveal>

        {/* A note, in his voice */}
        <Reveal delay={0.1}>
          <motion.div
            className="max-w-2xl mx-auto mb-16 rounded-2xl border border-amber-400/25 bg-amber-400/5 p-6 md:p-7"
            style={{ transform: 'rotate(-0.6deg)' }}
            whileHover={{ rotate: 0, scale: 1.01 }}
          >
            <p className="text-amber-200/90 text-base md:text-lg leading-relaxed font-mono">
              &ldquo;If you hire me, you won&apos;t get someone who has done this job
              for five years. You&apos;ll get someone who builds things,
              fixes his own bugs, and shows up every day. Give me a problem
              and I&apos;ll build the solution — and I can show you the code.&rdquo;
            </p>
            <p className="text-right text-white/40 text-sm mt-4 font-mono">— Prem</p>
          </motion.div>
        </Reveal>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  {i < entries.length - 1 && <div className="w-px flex-1 bg-white/10 mt-1" />}
                </div>
                <div>
                  <p className="text-xs font-mono text-accent mb-1">{e.when}</p>
                  <h3 className="text-lg font-bold text-white mb-1">{e.title}</h3>
                  <p className="text-white/55 text-sm md:text-base leading-relaxed">{e.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
