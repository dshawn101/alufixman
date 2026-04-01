import { useState, useRef, useCallback } from 'react'

const galleryItems = [
  {
    before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2F1WhatsAppImage2026-03-11at091921__01673372.jpeg?alt=media&token=498d8a3a-7b81-4a9d-a14c-3bc6b7fbef5e',
    after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FWhatsAppImage2026-03-11at091919__53f5b858.jpeg?alt=media&token=b24d92f3-3562-42bf-a1e6-c75b58f5b640',
    label: 'Window Installation',
    desc: 'Aluminium windows manufactured and installed',
  },
  {
    before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2F1WhatsAppImage2026-03-11at091918__20bc53b3.jpeg?alt=media&token=17e97d81-a6e3-4878-bfb1-6c29199250d9',
    after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FWhatsAppImage2026-03-11at091700__4f525a49.jpeg?alt=media&token=68043045-6b14-4fca-8ccf-0c8e031c1f11',
    label: 'Door Installation',
    desc: 'Charcoal aluminium double door with glazing',
  },
  {
    before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2F1WhatsAppImage2026-03-11at091919__6f136892.jpeg?alt=media&token=7952624a-6da4-4974-9f63-5136c7287322',
    after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FWhatsAppImage2026-03-11at091757__e82f9e8c.jpeg?alt=media&token=2d462632-8458-4566-a2f0-fdf69ab51a1e',
    label: 'Commercial Doors',
    desc: 'Large-format sliding and swing door systems',
  },
]

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePos(e.clientX) }
  const onMouseUp = () => { dragging.current = false }

  const onTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    updatePos(e.touches[0].clientX)
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-[hsl(214,20%,88%)]">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize select-none overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
      >
        {/* After image (base) */}
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        {/* Before image (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }} draggable={false} />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-[hsl(0,0%,100%)] shadow-[0_0_8px_rgba(0,0,0,0.6)]" style={{ left: `${pos}%` }} />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[hsl(0,0%,100%)] rounded-full shadow-xl flex items-center justify-center gap-0.5"
          style={{ left: `${pos}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,35%)" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(214,78%,35%)" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-[hsl(214,30%,12%)]/80 backdrop-blur-sm text-[hsl(0,0%,95%)] text-xs font-bold px-2.5 py-1 rounded-full">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-[hsl(214,78%,45%)]/90 backdrop-blur-sm text-[hsl(0,0%,100%)] text-xs font-bold px-2.5 py-1 rounded-full">
          AFTER
        </div>
      </div>
      <div className="bg-[hsl(0,0%,100%)] px-5 py-4">
        <p className="font-bold text-[hsl(214,30%,15%)] text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{label}</p>
        <p className="text-[hsl(214,15%,48%)] text-xs mt-0.5">Drag slider to compare</p>
      </div>
    </div>
  )
}

// Stand-alone photo grid for extra project photos
const extraPhotos = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FcWhatsAppImage2026-03-11at091927__f3c20143.jpeg?alt=media&token=50fbd863-f053-4959-9d74-46290d141057',
    caption: 'White trellis & door frames',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2F2WhatsAppImage2026-03-11at091925__af9f0be7.jpeg?alt=media&token=2e07b423-5259-4654-a369-8c16c053dd73',
    caption: 'Aluminium window batch ready',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2FWhatsAppImage2026-03-11at091925__8853fc60.jpeg?alt=media&token=d9cc739d-b201-44a6-9226-cd0eaab5468b',
    caption: 'Custom window manufacturing',
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2Fgxc7ZNoiH7bVWZYEq9cpJWsjd0k1%2F1WhatsAppImage2026-03-11at091923__4452c860.jpeg?alt=media&token=ff53fce9-e83f-48f4-afc3-12700219cb59',
    caption: 'Dark aluminium door set',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[hsl(210,20%,97%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[hsl(214,78%,45%)] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="text-[hsl(214,30%,15%)] text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Before & After Gallery
          </h2>
          <p className="text-[hsl(214,15%,48%)] text-lg max-w-xl mx-auto">
            Drag the sliders to see the difference our work makes on each project.
          </p>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {galleryItems.map((item) => (
            <BeforeAfterSlider key={item.label} {...item} />
          ))}
        </div>

        {/* Extra photos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {extraPhotos.map((p) => (
            <div key={p.caption} className="group rounded-xl overflow-hidden shadow-md border border-[hsl(214,20%,88%)]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[hsl(0,0%,100%)] px-3 py-2.5">
                <p className="text-[hsl(214,30%,18%)] text-xs font-semibold leading-snug">{p.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
