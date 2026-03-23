import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Reveal from './Reveal'
import {
  HiCode, HiLightningBolt, HiChip, HiDatabase,
  HiSparkles, HiAcademicCap,
} from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiJavascript, SiTailwindcss, SiCplusplus, SiLaravel, SiGit, SiAngular, SiCss } from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

const skills = [
  { name: 'Java',        icon: FaJava,       color: '#f89820' },
  { name: 'JavaScript',  icon: SiJavascript, color: '#f7df1e' },
  { name: 'C',           icon: FaCode,       color: '#a8b9cc' },
  { name: 'C++',         icon: SiCplusplus,  color: '#00599c' },
  { name: 'DSA',         icon: FaCode,       color: '#ff6b6b' },
  { name: 'CSS',         icon: SiCss,        color: '#264de4' },
  { name: 'React.js',    icon: SiReact,      color: '#61dafb' },
  { name: 'Angular',     icon: SiAngular,    color: '#dd0031' },
  { name: 'Node.js',     icon: SiNodedotjs,  color: '#68a063' },
  { name: 'Laravel',     icon: SiLaravel,    color: '#ff2d20' },
  { name: 'MongoDB',     icon: SiMongodb,    color: '#47a248' },
  { name: 'MySQL',       icon: SiMysql,      color: '#00758f' },
  { name: 'Tailwind CSS',icon: SiTailwindcss,color: '#38bdf8' },
  { name: 'Git',         icon: SiGit,        color: '#f05032' },
]

const softSkills = [
  { name: 'Problem Solving',    emoji: '🧩' },
  { name: 'Team Collaboration', emoji: '🤝' },
  { name: 'Communication',      emoji: '💬' },
  { name: 'Time Management',    emoji: '⏱️' },
  { name: 'Adaptability',       emoji: '🔄' },
  { name: 'Critical Thinking',  emoji: '🧠' },
  { name: 'Attention to Detail',emoji: '🔍' },
  { name: 'Self-Learning',      emoji: '📚' },
]

const achievements = [
  {
    icon: HiSparkles,
    color: '#f59e0b',
    title: 'Top Performer',
    desc: 'Recognized as top performer during internship for delivering features ahead of schedule.',
  },
  {
    icon: HiAcademicCap,
    color: '#6C63FF',
    title: '200+ DSA Problems',
    desc: 'Solved 200+ problems on LeetCode & HackerRank covering arrays, trees, graphs, and DP.',
  },
  {
    icon: HiCode,
    color: '#10b981',
    title: '12+ Projects Built',
    desc: 'Built and deployed 12+ full-stack projects spanning e-commerce, productivity, and management tools.',
  },
  {
    icon: HiLightningBolt,
    color: '#00D4FF',
    title: 'Full Stack Certified',
    desc: 'Completed certified training in Full Stack Web Development with hands-on project evaluation.',
  },
]

const stats = [
  { label: 'Projects Built',   value: 12,  icon: HiCode,         suffix: '+' },
  { label: 'Problems Solved',  value: 200, icon: HiLightningBolt, suffix: '+' },
  { label: 'Technologies',     value: 14,  icon: HiChip,          suffix: '+' },
  { label: 'Databases Used',   value: 2,   icon: HiDatabase,      suffix: '' },
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
          <p className="section-subtitle">Skills, stats & achievements at a glance</p>
        </Reveal>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>

        {/* Technical Skills */}
        <div className="mb-14">
          <Reveal>
            <h3 className="text-lg font-bold text-white/80 mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-primary inline-block" />
              Technical Skills
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {skills.map((s, i) => <SkillChip key={s.name} skill={s} index={i} />)}
          </div>
        </div>

        {/* Soft Skills */}
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
                  <span className="text-lg">{s.emoji}</span>
                  <span className="text-sm font-medium text-white/70">{s.name}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Achievements */}
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
