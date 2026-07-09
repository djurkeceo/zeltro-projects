import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Usluge from './pages/Usluge'
import Kontakt from './pages/Kontakt'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/usluge" element={<AnimatedPage><Usluge /></AnimatedPage>} />
          <Route path="/kontakt" element={<AnimatedPage><Kontakt /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
