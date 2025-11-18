import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const blocks = [
  {
    k: 'Creative',
    title: 'Creative',
    copy: 'Scroll-stopping visuals designed for Meta performance.',
    img: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    k: 'Ads',
    title: 'Ads',
    copy: 'We run Meta campaigns with data-backed funnels. No guesswork, just repeatable scale.',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    k: 'Funnels',
    title: 'Funnels',
    copy: 'We don’t just test ads. We build out full-funnel journeys that compound results.',
    img: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function WhyUs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section ref={ref} className="relative bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-[9vw] sm:text-6xl font-extrabold tracking-tight leading-[0.95]"
        >
          Why Brands Work With Us
        </motion.h2>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 sm:gap-12 will-change-transform px-6">
          {blocks.map((b, i) => (
            <motion.article
              key={b.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative min-w-[82vw] sm:min-w-[42vw]"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/10">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
              </div>
              <div className="mt-5">
                <div className="text-3xl sm:text-5xl font-extrabold tracking-tight">{b.title}</div>
                <p className="mt-3 text-neutral-700 max-w-lg text-base sm:text-lg">{b.copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
