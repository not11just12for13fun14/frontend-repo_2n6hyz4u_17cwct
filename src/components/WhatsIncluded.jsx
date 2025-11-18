import { motion } from 'framer-motion'

const modules = [
  { title: 'Strategy', copy: 'Proven funnel models tailored to your niche.' },
  { title: 'Creative', copy: 'Performance-first edits and art direction.' },
  { title: 'Funnels', copy: 'Landing experiences engineered to convert.' },
  { title: 'Media Buying', copy: 'Full Meta execution with attribution clarity.' },
]

export default function WhatsIncluded() {
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
          What’s Included
        </motion.h3>
        <p className="mt-4 text-neutral-700 max-w-2xl">You get our full team: strategists, performance editors, funnel builders, media buyers.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-12 gap-6">
          <div className="sm:col-span-7 rounded-3xl border border-black/10 p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {modules.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="rounded-2xl border border-black/10 p-5 hover:shadow-sm transition"
                >
                  <div className="text-2xl font-bold">{m.title}</div>
                  <p className="mt-2 text-neutral-700">{m.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-5 rounded-3xl border border-black/10 p-6 sm:p-8">
            <div className="text-sm uppercase tracking-widest text-neutral-500">Apex OS</div>
            <div className="mt-2 text-3xl font-semibold">Modular Growth System</div>
            <p className="mt-4 text-neutral-700">Plug-and-play building blocks that compound: creative system, testing cadence, funnel library, and media buying rituals.</p>

            <div className="mt-6 space-y-3">
              {['Briefs','Edit Queue','Funnel Library','Insights','Budgeting'].map((t, i) => (
                <div key={t} className="flex items-center justify-between rounded-xl border border-black/10 px-4 py-3">
                  <div className="font-medium">{t}</div>
                  <div className="text-xs bg-black text-white px-2 py-1 rounded-full">Module</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
