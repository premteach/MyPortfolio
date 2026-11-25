import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[9997] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #6C63FF, #00D4FF)',
      }}
    />
  )
}
