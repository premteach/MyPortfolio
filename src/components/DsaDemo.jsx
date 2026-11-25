import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

// Interactive Binary Search — proof of DSA skill a recruiter can play
// with in 20 seconds, instead of a claim on a slide.
const ARRAY = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

export default function DsaDemo() {
  const [target, setTarget] = useState(23)
  const [low, setLow] = useState(null)
  const [high, setHigh] = useState(null)
  const [mid, setMid] = useState(null)
  const [steps, setSteps] = useState([])
  const [found, setFound] = useState(null)
  const [running, setRunning] = useState(false)

  const reset = () => {
    setLow(null)
    setHigh(null)
    setMid(null)
    setSteps([])
    setFound(null)
    setRunning(false)
  }

  const stepOnce = (lo, hi, log) => {
    if (lo > hi) {
      setFound(false)
      setRunning(false)
      setSteps([...log, `low (${lo}) > high (${hi}) — ${target} is not in the array.`])
      return { lo, hi, done: true }
    }
    const m = Math.floor((lo + hi) / 2)
    setLow(lo)
    setHigh(hi)
    setMid(m)
    const next = [...log, `mid = ${m} → arr[${m}] = ${ARRAY[m]}. ${ARRAY[m] === target ? 'Match!' : ARRAY[m] < target ? `${ARRAY[m]} < ${target}, so search right.` : `${ARRAY[m]} > ${target}, so search left.`}`]
    setSteps(next)
    if (ARRAY[m] === target) {
      setFound(true)
      setRunning(false)
      return { lo, hi, done: true }
    }
    return { lo: ARRAY[m] < target ? m + 1 : lo, hi: ARRAY[m] < target ? hi : m - 1, done: false, log: next }
  }

  const runAll = () => {
    reset()
    setRunning(true)
    let lo = 0
    let hi = ARRAY.length - 1
    let log = []
    let guard = 0
    const timer = setInterval(() => {
      guard += 1
      if (guard > 12) { clearInterval(timer); setRunning(false); return }
      const res = stepOnce(lo, hi, log)
      lo = res.lo
      hi = res.hi
      log = res.log || log
      if (res.done) clearInterval(timer)
    }, 900)
  }

  const step = () => {
    if (found !== null) return
    setRunning(true)
    const lo = low === null ? 0 : low
    const hi = high === null ? ARRAY.length - 1 : high
    stepOnce(lo, hi, steps)
  }

  const cellState = (i) => {
    if (mid === i) return 'mid'
    if (low !== null && high !== null && i >= low && i <= high) return 'in-range'
    if (low !== null && high !== null) return 'out'
    return ''
  }

  return (
    <section id="dsa-demo" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="section-title">
            Don&apos;t take my word for it — <span className="gradient-text">try my DSA</span>
          </h2>
          <p className="section-subtitle">Binary search, live. Pick a number and watch it work — O(log n), every time.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card p-6 md:p-8">
            <p className="text-sm text-white/50 mb-4 font-mono">sorted array · pick a target, then press Run or Step</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {ARRAY.map((v) => (
                <button
                  key={v}
                  onClick={() => { setTarget(v); reset() }}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    target === v ? 'text-white' : 'glass text-white/50 hover:text-white'
                  }`}
                  style={target === v ? { background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' } : {}}
                >
                  {v}
                </button>
              ))}
              <button
                onClick={() => { setTarget(30); reset() }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  target === 30 ? 'text-white' : 'glass text-white/50 hover:text-white'
                }`}
                style={target === 30 ? { background: 'linear-gradient(135deg, #f97316, #ef4444)' } : {}}
              >
                30 (not in array)
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6">
              {ARRAY.map((v, i) => {
                const state = cellState(i)
                return (
                  <motion.div
                    key={i}
                    className="rounded-xl border p-3 text-center"
                    animate={{ scale: state === 'mid' ? 1.1 : 1 }}
                    style={{
                      background: state === 'mid' ? 'rgba(108,99,255,0.35)' : state === 'in-range' ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.03)',
                      borderColor: state === 'mid' ? '#6C63FF' : state === 'in-range' ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.08)',
                      opacity: state === 'out' ? 0.35 : 1,
                    }}
                  >
                    <p className="text-xs text-white/30 font-mono">[{i}]</p>
                    <p className="text-lg font-bold text-white">{v}</p>
                    <p className="text-[10px] font-mono text-white/40 h-3">
                      {state === 'mid' ? 'MID' : low === i ? 'LOW' : high === i ? 'HIGH' : ''}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button onClick={runAll} disabled={running && found === null} className="btn-primary disabled:opacity-60">
                ▶ Run binary search for {target}
              </button>
              <button onClick={step} disabled={found !== null} className="btn-outline disabled:opacity-40">
                Step →
              </button>
              <button onClick={reset} className="btn-outline">Reset</button>
              {found === true && (
                <span className="self-center text-sm font-semibold text-green-400">✓ Found {target} in {steps.length} comparison{steps.length > 1 ? 's' : ''} — not 10.</span>
              )}
              {found === false && (
                <span className="self-center text-sm font-semibold text-orange-400">✕ {target} is not in the array — proven in {steps.length} steps.</span>
              )}
            </div>

            <div className="bg-black/40 rounded-xl p-4 font-mono text-xs md:text-sm text-white/60 min-h-[96px]">
              {steps.length === 0 ? (
                <p className="text-white/30">// Steps will appear here. A linear search would check up to 10 elements — binary search checks at most 4.</p>
              ) : (
                steps.map((s, i) => <p key={i} className="mb-1"><span className="text-accent">{i + 1}.</span> {s}</p>)
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
