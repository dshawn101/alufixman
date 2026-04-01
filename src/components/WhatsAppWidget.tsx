import { useState, useEffect } from 'react'
import { X, Send } from 'lucide-react'

const WA_NUMBER = '27796751808' // South Africa country code, no leading 0
const WA_LINK = `https://wa.me/${WA_NUMBER}`

// WhatsApp SVG icon (official green brand color)
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M23.472 8.516A10.38 10.38 0 0 0 16.02 5.5C10.73 5.5 6.42 9.81 6.42 15.1c0 1.693.44 3.344 1.28 4.8L6.35 26.5l6.74-1.768a10.42 10.42 0 0 0 4.93 1.258h.003c5.289 0 9.598-4.31 9.598-9.6a9.557 9.557 0 0 0-4.15-7.874zm-7.453 14.764h-.002a8.651 8.651 0 0 1-4.41-1.208l-.316-.188-3.278.859.875-3.2-.207-.328a8.67 8.67 0 0 1-1.328-4.615c0-4.79 3.9-8.69 8.697-8.69 2.324 0 4.506.906 6.149 2.552a8.64 8.64 0 0 1 2.546 6.146c-.002 4.79-3.902 8.672-8.726 8.672zm4.772-6.5c-.26-.13-1.54-.76-1.779-.847-.238-.088-.412-.131-.585.13-.174.262-.673.847-.825 1.021-.152.174-.304.196-.565.065-.26-.13-1.1-.405-2.095-1.293-.774-.69-1.297-1.542-1.449-1.803-.152-.26-.016-.4.115-.53.118-.116.262-.304.393-.456.13-.152.174-.262.261-.436.088-.174.044-.327-.022-.457-.065-.13-.585-1.41-.802-1.93-.21-.508-.424-.44-.585-.448l-.499-.009a.956.956 0 0 0-.694.326c-.238.26-.91.89-.91 2.17 0 1.282.932 2.52 1.062 2.694.13.174 1.836 2.803 4.449 3.93.622.27 1.108.43 1.487.55.625.199 1.193.17 1.643.104.5-.075 1.539-.63 1.756-1.238.217-.608.217-1.13.152-1.238-.065-.108-.238-.174-.5-.305z"
        fill="white"
      />
    </svg>
  )
}

const quickMessages = [
  'Hi! I need a quote for aluminium windows 🪟',
  'I need emergency glass replacement 🚨',
  'I want to enquire about aluminium doors 🚪',
  'Can I book an installation? 📅',
]

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(true)

  // Stop pulse after first open
  useEffect(() => {
    if (open) setShowPulse(false)
  }, [open])

  const sendMessage = (msg: string) => {
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank')
  }

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[320px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center">
                <WhatsAppIcon size={26} />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">Alu-Fix-Man</p>
              <p className="text-[#b2dfdb] text-xs">Typically replies in minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#ece5dd] px-4 py-5">
            {/* Chat bubble */}
            <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm mb-4 max-w-[85%]">
              <p className="text-[#1a1a1a] text-sm leading-relaxed">
                👋 Hi! Welcome to <strong>Alu-Fix-Man</strong>. How can we help you today?
              </p>
              <p className="text-[#8a9aa0] text-[10px] mt-1.5 text-right">09:00 ✓✓</p>
            </div>

            {/* Quick replies */}
            <p className="text-[#555] text-xs font-semibold uppercase tracking-wide mb-2 ml-1">
              Quick messages
            </p>
            <div className="space-y-2">
              {quickMessages.map((msg) => (
                <button
                  key={msg}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-left bg-white hover:bg-[#f0f0f0] active:scale-[0.98] text-[#1a1a1a] text-sm px-3.5 py-2.5 rounded-xl shadow-sm transition-all flex items-center justify-between gap-2 group"
                >
                  <span>{msg}</span>
                  <Send size={13} className="text-[#25D366] flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Open WhatsApp button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] active:bg-[#1aaa50] text-white font-bold text-sm py-3 rounded-xl shadow transition-all"
            >
              <WhatsAppIcon size={20} />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {/* Tooltip label when closed */}
        {!open && (
          <div className="bg-[hsl(214,30%,12%)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none animate-fade-in">
            Chat on WhatsApp
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: '#25D366' }}
        >
          {/* Pulse rings when idle */}
          {showPulse && !open && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
              <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366] opacity-20 animate-ping" style={{ animationDelay: '0.3s' }} />
            </>
          )}

          {open ? (
            <X size={24} color="white" />
          ) : (
            <WhatsAppIcon size={30} />
          )}
        </button>
      </div>
    </>
  )
}
