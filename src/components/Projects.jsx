import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiMysql, SiJavascript,
  SiAngular, SiLaravel, SiPhp, SiHtml5, SiCss, SiGit,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import agriImg from '../img/Agicommers.png'
import noteImg from '../img/Note-app.png'
import portfolioImg from '../img/portfolio.png'

const techIcons = {
  React: SiReact, 'Node.js': SiNodedotjs, MongoDB: SiMongodb,
  Express: SiExpress, Tailwind: SiTailwindcss, MySQL: SiMysql,
  JavaScript: SiJavascript, Java: FaJava,
  Angular: SiAngular, Laravel: SiLaravel, PHP: SiPhp,
  HTML: SiHtml5, CSS: SiCss, Git: SiGit,
}

const projects = [
  {
    id: 1,
    title: 'AgriCommerce',
    tagline: 'Farm-to-table e-commerce platform',
    description:
      'A full-stack agricultural marketplace connecting farmers directly to consumers. Features real-time inventory, order tracking, and payment integration.',
    category: 'Full Stack',
    tech: ['HTML', 'Tailwind', 'PHP', 'MySQL'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    accent: '#10b981',
    github: 'https://github.com/Premchandra-gupta/agricommerce',
    demo: '#',
    featured: true,
    image: agriImg,
  },
  {
    id: 2,
    title: 'Note App',
    tagline: 'Smart note-taking with rich text',
    description:
      'A productivity-focused note application with markdown support, tagging, search, and cloud sync. Built with a clean, distraction-free UI.',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accent: '#3b82f6',
    github: 'https://github.com/Premchandra-gupta/Web-Based-Note-Taking',
    demo: '#',
    featured: false,
    image: noteImg,
  },
  {
    id: 3,
    title: 'Portfolio v1',
    tagline: 'Personal developer portfolio',
    description:
      'My personal portfolio built with Angular. Responsive design with smooth scroll, animations, and contact form.',
    category: 'Frontend',
    tech: ['Angular', 'CSS', 'Git'],
    gradient: 'from-purple-500/20 to-pink-500/10',
    accent: '#a855f7',
    github: 'https://github.com/Premchandra-gupta',
    demo: '#',
    featured: false,
    image: portfolioImg,
  },
  {
    id: 4,
    title: 'Student Management',
    tagline: 'CRUD system with Java backend',
    description:
      'A desktop-grade student management system with CRUD operations, search, and report generation. Built with Java Servlets and MySQL.',
    category: 'Full Stack',
    tech: ['Java', 'MySQL', 'JavaScript'],
    gradient: 'from-orange-500/20 to-red-500/10',
    accent: '#f97316',
    github: 'https://github.com/Premchandra-gupta',
    demo: '#',
    featured: false,
    image: null,
  },
]

const filters = ['All', 'Full Stack', 'Frontend']

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`relative glass-card overflow-hidden cursor-pointer group bg-gradient-to-br ${project.gradient}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-mono z-10"
          style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}44` }}
        >
          Featured
        </div>
      )}

      {/* Card top — project screenshot or visual area */}
      <div className="relative h-44 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 flex items-center justify-center text-6xl font-black opacity-10 select-none"
              style={{ color: project.accent }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </div>
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </>
        )}
        {/* Glow orb overlay */}
        <motion.div
          className="absolute rounded-full blur-3xl"
          style={{ width: 120, height: 120, background: `${project.accent}33`, top: '20%', left: '30%' }}
          animate={hovered ? { scale: 1.5, opacity: 0.6 } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.4 }}
        />
        {/* Dark overlay on hover for readability */}
        {project.image && (
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))', opacity: hovered ? 1 : 0.3 }}
          />
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-xs text-white/40 font-mono mt-0.5">{project.tagline}</p>
          </div>
          <span
            className="text-xs px-2 py-1 rounded-lg font-medium shrink-0"
            style={{ background: `${project.accent}15`, color: project.accent }}
          >
            {project.category}
          </span>
        </div>

        {/* Description — slides in on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              className="text-white/60 text-sm leading-relaxed mb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => {
            const Icon = techIcons[t]
            return (
              <div
                key={t}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-white/50 bg-white/5 border border-white/5"
              >
                {Icon && <Icon size={11} />}
                {t}
              </div>
            )
          })}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent})` }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <HiExternalLink size={13} /> Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white/70 bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub size={13} /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C63FF, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built that I'm proud of</p>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.1}>
          <div className="flex gap-2 mb-10 flex-wrap">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === f
                    ? 'text-white'
                    : 'text-white/40 glass hover:text-white/70'
                }`}
                style={active === f ? { background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <motion.a
              href="https://github.com/Premchandra-gupta"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl text-white/60 hover:text-white border border-white/10 hover:border-primary/40 transition-all font-medium"
              whileHover={{ scale: 1.04, y: -2 }}
            >
              <FaGithub size={20} />
              View all projects on GitHub
              <HiCode size={16} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
