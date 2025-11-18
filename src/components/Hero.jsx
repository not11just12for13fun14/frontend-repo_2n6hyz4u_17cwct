import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-white">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Fade to white so we keep a crisp editorial canvas beyond hero */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/95 to-transparent" />
      </div>

      {/* Editorial copy overlay */}
      <div className="relative z-[1] mx-auto max-w-6xl px-6 sm:px-8 pt-28 sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="text-white mix-blend-difference leading-[0.95] tracking-[-0.02em] text-[9vw] sm:text-[7vw] font-[800]"
        >
          Most fashion brands don’t have an ad problem. They have a creative problem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 max-w-3xl text-white/90 mix-blend-difference text-lg sm:text-xl leading-relaxed"
        >
          We fix it, run the ads, rebuild what’s broken—and show you exactly what’s making money.
        </motion.p>
      </div>
    </section>
  )
}
