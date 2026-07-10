import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Usluge from './pages/Usluge'
import Recenzije from './pages/Recenzije'
import Kontakt from './pages/Kontakt'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/usluge" element={<Usluge />} />
            <Route path="/recenzije" element={<Recenzije />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
