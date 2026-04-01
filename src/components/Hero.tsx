import { Phone, ChevronRight, Shield, Star, Award, Clock } from 'lucide-react'

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Star, text: '5-Star Rated' },
  { icon: Award, text: '15+ Years Experience' },
  { icon: Clock, text: '24hr Emergency Glass' },
]

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(214,30%,12%)]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FWhatsAppImage2026-03-11at091919__53f5b858.jpeg?alt=media&token=b24d92f3-3562-42bf-a1e6-c75b58f5b640"
            alt="Alu-Fix-Man Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(214,30%,8%)]/95 via-[hsl(214,30%,12%)]/80 to-[hsl(214,30%,12%)]/40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[hsl(214,78%,45%)]/20 border border-[hsl(214,78%,45%)]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(214,78%,60%)] animate-pulse" />
              <span className="text-[hsl(214,78%,75%)] text-sm font-semibold tracking-wide uppercase">Montague Gardens, Cape Town</span>
            </div>

            {/* Headline */}
            <h1 className="text-[hsl(0,0%,96%)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Cape Town's Trusted{' '}
              <span className="text-[hsl(214,78%,60%)]">Aluminium</span>{' '}
              Specialists
            </h1>

            <p className="text-[hsl(214,15%,70%)] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Custom windows, doors, trellis & glass — manufactured and installed by Alu-Fix-Man. Fast, reliable, and built to last.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(214,78%,45%)] hover:bg-[hsl(214,78%,38%)] text-[hsl(0,0%,100%)] px-7 py-3.5 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-[hsl(214,78%,35%)]/40"
              >
                Get a Free Quote
                <ChevronRight size={18} />
              </a>
              <a
                href="tel:0796751808"
                className="inline-flex items-center justify-center gap-2 bg-[hsl(0,0%,100%)]/10 hover:bg-[hsl(0,0%,100%)]/20 border border-[hsl(0,0%,100%)]/25 text-[hsl(0,0%,95%)] px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm"
              >
                <Phone size={17} />
                079 675 1808
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[hsl(0,0%,80%)] text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[hsl(0,0%,80%)] to-transparent" />
        </div>
      </section>

      {/* Trust Badge Strip */}
      <section className="bg-[hsl(214,78%,35%)] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-[hsl(214,78%,50%)]">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2.5 py-1 md:px-6">
                <Icon size={18} className="text-[hsl(0,0%,100%)] flex-shrink-0 opacity-90" />
                <span className="text-[hsl(0,0%,96%)] font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
