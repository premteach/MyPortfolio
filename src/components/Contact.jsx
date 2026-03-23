import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import {
  HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle,
} from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const socials = [
  { icon: FaGithub,   href: 'https://github.com/Premchandra-gupta',       label: 'GitHub',   color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prem0493/',       label: 'LinkedIn', color: '#0077b5' },
]

function FloatingInput({ id, label, type = 'text', value, onChange, error, multiline = false, inputName }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
          active
            ? 'top-2 text-xs text-primary'
            : 'top-1/2 -translate-y-1/2 text-sm text-white/40'
        } ${multiline && !active ? 'top-4 translate-y-0' : ''}`}
      >
        {label}
      </label>
      <Tag
        id={id}
        name={inputName}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 5 : undefined}
        className={`w-full bg-white/5 border rounded-xl px-4 text-white text-sm outline-none transition-all duration-200 resize-none
          ${multiline ? 'pt-7 pb-3' : 'pt-6 pb-2 h-14'}
          ${focused ? 'border-primary/60 bg-primary/5' : 'border-white/10 hover:border-white/20'}
          ${error ? 'border-red-500/60' : ''}
        `}
      />
      {error && (
        <motion.p
          className="text-red-400 text-xs mt-1 ml-1"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C63FF, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">Have a project in mind? Let's build something great together.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm currently open to full-time roles, freelance projects, and interesting collaborations.
                Drop me a message and I'll get back within 24 hours.
              </p>
            </Reveal>

            {[
              { icon: HiMail, label: 'Email', value: 'premchandra@email.com', color: '#6C63FF' },
              { icon: HiLocationMarker, label: 'Location', value: 'INDIA - Gorkhpur, Uttar Pradesh', color: '#00D4FF' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} delay={0.15 + i * 0.1}>
                  <div className="flex items-center gap-4 glass-card p-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30">{item.label}</p>
                      <p className="text-sm font-medium text-white/80">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}

            {/* Socials */}
            <Reveal delay={0.3}>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 glass-card rounded-xl text-white/40 transition-colors"
                    whileHover={{ scale: 1.15, y: -3, color }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </Reveal>

            {/* Availability badge */}
            <Reveal delay={0.35}>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Current Status</p>
                  <p className="text-sm font-semibold text-green-400">Available for hire</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="glass-card p-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #00D4FF, transparent)' }}
              />

              <AnimatePresence mode="wait">
                {status === 'sent' || status === 'error' ? (
                  <motion.div
                    key="feedback"
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    {status === 'error' ? (
                      <>
                        <p className="text-5xl">⚠️</p>
                        <h3 className="text-xl font-bold text-red-400">Failed to Send</h3>
                        <p className="text-white/50 text-sm">Something went wrong. Please try again or email me directly.</p>
                      </>
                    ) : (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        >
                          <HiCheckCircle size={56} className="text-green-400" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                        <p className="text-white/50 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput
                        id="name" label="Your Name" inputName="from_name"
                        value={form.name} onChange={set('name')} error={errors.name}
                      />
                      <FloatingInput
                        id="email" label="Email Address" type="email" inputName="reply_to"
                        value={form.email} onChange={set('email')} error={errors.email}
                      />
                    </div>
                    <FloatingInput
                      id="subject" label="Subject (optional)" inputName="subject"
                      value={form.subject} onChange={set('subject')}
                    />
                    <FloatingInput
                      id="message" label="Your Message" inputName="message"
                      value={form.message} onChange={set('message')} error={errors.message}
                      multiline
                    />

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary flex items-center justify-center gap-3 mt-2 disabled:opacity-70"
                      whileHover={status !== 'sending' ? { scale: 1.03 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <HiPaperAirplane size={16} className="-rotate-45" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
