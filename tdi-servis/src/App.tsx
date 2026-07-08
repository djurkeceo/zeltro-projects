import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Usluge from './pages/Usluge'
import Delovi from './pages/Delovi'
import Recenzije from './pages/Recenzije'
import Kontakt from './pages/Kontakt'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrap><Home /></PageWrap>} />
            <Route path="/usluge" element={<PageWrap><Usluge /></PageWrap>} />
            <Route path="/delovi" element={<PageWrap><Delovi /></PageWrap>} />
            <Route path="/recenzije" element={<PageWrap><Recenzije /></PageWrap>} />
            <Route path="/kontakt" element={<PageWrap><Kontakt /></PageWrap>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
