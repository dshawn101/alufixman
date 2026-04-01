import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// WhatsApp SVG (inline, no extra dependency)
function WaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M27.472 4.516A15.38 15.38 0 0 0 16.02.5C7.73.5 1.02 7.21 1.02 15.5c0 2.693.7 5.344 2.03 7.68L.85 32l9.24-2.432a15.42 15.42 0 0 0 5.93 1.182h.003c8.289 0 14.977-6.71 14.977-15a14.557 14.557 0 0 0-3.528-11.234zm-11.453 23.014h-.002a12.651 12.651 0 0 1-6.46-1.766l-.45-.268-4.628 1.213 1.235-4.518-.294-.465a12.87 12.87 0 0 1-1.97-6.826c0-7.09 5.77-12.86 12.847-12.86 3.434 0 6.656 1.338 9.079 3.764a12.64 12.64 0 0 1 3.766 8.99c-.003 7.093-5.773 12.736-12.923 12.736zm7.052-9.616c-.387-.194-2.29-1.13-2.644-1.258-.354-.13-.612-.194-.87.193-.258.387-.998 1.258-1.224 1.516-.226.258-.45.29-.837.096-.387-.193-1.635-.601-3.113-1.917-1.15-1.024-1.927-2.289-2.15-2.676-.226-.387-.024-.597.17-.789.175-.172.387-.45.582-.676.193-.226.258-.387.387-.645.13-.258.065-.484-.033-.677-.097-.193-.87-2.093-1.19-2.863-.31-.753-.629-.652-.87-.665l-.74-.013a1.456 1.456 0 0 0-1.03.484c-.354.387-1.35 1.32-1.35 3.218 0 1.9 1.382 3.735 1.575 3.993.193.258 2.719 4.153 6.587 5.822.92.4 1.638.637 2.198.815.924.295 1.765.254 2.43.154.74-.112 2.28-.934 2.603-1.836.323-.903.323-1.676.225-1.836-.097-.16-.354-.258-.74-.452z"
        fill="#25D366"
      />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Get a Quote', href: '#quote' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(214,30%,12%)] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[hsl(214,78%,45%)] rounded-full flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
            <div>
              <span className="text-[hsl(0,0%,95%)] font-bold text-lg leading-none tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ALU-FIX-MAN</span>
              <p className="text-[hsl(214,40%,65%)] text-xs leading-none mt-0.5">Windows · Doors · Glass · Trellis</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.label === 'Get a Quote'
                    ? 'ml-2 bg-[hsl(214,78%,45%)] hover:bg-[hsl(214,78%,38%)] text-[hsl(0,0%,100%)] px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105'
                    : 'text-[hsl(214,20%,75%)] hover:text-[hsl(0,0%,95%)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150'
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp (desktop) */}
          <a
            href="https://wa.me/27796751808"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white px-3.5 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
          >
            <WaIcon size={16} />
            <span>WhatsApp Us</span>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-[hsl(214,20%,75%)] hover:text-[hsl(0,0%,95%)] p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[hsl(214,30%,10%)] border-t border-[hsl(214,20%,22%)] px-4 py-3 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[hsl(214,20%,75%)] hover:text-[hsl(0,0%,95%)] py-2 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/27796751808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#25D366] py-2 font-semibold text-sm"
          >
            <WaIcon size={16} />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  )
}
