import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Reveal from './Reveal'
import {
  HiCode, HiLightningBolt, HiChip, HiDatabase,
  HiSparkles, HiAcademicCap,
} from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiTailwindcss, SiCplusplus, SiGit, SiCss, SiPhp, SiHtml5, SiExpress, SiPostman } from 'react-icons/si'
import { FaJava, FaCode, FaAws, FaDocker } from 'react-icons/fa'

// Skills exactly as on the CV — nothing added, nothing claimed
// that Prem has not listed himself.
const skillGroups = [
  {
    heading: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss, color: '#264de4' },
    ],
  },
  {
    heading: 'Frontend & Backend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'REST APIs', icon: FaCode, color: '#00d4ff' },
    ],
  },
  {
    heading: 'Databases & CS Fundamentals',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'SQL', icon: HiDatabase, color: '#00758f' },
      { name: 'Data Structures & Algorithms', icon: FaCode, color: '#ff6b6b' },
      { name: 'OOP', icon: FaCode, color: '#a78bfa' },
      { name: 'Operating Systems', icon: HiChip, color: '#f59e0b' },
      { name: 'DBMS', icon: HiDatabase, color: '#10b981' },
    ],
  },
  {
    heading: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: FaCode, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', icon: FaCode, color: '#007acc' },
      { name: 'IntelliJ IDEA', icon: FaCode, color: '#fe2857' },
      { name: 'Docker (basics)', icon: FaDocker, color: '#2496ed' },
      { name: 'AWS (basics)', icon: FaAws, color: '#ff9900' },
    ],
  },
]

const softSkills = [
  { name: 'Problem Solving' },
  { name: 'Team Collaboration' },
  { name: 'Communication' },
  { name: 'Time Management' },
  { name: 'Adaptability' },
  { name: 'Critical Thinking' },
  { name: 'Attention to Detail' },
  { name: 'Self-Learning' },
]

// Only verifiable achievements — from the CV, no invented numbers.
const achievements = [
  {
    icon: HiSparkles,
    color: '#f59e0b',
    title: 'GeeksforGeeks — Global Rank 5201',
    desc: 'Ranked 5201 globally on GeeksforGeeks for Data Structures & Algorithms problem solving.',
  },
  {
    icon: HiCode,
    color: '#10b981',
    title: 'CodeChef — Bronze Badge (50+ problems)',
    desc: 'Bronze badge on CodeChef for solving 50+ competitive programming problems.',
  },
  {
    icon: HiAcademicCap,
    color: '#6C63FF',
    title: 'Full Stack Training — Grade A',
    desc: 'Completed a 6-week live Full Stack Web Development training at Techvanto Academy (Jun–Jul 2025), earning Grade A.',
  },
  {
    icon: HiLightningBolt,
    color: '#00D4FF',
    title: '4 Real Projects on GitHub',
    desc: 'Warehouse Inventory, Smart Notes, AgriCommerce and Cyberthreat Intelligence AI — all public at github.com/premteach.',
  },
]

const stats = [
  { label: 'Projects on GitHub', value: 4, icon: HiCode, suffix: '' },
  { label: 'Certifications', value: 5, icon: HiAcademicCap, suffix: '' },
  { label: 'CodeChef Problems', value: 50, icon: HiLightningBolt, suffix: '+' },
  { label: 'GFG Global Rank', value: 5201, icon: HiChip, suffix: '' },
]

function SkillChip({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="glass-card px-4 py-3 flex items-center gap-3"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${skill.color}18` }}
      >
        <Icon size={16} style={{ color: skill.color }} />
      </div>
      <span className="text-sm font-semibold text-white/80">{skill.name}</span>
    </motion.div>
  )
}

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 flex flex-col items-center gap-2 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -4, boxShadow: '0 0 30px rgba(108,99,255,0.2)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
        style={{ background: 'rgba(108,99,255,0.15)' }}
      >
        <Icon size={18} className="text-primary" />
      </div>
      <div className="text-3xl font-black gradient-text">
        {inView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {stat.value}{stat.suffix}
          </motion.span>
        ) : '0'}
      </div>
      <p className="text-white/40 text-xs font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            Developer <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="section-subtitle">What I know — and what I've actually done with it</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>

        {skillGroups.map((group) => (
          <div className="mb-10" key={group.heading}>
            <Reveal>
              <h3 className="text-lg font-bold text-white/80 mb-5 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                {group.heading}
              </h3>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {group.skills.map((s, i) => <SkillChip key={s.name} skill={s} index={i} />)}
            </div>
          </div>
        ))}

        <div className="mb-14">
          <Reveal>
            <h3 className="text-lg font-bold text-white/80 mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-accent inline-block" />
              Soft Skills
            </h3>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <motion.div
                  className="glass-card px-5 py-3 flex items-center gap-2"
                  whileHover={{ scale: 1.06, y: -2 }}
                >
                  <span className="text-sm font-medium text-white/70">{s.name}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="text-lg font-bold text-white/80 mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-yellow-400 inline-block" />
              Achievements
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a, i) => {
              const Icon = a.icon
              return (
                <Reveal key={a.title} delay={i * 0.1}>
                  <motion.div
                    className="glass-card p-5 flex flex-col gap-3 h-full"
                    whileHover={{ y: -4, boxShadow: `0 0 24px ${a.color}22` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${a.color}18` }}
                    >
                      <Icon size={20} style={{ color: a.color }} />
                    </div>
                    <p className="text-sm font-bold text-white/90">{a.title}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{a.desc}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
