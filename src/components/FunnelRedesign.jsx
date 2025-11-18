import { motion } from 'framer-motion'

export default function FunnelRedesign() {
  return (
    <section className="bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-[10vw] sm:text-7xl font-extrabold leading-[0.94] tracking-tight"
        >
          We Redesign the Entire Journey
        </motion.h3>
        <p className="mt-6 max-w-2xl text-neutral-700 text-lg sm:text-xl">
          Pages that load fast, guide action, and A/B their way to better performance.
        </p>
      </div>

      {/* Mock device frames */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mt-16 grid gap-8 sm:gap-10 grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="col-span-12 sm:col-span-7 bg-neutral-50 border border-black/10 rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
        >
          <div className="h-12 bg-black/90"></div>
          <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full object-cover aspect-[16/10]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="col-span-12 sm:col-span-5 bg-neutral-50 border border-black/10 rounded-[28px] overflow-hidden shadow-[0_14px_44px_rgba(0,0,0,0.05)]"
        >
          <div className="h-12 bg-black/90"></div>
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" className="w-full object-cover aspect-[10/16]" />
        </motion.div>
      </div>
    </section>
  )
}
