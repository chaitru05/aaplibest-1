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
  const [isVisible, setIsVisible] = useState(false)
  const [cardsPerView, setCardsPerView] = useState(3)

  const sectionRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: {
        en: "Rupesh Shelatkar",
        mr: "रुपेश शेलतकर",
      },
      title: {
        en: "Founder and President",
        mr: "संस्थापक आणि अध्यक्ष",
      },
      image: "/team/Rupesh.jpeg",
      description: {
        en: "Visionary leader with extensive experience in organizational development and strategic planning. Leading the organization with dedication and commitment.",
        mr: "संस्थात्मक विकास आणि धोरणात्मक नियोजनातील व्यापक अनुभव असलेले दूरदर्शी नेते. समर्पण आणि वचनबद्धतेने संस्थेचे नेतृत्व करत आहेत.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rupesh@organization.org",
        phone: "+91-9999999999",
      },
    },
    {
      id: 2,
      name: {
        en: "Siddhesh Mhatre",
        mr: "सिद्धेश म्हात्रे",
      },
      title: {
        en: "Secretary",
        mr: "सचिव",
      },
      image: "/team/siddeshM.jpeg",
      description: {
        en: "Dedicated secretary supporting organizational activities and maintaining effective communication channels with all stakeholders.",
        mr: "संस्थात्मक कार्यांना साहाय्य करणारे आणि सर्व संबंधित व्यक्तींशी प्रभावी संवाद राखणारे वचनबद्ध सचिव.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "siddhesh.m@organization.org",
        phone: "+91-9999999995",
      },
    },
    {
      id: 3,
      name: {
        en: "Atharva Naik",
        mr: "अथर्व नाईक",
      },
      title: {
        en: "Information Technology and Social Media",
        mr: "माहिती तंत्रज्ञान व समाज माध्यम",
      },
      image: "/team/athrav.jpeg",
      description: {
        en: "Technology specialist managing digital infrastructure and social media presence. Driving digital transformation and online engagement.",
        mr: "डिजिटल संरचना आणि सोशल मीडिया उपस्थिती व्यवस्थापित करणारे तंत्रज्ञान तज्ञ. डिजिटल परिवर्तन आणि ऑनलाइन सहभाग वाढवण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "atharva@organization.org",
        phone: "+91-9999999994",
      },
    },
    {
      id: 4,
      name: {
        en: "Siddhesh Kanse",
        mr: "सिद्धेश कानसे",
      },
      title: {
        en: "Treasurer",
        mr: "खजिनदार",
      },
      image: "/team/Siddesh Kanse.JPG",
      description: {
        en: "Financial expert ensuring transparent and efficient management of organizational resources. Maintaining fiscal responsibility and accountability.",
        mr: "संस्थेच्या संसाधनांचे पारदर्शक आणि कार्यक्षम व्यवस्थापन करणारे आर्थिक तज्ञ. वित्तीय जबाबदारी आणि उत्तरदायित्व राखतात.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "siddhesh.k@organization.org",
        phone: "+91-9999999997",
      },
    },
    {
      id: 5,
      name: {
        en: "Kunal Akre",
        mr: "कुणाल आक्रे",
      },
      title: {
        en: "Vice President",
        mr: "उपाध्यक्ष",
      },
      image: "/team/kunal.jpeg",
      description: {
        en: "Experienced professional supporting organizational growth and development initiatives. Committed to driving positive change in the community.",
        mr: "संस्थात्मक वाढ आणि विकास उपक्रमांना पाठिंबा देणारे अनुभवी व्यावसायिक. समुदायात सकारात्मक बदल घडवून आणण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kunal@organization.org",
        phone: "+91-9999999998",
      },
    },
    {
      id: 6,
      name: {
        en: "Pankaj Jaokar",
        mr: "पंकज जाओकर",
      },
      title: {
        en: "Secretary",
        mr: "सचिव",
      },
      image: "/Pankaj.jpg",
      description: {
        en: "Administrative leader managing organizational communications and documentation. Ensuring smooth operations and effective coordination.",
        mr: "संस्थेतील संवाद आणि दस्तऐवजीकरण व्यवस्थापित करणारे प्रशासकीय नेते. सुसूत्र कार्यप्रणाली आणि प्रभावी समन्वय सुनिश्चित करतात.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "pankaj@organization.org",
        phone: "+91-9999999996",
      },
    },
    {
      id: 7,
      name: {
        en: "Prathamesh Rege",
        mr: "प्रथमेश रेगे",
      },
      title: {
        en: "Information Technology and Social Media",
        mr: "माहिती तंत्रज्ञान व समाज माध्यम",
      },
      image: "/team/prathmeahrege.jpeg",
      description: {
        en: "Digital marketing expert enhancing organizational visibility through strategic social media campaigns and technological solutions.",
        mr: "धोरणात्मक सोशल मीडिया मोहिमांद्वारे आणि तंत्रज्ञानात्मक उपायांद्वारे संस्थेची दृश्यता वाढवणारे डिजिटल मार्केटिंग तज्ञ.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "prathamesh@organization.org",
        phone: "+91-9999999993",
      },
    },
    {
      id: 8,
      name: {
        en: "Swapnil Gaonkar",
        mr: "स्वप्निल गावंकर",
      },
      title: {
        en: "Spokesperson",
        mr: "प्रवक्ता",
      },
      image: "/team/swapnilgaonkar.jpeg",
      description: {
        en: "Communication specialist representing the organization in public forums and media interactions. Building strong community relationships.",
        mr: "सार्वजनिक व्यासपीठांवर आणि माध्यमांमध्ये संस्थेचे प्रतिनिधित्व करणारे संवाद तज्ञ. मजबूत समुदाय संबंध निर्माण करण्यासाठी वचनबद्ध.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "swapnil@organization.org",
        phone: "+91-9999999992",
      },
    },
    {
      id: 9,
      name: {
        en: "Gaurav Chindarkar",
        mr: "गौरव चिंदारकर",
      },
      title: {
        en: "Spokesperson",
        mr: "प्रवक्ता",
      },
      image: "/team/gaurav.jpeg",
      description: {
        en: "Public relations expert managing organizational communications and stakeholder engagement. Promoting organizational mission and values.",
        mr: "संस्थात्मक संवाद आणि संबंधितांच्या सहभागाचे व्यवस्थापन करणारे जनसंपर्क तज्ञ. संस्थेचे उद्दिष्टे आणि मूल्ये प्रसारित करण्यासाठी कार्यरत.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "gaurav@organization.org",
        phone: "+91-9999999991",
      },
    },
    {
      id: 10,
      name: {
        en: "Aakshay Desai",
        mr: "आक्षय देसाई",
      },
      title: {
        en: "Member",
        mr: "सभासद",
      },
      image: "/Akshay Desai.jpg",
      description: {
        en: "Active member contributing to various organizational initiatives and community development programs. Bringing fresh perspectives and energy.",
        mr: "विविध संस्थात्मक उपक्रम आणि समुदाय विकास कार्यक्रमांमध्ये सक्रिय सहभाग देणारे सभासद. नवीन दृष्टिकोन आणि ऊर्जा आणतात.",
      },
      social: {
        linkedin: "#",
        twitter: "#",
        email: "aakshay@organization.org",
        phone: "+91-9999999990",
      },
    },
  ]
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setCardsPerView(2.5)       // 📱 Mobile → 1 card
    } else if (window.innerWidth <= 1024) {
      setCardsPerView(2.5)       // 📱 Tablet → 2 cards
    } else {
      setCardsPerView(2.5)       // 💻 Desktop → 3 cards
    }
  }

  handleResize() // run on mount
  window.addEventListener("resize", handleResize)

  return () => window.removeEventListener("resize", handleResize)
}, [])

  // const cardsPerView = 2.5
  const maxIndex = Math.max(0, teamMembers.length - cardsPerView)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [maxIndex, isAutoPlaying])

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 2))
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 2))

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className="team-content-wrapper">
          {/* Left Content */}
          <div className={`team-content ${isVisible ? "slide-in-left" : ""}`}>
            <h2 className="team-title">{t.title}</h2>
            <p className="team-description">{t.description}</p>
            <p className="mobile-text">{t.shortdescription}</p>
          </div>

          {/* Right Cards */}
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
        <img src={member.image || "/placeholder.svg"} alt={member.name[language]} className="team-card-image" />
      </div>

      <div className="team-card-name-box">
        <h3 className="team-card-name">{member.name[language]}</h3>
        <p className="team-card-title">{member.title[language]}</p>
      </div>

      <div className="team-card-overlay">
        <div className="team-card-overlay-content">
          <p className="team-card-description">{member.description[language]}</p>
          <div className="team-card-social">
            <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={member.social.twitter} className="social-link" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href={`mailto:${member.social.email}`} className="social-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={`tel:${member.social.phone}`} className="social-link" aria-label="Phone">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
