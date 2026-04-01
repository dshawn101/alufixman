const reviews = [
  {
    name: 'Thabo M.',
    location: 'Milnerton, Cape Town',
    rating: 5,
    text: 'Excellent service! They replaced all the windows in my house and the quality is outstanding. The team was professional, clean and on time. I highly recommend Alu-Fix-Man.',
    service: 'Window Replacement',
  },
  {
    name: 'Sandra P.',
    location: 'Tableview, Cape Town',
    rating: 5,
    text: 'My front sliding door track was broken and they came the next day. Fixed it in under an hour. Very fair price and no mess left behind. Will use them again!',
    service: 'Track Repair',
  },
  {
    name: 'John K.',
    location: 'Century City, Cape Town',
    rating: 5,
    text: "Our glass was smashed at 9pm and they came out within 2 hours to board it up and came back next morning to install a new pane. True 24-hour service — can't fault them.",
    service: '24hr Emergency Glass',
  },
  {
    name: 'Fatima A.',
    location: 'Parow, Cape Town',
    rating: 5,
    text: "We had security trellis fitted throughout our property. Beautifully made and fitted perfectly. The quote was clear, no hidden costs. Very happy with the whole experience.",
    service: 'Trellis Installation',
  },
  {
    name: 'Derek V.',
    location: 'Goodwood, Cape Town',
    rating: 5,
    text: "I needed custom-sized aluminium windows for a renovation and they manufactured them exactly to spec in a few days. Professional advice and a quality finish. 5 stars.",
    service: 'Custom Windows',
  },
  {
    name: 'Nadia R.',
    location: 'Bellville, Cape Town',
    rating: 5,
    text: 'Had a new aluminium door set installed. The charcoal finish looks amazing and the locks and hinges are top quality. Price was reasonable and job was neat. Very satisfied.',
    service: 'Door Installation',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="hsl(40,95%,52%)" stroke="hsl(40,95%,48%)" strokeWidth="1">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[hsl(0,0%,99%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[hsl(214,78%,45%)] text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
          <h2 className="text-[hsl(214,30%,15%)] text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars count={5} />
            <span className="text-[hsl(214,30%,20%)] font-bold text-lg">5.0</span>
            <span className="text-[hsl(214,15%,48%)] text-sm">average rating</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[hsl(0,0%,100%)] rounded-2xl p-6 border border-[hsl(214,20%,88%)] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="mb-4">
                <Stars count={r.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-[hsl(214,15%,35%)] text-sm leading-relaxed mb-5">
                "{r.text}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[hsl(214,20%,92%)] pt-4">
                <div>
                  <p className="font-bold text-[hsl(214,30%,15%)] text-sm">{r.name}</p>
                  <p className="text-[hsl(214,15%,55%)] text-xs mt-0.5">{r.location}</p>
                </div>
                <span className="bg-[hsl(214,78%,95%)] text-[hsl(214,78%,35%)] text-xs font-semibold px-2.5 py-1 rounded-full">
                  {r.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.facebook.com/profile.php?id=100065322967668"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[hsl(214,78%,45%)] hover:text-[hsl(214,78%,35%)] font-semibold text-sm transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            See all reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
