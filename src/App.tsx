import { lazy, Suspense } from 'react'
import Faq from './components/Faq'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import { PreferencesProvider } from './i18n/Preferences'

const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <PreferencesProvider>
      <div className="min-h-screen bg-white text-slate-950 dark:bg-[#09090f] dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <WhyUs />
          <Faq />
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </PreferencesProvider>
  )
}

export default App
