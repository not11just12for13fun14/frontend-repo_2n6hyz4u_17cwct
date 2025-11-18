import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', label: '+240% CTR' },
  { src: 'https://images.unsplash.com/photo-1516570161787-2fd917215a3d?q=80&w=1600&auto=format&fit=crop', label: '2.3x ROAS' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Scroll‑stopping' },
  { src: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1600&auto=format&fit=crop', label: 'Creative > Spend' }
]

export default function CreativeExamples() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

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
          Creatives That Actually Convert
        </motion.h2>
      </div>

      {/* Horizontal drift collage */}
      <div className="relative mt-16 overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 sm:gap-10 will-change-transform px-6">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative min-w-[70vw] sm:min-w-[36vw] aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img src={img.src} alt="creative" className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 bg-black/70 text-white text-xs sm:text-sm tracking-wide px-3 py-1.5 rounded-full">
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Optional: before/after slider mock */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 mt-24">
        <div className="relative rounded-3xl overflow-hidden border border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="relative aspect-[16/10]">
              <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base">Before</div>
            </div>
            <div className="relative aspect-[16/10]">
              <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1200&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm sm:text-base">After</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
