import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{ background: '#0A0A0F' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Animated rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/20"
              initial={{ width: 60, height: 60, opacity: 0 }}
              animate={{ width: 60 + i * 80, height: 60 + i * 80, opacity: [0, 0.4, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black gradient-text"
              style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)' }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PREM
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #6C63FF, #00D4FF)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
            <motion.p
              className="text-white/40 text-xs font-mono tracking-widest"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              INITIALIZING...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
