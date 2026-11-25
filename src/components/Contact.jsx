import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import {
  HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle, HiPhone,
} from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const EMAIL = 'premchandgupta8957@gmail.com'
const PHONE = '+91-8957980493'

const socials = [
  { icon: FaGithub, href: 'https://github.com/premteach', label: 'GitHub', color: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/prem0493/', label: 'LinkedIn', color: '#0077b5' },
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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sent

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  // No backend / EmailJS keys are configured for this site, so the form
  // opens the visitor's email app addressed to Prem instead of failing
  // silently. Recruiters can also email him directly from the card.
  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    const subject = encodeURIComponent(form.subject || `Hello Prem — from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
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
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">Hiring for an SDE / Full Stack / Backend role? I&apos;d love to hear from you.</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="text-white/50 text-sm leading-relaxed">
                I&apos;m a final-year B.Tech CSE student (2027) at Lovely Professional University,
                open to SDE, Full Stack, Backend and Frontend internships and entry-level roles.
                Drop me a message and I&apos;ll get back within 24 hours.
              </p>
            </Reveal>

            {[
              { icon: HiMail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: '#6C63FF' },
              { icon: HiPhone, label: 'Phone', value: PHONE, href: `tel:${PHONE.replace(/-/g, '')}`, color: '#10b981' },
              { icon: HiLocationMarker, label: 'Location', value: 'Gorakhpur, Uttar Pradesh, India', href: null, color: '#00D4FF' },
            ].map((item, i) => {
              const Icon = item.icon
              const inner = (
                <div className="flex items-center gap-4 glass-card p-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/30">{item.label}</p>
                    <p className="text-sm font-medium text-white/80 break-all">{item.value}</p>
                  </div>
                </div>
              )
              return (
                <Reveal key={item.label} delay={0.15 + i * 0.1}>
                  {item.href ? <a href={item.href}>{inner}</a> : inner}
                </Reveal>
              )
            })}

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

            <Reveal delay={0.35}>
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <div>
                  <p className="text-xs text-white/40">Current Status</p>
                  <p className="text-sm font-semibold text-green-400">Available for hire — immediate joining</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="glass-card p-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #00D4FF, transparent)' }}
              />

              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="feedback"
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <HiCheckCircle size={56} className="text-green-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">Opening your email app…</h3>
                    <p className="text-white/50 text-sm">Your message is addressed to {EMAIL}. If it didn&apos;t open, email me directly at that address.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
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
                      className="btn-primary flex items-center justify-center gap-3 mt-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <HiPaperAirplane size={16} className="-rotate-45" />
                      Send Message
                    </motion.button>
                    <p className="text-center text-xs text-white/30">
                      This opens your email app addressed to {EMAIL} — or email me directly.
                    </p>
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
