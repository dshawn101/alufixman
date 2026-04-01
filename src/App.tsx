import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,99%)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
