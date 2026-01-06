"use client"

import "./App.css"
import { useEffect, useState, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TeamSection from "./component/TeamSection"
import About from "./component/About"
import Footer from "./component/Footer"
import VolunteerSection from "./component/VolunteerSection"
import Navbar from "./component/Navbar"
import Ourwork from "./component/Ourwork.jsx"
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext"
import { translations } from "./data/translations"
import About1 from "./component/About1.jsx"
import Cnetric from "./pages/Cnetric.jsx"
import Routedev from "./pages/Routedev.jsx"
import Policyacc from "./pages/Policyacc.jsx"
import HelpLineIcon from "./component/HelpLineIcon.jsx"
import ComplaintForm from "./component/ComplaintForm.jsx"
import PassengerIntervention from "./pages/PassengerIntervention.jsx"
import PublicAwareness from "./pages/PublicAwareness.jsx"
import ScrollToTop from "./component/ScrollToTop.jsx"
import TeamResponsive from "./component/TeamResponsive"

function HomePage() {
  const { language } = useLanguage()
  const t = translations.hero[language]

  const [isLoaded, setIsLoaded] = useState(false)
  const [animate, setAnimate] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <section id="home" className="hero-section">
        {/* Background */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(/hero/bg2.jpeg)` }}
        >
          <div className="hero-overlay-dark" />
        </div>

        {/* Slanted overlay with text */}
        <div className="hero-content-overlay">
          <div className="hero-content">
            <div className={`hero-text-container ${isLoaded ? "visible" : ""}`}>
  
            <h
              className={`heading-hero ${isLoaded ? "fade-item-1" : "text-hidden"}`}
            >
              {t.heading}
            </h>

            <p
              className={`hero-tagline ${isLoaded ? "fade-item-2" : "text-hidden"}`}
            >
              {t.tagline}
            </p>

            <p
              className={`hero-subtitle ${isLoaded ? "fade-item-3" : "text-hidden"}`}
            >
              {t.subtitle}
            </p>
          </div>


          </div>
        </div>

        {/* Bus animation */}
        <div className="hero-bus-container">
          <img
            src={"/hero/hero-1.png"}
            alt="Community Bus"
            className={`hero-bus ${
              isLoaded ? "animate-bus-slide" : "bus-hidden"
            }`}
          />
        </div>
      </section>
      <section className="little">
          <div className="my_div">

          </div>
      </section>

      <About />
      <About1/>
      <section id="team">
         <TeamResponsive />
       </section>

      <section id="work">
        <Ourwork /> 
      </section>
      <section id="volunteer">
        <VolunteerSection />
      </section>
      <section id="feedback">
        <ComplaintForm /> 
      </section>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
    
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Home */}
          
          <Route path="/" element={<HomePage />} />

          {/* Category pages */}
          <Route path="/route-development" element={<Routedev/>} />
          <Route path="/centric" element={<Cnetric/>} />
          <Route path="/public" element={<PublicAwareness/>} />
          <Route path="/policy" element={<Policyacc/>} />
          <Route path="/passenger" element={<PassengerIntervention />} />
         
        </Routes>
        <HelpLineIcon />
    </LanguageProvider>
  )
}

export default App
