import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function OSIntegration() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={ref} className="relative bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-[10vw] sm:text-7xl font-extrabold leading-[0.94] tracking-tight"
        >
          Track Real Profit, Not Guesswork
        </motion.h3>
        <p className="mt-6 max-w-3xl text-neutral-700 text-lg sm:text-xl">
          Live Shopify + Meta integration. Margin-aware tracking. Attribution that actually works.
        </p>
      </div>

      <div className="mt-16 relative">
        <motion.div style={{ y }} className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="rounded-3xl overflow-hidden border border-black/10">
            {/* Dark UI over light canvas */}
            <div className="bg-[#0B0B0B] text-white p-6 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
                <div className="sm:col-span-7">
                  <div className="text-3xl sm:text-5xl font-semibold tracking-tight">Apex OS</div>
                  <div className="mt-3 text-white/70 max-w-md">Command center for what actually moves profit. Pulls live data, reconciles margin, surfaces actions.</div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { k: 'Net Profit', v: '+34% WoW' },
                      { k: 'Blended ROAS', v: '2.3x' },
                      { k: 'CAC', v: '-19%' },
                      { k: 'AOV', v: '+12%' }
                    ].map((s, i) => (
                      <motion.div
                        key={s.k}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.5 }}
                        className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4"
                      >
                        <div className="text-xs text-white/60">{s.k}</div>
                        <div className="text-lg sm:text-2xl font-medium mt-1">{s.v}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <div className="aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                    <img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
