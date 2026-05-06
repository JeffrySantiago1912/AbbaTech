import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'

const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
const WhyUs = lazy(() => import('./components/WhyUs'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'))

function App() {
  const [isDark, setIsDark] = useState(true)
  const [loadSecondarySections, setLoadSecondarySections] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('abbatech-theme')
    if (saved === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    let done = false
    const load = () => {
      if (done) return
      done = true
      setLoadSecondarySections(true)
      window.removeEventListener('scroll', load)
      window.removeEventListener('touchstart', load)
    }

    const timer = window.setTimeout(load, 1200)
    window.addEventListener('scroll', load, { passive: true })
    window.addEventListener('touchstart', load, { passive: true })

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', load)
      window.removeEventListener('touchstart', load)
    }
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('abbatech-theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('abbatech-theme', 'light')
      }
      return next
    })
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        {loadSecondarySections && (
          <Suspense fallback={null}>
            <Services />
            <Projects />
            <WhyUs />
            <Contact />
          </Suspense>
        )}
      </main>
      {loadSecondarySections && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      )}
    </div>
  )
}

export default App
