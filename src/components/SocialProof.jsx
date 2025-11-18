import { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    before: 'https://images.unsplash.com/photo-1503342452485-86ff0a2e7a86?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1520975624749-6cb9182046f6?q=80&w=1600&auto=format&fit=crop',
    tag: '2.3x ROAS'
  },
  {
    before: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1577382145345-c0cd59b5bbdb?q=80&w=1600&auto=format&fit=crop',
    tag: '71% scroll rate'
  },
  {
    before: 'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1600&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1520975624749-6cb9182046f6?q=80&w=1600&auto=format&fit=crop',
    tag: '−28% CAC'
  }
]

export default function SocialProof() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  const current = items[index]

  return (
    <section className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-[9vw] sm:text-6xl font-extrabold tracking-tight leading-[0.95]"
        >
          Social Proof
        </motion.h3>

        <div className="mt-10">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl overflow-hidden border border-black/10">
            <figure className="relative aspect-[16/10]">
              <img src={current.before} alt="before" className="absolute inset-0 w-full h-full object-cover" />
              <figcaption className="absolute top-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full border">Before</figcaption>
            </figure>
            <figure className="relative aspect-[16/10]">
              <img src={current.after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
              <figcaption className="absolute top-4 left-4 bg-white/80 backdrop-blur text-xs px-3 py-1 rounded-full border">After</figcaption>
              <div className="absolute bottom-4 right-4 text-xs sm:text-sm bg-black text-white px-3 py-1.5 rounded-full">{current.tag}</div>
            </figure>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={prev} className="m-3 sm:m-4 h-10 w-10 rounded-full bg-white shadow border hover:shadow-md transition" aria-label="previous"/>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={next} className="m-3 sm:m-4 h-10 w-10 rounded-full bg-white shadow border hover:shadow-md transition" aria-label="next"/>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-black' : 'w-3 bg-neutral-300'}`} aria-label={`go to slide ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
