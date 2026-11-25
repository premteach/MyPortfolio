import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub, FaJava } from 'react-icons/fa'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiMysql, SiJavascript,
  SiPhp, SiHtml5, SiCss, SiGit, SiPython, SiFastapi,
} from 'react-icons/si'
import agriImg from '../img/Agicommers.png'
import noteImg from '../img/Note-app.png'

const techIcons = {
  React: SiReact, 'Node.js': SiNodedotjs, MongoDB: SiMongodb,
  Express: SiExpress, Tailwind: SiTailwindcss, MySQL: SiMysql,
  JavaScript: SiJavascript, Java: FaJava,
  PHP: SiPhp, HTML: SiHtml5, CSS: SiCss, Git: SiGit,
  Python: SiPython, FastAPI: SiFastapi,
}

// Only projects that are actually on github.com/premteach, described
// exactly as they are built — no invented features, no dead demo links.
const projects = [
  {
    id: 1,
    title: 'Cyberthreat Intelligence AI',
    tagline: 'Threat-intel dashboard · 19,204 real incidents',
    description:
      'Threat-intelligence dashboard built on 19,204 real incidents stored in MongoDB. A scikit-learn classifier predicts incident urgency, with a React frontend and FastAPI backend for prediction, similar-incident search and analysis. Also has the original Streamlit version.',
    category: 'Full Stack',
    tech: ['Python', 'React', 'FastAPI', 'MongoDB', 'JavaScript'],
    gradient: 'from-red-500/20 to-orange-500/10',
    accent: '#f97316',
    github: 'https://github.com/premteach/cyberthreat-intelligence-ai',
    featured: true,
    image: null,
    code: {
      file: 'app/services/inference_service.py',
      lines: [
        'class InferenceService:',
        '    """',
        '    Handles loading of the latest',
        '    model artifacts and running',
        '    inference.',
        '    """',
      ],
    },
    highlights: ['19,204 incidents in MongoDB', 'React + FastAPI + Streamlit', 'Urgency prediction'],
  },
  {
    id: 2,
    title: 'Warehouse Inventory Optimization',
    tagline: 'Java core + React frontend · DSA in action',
    description:
      'Warehouse inventory system with a Java command-line core and a React frontend in the same repo — add, remove, update and search products, with low-stock alerts and file persistence. Applies DSA throughout: HashMap for O(1) lookup, Binary Search, Segment Tree for range stock queries, Greedy allocation and Dijkstra for the shortest picking path.',
    category: 'Full Stack',
    tech: ['Java', 'React', 'JavaScript', 'CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accent: '#3b82f6',
    github: 'https://github.com/premteach/WAREHOUSE-INVENTORY',
    featured: true,
    image: null,
    code: {
      file: 'src/utils/SegmentTree.java',
      lines: [
        'public class SegmentTree {',
        '    private int[] tree;',
        '    public SegmentTree(int[] arr) {',
        '        n = arr.length;',
        '        tree = new int[4 * n];',
        '        build(arr, 0, 0, n - 1);',
        '    }',
      ],
    },
    highlights: ['Segment Tree + Dijkstra', 'Low-stock alerts', 'Best-seller tracking'],
  },
  {
    id: 3,
    title: 'Smart Notes',
    tagline: 'MERN note-taking with JWT auth',
    description:
      'Full-stack MERN note-taking app: write, save and organise notes with a rich-text editor, auto-save, and search across titles, content and tags. JWT authentication with password hashing, tagging and filtering, pin/unpin, soft delete with restore, dark/light mode, and email reminders with password reset.',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    accent: '#8b5cf6',
    github: 'https://github.com/premteach/Web-Based-Note-Taking',
    featured: false,
    image: noteImg,
    highlights: ['JWT auth + password reset', 'Rich-text editor + auto-save', 'Pin, tags, soft delete'],
  },
  {
    id: 4,
    title: 'AgriCommerce',
    tagline: 'Farm-products e-commerce · PHP + MySQL',
    description:
      'E-commerce application for agricultural products: product browsing with search suggestions, cart, checkout and order management. Includes user authentication, an admin section, and MySQL database handling for products and orders.',
    category: 'Full Stack',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    gradient: 'from-green-500/20 to-emerald-500/10',
    accent: '#10b981',
    github: 'https://github.com/premteach/agricommerce',
    featured: false,
    image: agriImg,
    highlights: ['Cart + checkout + orders', 'Admin section', 'Search suggestions'],
  },
]

const filters = ['All', 'Full Stack']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className={`relative glass-card overflow-hidden group bg-gradient-to-br ${project.gradient}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      {project.featured && (
        <div
          className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs font-mono z-10"
          style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}44` }}
        >
          Featured
        </div>
      )}

      <div className="relative h-44 overflow-hidden">
        {project.code && !project.image ? (
          <div className="absolute inset-0 bg-black/50 p-4 font-mono text-[11px] leading-relaxed text-white/60 overflow-hidden">
            <p className="text-white/30 mb-2">{project.code.file}</p>
            {project.code.lines.map((ln, i) => (
              <p key={i} className="whitespace-pre">{ln}</p>
            ))}
            <p className="text-accent/70 mt-2">▸ real code from the repo — click View Code to read it all</p>
          </div>
        ) : project.image ? (
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
        {project.image && (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }}
          />
        )}
      </div>

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

        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="text-xs px-2 py-1 rounded-lg font-medium"
              style={{ background: `${project.accent}12`, color: project.accent }}
            >
              ✓ {h}
            </li>
          ))}
        </ul>

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

        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent})` }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaGithub size={13} /> View Code on GitHub
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
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C63FF, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Real projects, live on GitHub — click through to the code</p>
        </Reveal>

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

        <motion.div className="grid md:grid-cols-2 gap-6" layout>
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

        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <motion.a
              href="https://github.com/premteach"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl text-white/60 hover:text-white border border-white/10 hover:border-primary/40 transition-all font-medium"
              whileHover={{ scale: 1.04, y: -2 }}
            >
              <FaGithub size={20} />
              View all projects on GitHub
              <HiExternalLink size={16} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
