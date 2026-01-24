"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/TeamSection.css"

const TeamSection = () => {
  const { language } = useLanguage()
  const t = translations.team[language]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false) // animation
  const [isInView, setIsInView] = useState(false)   // autoplay control
  const [cardsPerView, setCardsPerView] = useState(2.5)

  const sectionRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: { en: "Rupesh Shelatkar", mr: "रुपेश शेलतकर" },
      title: { en: "Founder and President", mr: "संस्थापक आणि अध्यक्ष" },
      image: "/team/Rupesh.jpeg",
      description: {
        en: "Visionary leader with extensive experience in organizational development and strategic planning.",
        mr: "संस्थात्मक विकास आणि धोरणात्मक नियोजनातील व्यापक अनुभव असलेले दूरदर्शी नेते.",
      },
      social: { linkedin: "#", twitter: "#", email: "rupesh@organization.org", phone: "+91-9999999999" },
    },
    {
      id: 2,
      name: { en: "Siddhesh Mhatre", mr: "सिद्धेश म्हात्रे" },
      title: { en: "Secretary", mr: "सचिव" },
      image: "/team/siddeshM.jpeg",
      description: {
        en: "Dedicated secretary supporting organizational activities and maintaining communication.",
        mr: "संस्थात्मक कार्यांना साहाय्य करणारे वचनबद्ध सचिव.",
      },
      social: { linkedin: "#", twitter: "#", email: "siddhesh.m@organization.org", phone: "+91-9999999995" },
    },
    {
      id: 3,
      name: { en: "Atharva Naik", mr: "अथर्व नाईक" },
      title: { en: "Information Technology and Social Media", mr: "माहिती तंत्रज्ञान व समाज माध्यम" },
      image: "/team/athrav.jpeg",
      description: {
        en: "Technology specialist managing digital infrastructure and social media presence.",
        mr: "डिजिटल संरचना आणि सोशल मीडिया उपस्थिती व्यवस्थापित करणारे तंत्रज्ञान तज्ञ.",
      },
      social: { linkedin: "#", twitter: "#", email: "atharva@organization.org", phone: "+91-9999999994" },
    },
    {
      id: 4,
      name: { en: "Siddhesh Kanse", mr: "सिद्धेश कानसे" },
      title: { en: "Treasurer", mr: "खजिनदार" },
      image: "/team/Siddesh Kanse.JPG",
      description: {
        en: "Financial expert ensuring transparent and efficient management.",
        mr: "संस्थेच्या संसाधनांचे पारदर्शक व्यवस्थापन करणारे आर्थिक तज्ञ.",
      },
      social: { linkedin: "#", twitter: "#", email: "siddhesh.k@organization.org", phone: "+91-9999999997" },
    },
    {
      id: 5,
      name: { en: "Kunal Akre", mr: "कुणाल आक्रे" },
      title: { en: "Vice President", mr: "उपाध्यक्ष" },
      image: "/team/kunal.jpeg",
      description: {
        en: "Experienced professional supporting organizational growth.",
        mr: "संस्थात्मक वाढ उपक्रमांना पाठिंबा देणारे अनुभवी व्यावसायिक.",
      },
      social: { linkedin: "#", twitter: "#", email: "kunal@organization.org", phone: "+91-9999999998" },
    },
    {
      id: 6,
      name: { en: "Prathamesh Rege", mr: "प्रथमेश रेगे" },
      title: { en: "Information Technology and Social Media", mr: "माहिती तंत्रज्ञान व समाज माध्यम" },
      image: "/team/prathmeahrege.jpeg",
      description: {
        en: "Digital marketing expert enhancing organizational visibility.",
        mr: "डिजिटल मार्केटिंगद्वारे संस्थेची दृश्यता वाढवणारे तज्ञ.",
      },
      social: { linkedin: "#", twitter: "#", email: "prathamesh@organization.org", phone: "+91-9999999993" },
    },
    {
      id: 7,
      name: { en: "Swapnil Gaonkar", mr: "स्वप्निल गावंकर" },
      title: { en: "Spokesperson", mr: "प्रवक्ता" },
      image: "/team/swapnilgaonkar.jpeg",
      description: {
        en: "Communication specialist representing the organization.",
        mr: "संस्थेचे प्रतिनिधित्व करणारे संवाद तज्ञ.",
      },
      social: { linkedin: "#", twitter: "#", email: "swapnil@organization.org", phone: "+91-9999999992" },
    },
    {
      id: 8,
      name: { en: "Gaurav Chindarkar", mr: "गौरव चिंदारकर" },
      title: { en: "Spokesperson", mr: "प्रवक्ता" },
      image: "/team/gaurav.jpeg",
      description: {
        en: "Public relations expert managing stakeholder engagement.",
        mr: "संबंधितांच्या सहभागाचे व्यवस्थापन करणारे जनसंपर्क तज्ञ.",
      },
      social: { linkedin: "#", twitter: "#", email: "gaurav@organization.org", phone: "+91-9999999991" },
    }
  ]

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setCardsPerView(1.2)
      else if (window.innerWidth <= 1024) setCardsPerView(2.2)
      else setCardsPerView(2.5)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, teamMembers.length - cardsPerView)

  // Section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => sectionRef.current && observer.unobserve(sectionRef.current)
  }, [])

  // Autoplay only when visible
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isInView, maxIndex])

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className="team-content-wrapper">
          <div className={`team-content ${isVisible ? "slide-in-left" : ""}`}>
            <h2 className="team-title">{t.title}</h2>
            <p className="team-description">{t.description}</p>
            <p className="mobile-text">{t.shortdescription}</p>
          </div>

          <div className={`team-cards-section ${isVisible ? "slide-in-right" : ""}`}>
            <div
              className="team-carousel"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <button className="nav-button nav-button-left" onClick={prevSlide}>
                <ChevronLeft size={20} />
              </button>

              <div className="team-cards-container">
                <div
                  className="team-cards-wrapper"
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                >
                  {teamMembers.map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              <button className="nav-button nav-button-right" onClick={nextSlide}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TeamCard = ({ member }) => {
  const { language } = useLanguage()
  return (
    <div className="team-card">
      <div className="team-card-image-container">
        <img src={member.image} alt={member.name[language]} className="team-card-image" />
      </div>

      <div className="team-card-name-box">
        <h3 className="team-card-name">{member.name[language]}</h3>
        <p className="team-card-title">{member.title[language]}</p>
      </div>

      <div className="team-card-overlay">
        <p className="team-card-description">{member.description[language]}</p>
        <div className="team-card-social">
          <a href={member.social.linkedin}><Linkedin size={18} /></a>
          <a href={member.social.twitter}><Twitter size={18} /></a>
          <a href={`mailto:${member.social.email}`}><Mail size={18} /></a>
          <a href={`tel:${member.social.phone}`}><Phone size={18} /></a>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
