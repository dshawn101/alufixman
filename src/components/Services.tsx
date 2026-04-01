const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
    title: 'Aluminium Windows',
    desc: 'Custom-manufactured aluminium windows in white, bronze, or charcoal. Casement, sliding, awning — we build and install them all using Crealco profiles.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <circle cx="9" cy="12" r="1.5" />
      </svg>
    ),
    title: 'Aluminium Doors',
    desc: 'Sliding, swing, and bi-fold aluminium doors. Single or double panels, with secure locking systems and quality glazing. Commercial and residential.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2 L3 8 L3 22 L21 22 L21 8 L15 2 Z" />
        <line x1="9" y1="2" x2="9" y2="12" />
        <line x1="15" y1="2" x2="15" y2="12" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
    title: 'Glass Installation',
    desc: 'Safety glass, tempered glass, laminated and frosted glass cut to size. We replace broken panes and install new glazing fast.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="3" x2="4" y2="21" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="14" y1="3" x2="14" y2="21" />
        <line x1="19" y1="3" x2="19" y2="21" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="2" y1="16" x2="22" y2="16" />
      </svg>
    ),
    title: 'Trellis & Security',
    desc: 'Decorative and security trellis manufactured and fitted to your exact specifications. Available in white or dark finishes to complement your home.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Repairs: Tracks, Hinges & Locks',
    desc: 'Sticking doors or windows? We repair and replace sliding tracks, worn hinges, and broken locks on any aluminium system. Quick turnaround.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24-Hour Emergency Glass',
    desc: 'Broken window or door glass? Our 24-hour emergency replacement service gets you covered fast — day or night across the Cape Town area.',
    highlight: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[hsl(0,0%,99%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[hsl(214,78%,45%)] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-[hsl(214,30%,15%)] text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our Services
          </h2>
          <p className="text-[hsl(214,15%,48%)] text-lg max-w-xl mx-auto">
            From custom manufacturing to emergency repairs — Alu-Fix-Man handles it all with quality workmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                s.highlight
                  ? 'bg-[hsl(214,78%,35%)] border-[hsl(214,78%,30%)] text-[hsl(0,0%,96%)]'
                  : 'bg-[hsl(0,0%,100%)] border-[hsl(214,20%,88%)] hover:border-[hsl(214,78%,70%)]'
              }`}
            >
              <div className={`mb-5 ${s.highlight ? 'text-[hsl(214,78%,78%)]' : 'text-[hsl(214,78%,45%)]'}`}>
                {s.icon}
              </div>
              <h3 className={`font-bold text-lg mb-2.5 ${s.highlight ? 'text-[hsl(0,0%,98%)]' : 'text-[hsl(214,30%,15%)]'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed ${s.highlight ? 'text-[hsl(214,30%,82%)]' : 'text-[hsl(214,15%,48%)]'}`}>
                {s.desc}
              </p>
              {s.highlight && (
                <div className="mt-4 inline-flex items-center gap-1.5 bg-[hsl(25,90%,52%)] text-[hsl(0,0%,100%)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(0,0%,100%)] animate-pulse" />
                  Always Available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
