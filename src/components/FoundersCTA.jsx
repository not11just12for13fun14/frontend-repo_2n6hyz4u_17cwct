import { motion } from 'framer-motion'

export default function FoundersCTA() {
  return (
    <section className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="border-t border-black/10 pt-16">
          <motion.h4
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[9vw] sm:text-6xl font-extrabold leading-[0.95]"
          >
            We’re only opening this to a handful of brands.
          </motion.h4>
          <p className="mt-6 text-neutral-700 text-lg sm:text-xl max-w-2xl">
            Founders Program is live. Get the creative, the ads, the OS—all free during beta.
          </p>

          <div className="mt-12">
            <a
              href="#apply"
              className="inline-flex items-center gap-3 text-base sm:text-lg font-medium tracking-tight px-6 py-3 rounded-full border border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Apply for Founders Access
            </a>
          </div>

          <div className="mt-16 text-sm text-neutral-500">
            Like a premium magazine footnote—elegant, understated, direct.
          </div>
        </div>
      </div>
    </section>
  )
}
