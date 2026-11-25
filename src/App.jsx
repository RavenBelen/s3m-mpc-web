import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import MembershipPage from './pages/MembershipPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'
import ProgramsPage from './pages/ProgramsPage'
import ServicesPage from './pages/ServicesPage'
import './App.css'

function ScrollOnRouteChange() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionId = decodeURIComponent(hash.slice(1))
    window.requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }))
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollOnRouteChange />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
