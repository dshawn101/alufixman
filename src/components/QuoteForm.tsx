import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

const FUNCTION_URL = 'https://79q2w4o4--send-quote.functions.blink.new'

const services = [
  'Aluminium Windows',
  'Aluminium Doors',
  'Glass Installation / Replacement',
  'Trellis Installation',
  'Track Repair',
  'Hinge Repair',
  'Lock Repair',
  'Emergency Glass Replacement',
  'Other',
]

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.service) {
      setError('Please fill in your name and select a service.')
      return
    }
    setLoading(true)
    setError('')

    try {
      const res = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSuccess(true)
      setForm({ name: '', phone: '', address: '', service: '', date: '', message: '' })
    } catch {
      setError('Something went wrong. Please call us directly on 079 675 1808.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="py-20 bg-[hsl(214,30%,12%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <p className="text-[hsl(214,78%,65%)] text-sm font-semibold uppercase tracking-widest mb-3">Free Quote</p>
            <h2 className="text-[hsl(0,0%,96%)] text-3xl sm:text-4xl font-bold mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Get Your Free Quote Today
            </h2>
            <p className="text-[hsl(214,15%,65%)] text-lg leading-relaxed mb-8">
              Fill in the form and we'll get back to you quickly. For urgent jobs or 24-hour emergency glass, call us directly.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a href="tel:0796751808" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[hsl(214,78%,45%)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(214,78%,45%)]/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,65%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(214,15%,60%)] text-xs uppercase tracking-wide">Call or WhatsApp</p>
                  <p className="text-[hsl(0,0%,95%)] font-bold text-xl group-hover:text-[hsl(214,78%,65%)] transition-colors">079 675 1808</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(214,78%,45%)]/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,65%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(214,15%,60%)] text-xs uppercase tracking-wide">Based in</p>
                  <p className="text-[hsl(0,0%,95%)] font-semibold">Montague Gardens, Cape Town</p>
                  <p className="text-[hsl(214,15%,60%)] text-sm">Serving the wider Cape Town area</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(25,90%,52%)]/20 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(25,90%,62%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[hsl(214,15%,60%)] text-xs uppercase tracking-wide">Emergency</p>
                  <p className="text-[hsl(25,90%,62%)] font-bold">24-Hour Glass Replacement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[hsl(0,0%,100%)] rounded-2xl p-7 sm:p-8 shadow-2xl">
            {success ? (
              <div className="text-center py-8">
                <CheckCircle size={56} className="text-[hsl(145,60%,45%)] mx-auto mb-4" />
                <h3 className="text-[hsl(214,30%,15%)] font-bold text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Quote Request Sent!
                </h3>
                <p className="text-[hsl(214,15%,48%)] mb-6">
                  We've received your request and will be in touch shortly. For urgent jobs call 079 675 1808.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-[hsl(214,78%,45%)] font-semibold text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-[hsl(214,30%,15%)] font-bold text-lg mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Request a Free Quote
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white placeholder:text-[hsl(214,15%,65%)] focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all [color-scheme:light]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 071 234 5678"
                      className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white placeholder:text-[hsl(214,15%,65%)] focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all [color-scheme:light]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Street address, suburb"
                    className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white placeholder:text-[hsl(214,15%,65%)] focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all [color-scheme:light]"
                  />
                </div>

                <div>
                  <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all [color-scheme:light]"
                    required
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all [color-scheme:light]"
                  />
                </div>

                <div>
                  <label className="block text-[hsl(214,30%,20%)] text-sm font-semibold mb-1.5">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe what you need — sizes, colours, any extra details..."
                    className="w-full border border-[hsl(214,20%,85%)] rounded-lg px-3.5 py-2.5 text-sm text-[hsl(214,30%,15%)] bg-white placeholder:text-[hsl(214,15%,65%)] focus:outline-none focus:ring-2 focus:ring-[hsl(214,78%,45%)] focus:border-transparent transition-all resize-none [color-scheme:light]"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[hsl(214,78%,35%)] hover:bg-[hsl(214,78%,28%)] disabled:opacity-60 disabled:cursor-not-allowed text-[hsl(0,0%,100%)] py-3 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Quote Request'
                  )}
                </button>

                <p className="text-[hsl(214,15%,58%)] text-xs text-center">
                  We'll respond within a few hours. For urgent jobs call 079 675 1808.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
