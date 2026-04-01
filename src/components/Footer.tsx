const serviceAreas = [
  'Montague Gardens', 'Milnerton', 'Tableview', 'Century City', 'Parow',
  'Bellville', 'Goodwood', 'Tygervalley', 'Durbanville', 'Northern Suburbs',
  'Southern Suburbs', 'Cape Town CBD',
]

export default function Footer() {
  return (
    <footer className="bg-[hsl(214,30%,10%)]">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[hsl(214,78%,45%)] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <div>
                <p className="text-[hsl(0,0%,95%)] font-bold text-base leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ALU-FIX-MAN</p>
                <p className="text-[hsl(214,30%,55%)] text-xs">Aluminium Manufacturers</p>
              </div>
            </div>
            <p className="text-[hsl(214,15%,55%)] text-sm leading-relaxed mb-5">
              Custom aluminium windows, doors, trellis, and glass solutions — manufactured and installed in Montague Gardens, Cape Town.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100065322967668"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[hsl(214,78%,60%)] hover:text-[hsl(214,78%,75%)] transition-colors text-sm font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Page
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[hsl(0,0%,90%)] font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Our Services', href: '#services' },
                { label: 'Project Gallery', href: '#gallery' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'Get a Free Quote', href: '#quote' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[hsl(214,15%,55%)] hover:text-[hsl(214,78%,65%)] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[hsl(0,0%,90%)] font-bold text-sm uppercase tracking-widest mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <span key={area} className="bg-[hsl(214,20%,18%)] text-[hsl(214,15%,60%)] text-xs px-2.5 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[hsl(0,0%,90%)] font-bold text-sm uppercase tracking-widest mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:0796751808" className="flex items-start gap-3 group">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p className="text-[hsl(0,0%,90%)] font-bold text-base group-hover:text-[hsl(214,78%,65%)] transition-colors">079 675 1808</p>
                  <p className="text-[hsl(214,15%,55%)] text-xs">Call or WhatsApp</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,60%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-[hsl(0,0%,85%)] text-sm font-medium">Montague Gardens</p>
                  <p className="text-[hsl(214,15%,55%)] text-xs">Cape Town, Western Cape</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="hsl(25,90%,62%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-[hsl(25,90%,62%)] text-sm font-bold">24-Hour Emergency</p>
                  <p className="text-[hsl(214,15%,55%)] text-xs">Glass replacement available any time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[hsl(214,20%,22%)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26454.52781093247!2d18.52152135!3d-33.8695778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5eeb9f53b079%3A0x97c94a57a4bf77ca!2sMontague%20Gardens%2C%20Cape%20Town%2C%207441!5e0!3m2!1sen!2sza!4v1701234567890!5m2!1sen!2sza"
            width="100%"
            height="260"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alu-Fix-Man location map"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(214,20%,16%)] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[hsl(214,15%,42%)] text-xs">
            © {new Date().getFullYear()} Alu-Fix-Man. All rights reserved. Montague Gardens, Cape Town.
          </p>
          <p className="text-[hsl(214,15%,42%)] text-xs">
            Windows · Doors · Glass · Trellis
          </p>
        </div>
      </div>
    </footer>
  )
}
