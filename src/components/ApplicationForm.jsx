import { useState } from 'react'

export default function ApplicationForm() {
  const [form, setForm] = useState({
    brand_name: '',
    website: '',
    instagram: '',
    monthly_revenue: '',
    biggest_struggle: ''
  })
  const [status, setStatus] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('Application received. We’ll be in touch.')
      setForm({ brand_name: '', website: '', instagram: '', monthly_revenue: '', biggest_struggle: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="apply" className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h3 className="text-[9vw] sm:text-6xl font-extrabold tracking-tight leading-[0.95]">Apply</h3>
        <p className="mt-4 text-neutral-700 max-w-2xl">We work with a handful of DTC fashion brands at a time to drive profitable growth. Tell us a bit about you.</p>

        <form onSubmit={submit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-600">Brand Name</label>
            <input required value={form.brand_name} onChange={(e)=>setForm({ ...form, brand_name: e.target.value })} className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-2" />
          </div>
          <div>
            <label className="block text-sm text-neutral-600">Website</label>
            <input value={form.website} onChange={(e)=>setForm({ ...form, website: e.target.value })} className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-2" />
          </div>
          <div>
            <label className="block text-sm text-neutral-600">Instagram</label>
            <input value={form.instagram} onChange={(e)=>setForm({ ...form, instagram: e.target.value })} className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-2" />
          </div>
          <div>
            <label className="block text-sm text-neutral-600">Monthly Revenue</label>
            <input value={form.monthly_revenue} onChange={(e)=>setForm({ ...form, monthly_revenue: e.target.value })} className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-2" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-neutral-600">Biggest Struggle Right Now</label>
            <textarea rows={4} value={form.biggest_struggle} onChange={(e)=>setForm({ ...form, biggest_struggle: e.target.value })} className="mt-2 w-full border-b border-black/20 focus:border-black outline-none py-2" />
          </div>

          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <button type="submit" className="rounded-full bg-black text-white px-6 py-3 hover:bg-white hover:text-black border border-black transition-colors">Apply for Founders Access</button>
            <div className="text-sm text-neutral-500">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}
