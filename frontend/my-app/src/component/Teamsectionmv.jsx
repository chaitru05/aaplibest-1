"use client"

import "../style/teamsectionmv.css"
import { useState, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Teamsectionmv() {
  const { language } = useLanguage()
  const [index, setIndex] = useState(0)

  // 🔹 Prevent swipe when arrow is clicked
  const isButtonClick = useRef(false)

  const teamMembers = [
    {
      id: 1,
      name: { en: "Rupesh Shelatkar", mr: "रुपेश शेलतकर" },
      title: { en: "Founder and President", mr: "संस्थापक आणि अध्यक्ष" },
      image: "/team/Rupesh.jpeg",
    },
    {
      id: 2,
      name: { en: "Siddhesh Mhatre", mr: "सिद्धेश म्हात्रे" },
      title: { en: "Secretary", mr: "सचिव" },
      image: "/team/siddeshM.jpeg",
    },
    {
      id: 3,
      name: { en: "Atharva Naik", mr: "अथर्व नाईक" },
      title: {
        en: "Information Technology and Social Media",
        mr: "माहिती तंत्रज्ञान व समाज माध्यम",
      },
      image: "/team/athrav.jpeg",
    },
    {
      id: 4,
      name: { en: "Siddhesh Kanse", mr: "सिद्धेश कानसे" },
      title: { en: "Treasurer", mr: "खजिनदार" },
      image: "/team/Siddesh Kanse.JPG",
    },
    {
      id: 5,
      name: { en: "Kunal Akre", mr: "कुणाल आक्रे" },
      title: { en: "Vice President", mr: "उपाध्यक्ष" },
      image: "/team/kunal.jpeg",
    },
    {
      id: 6,
      name: { en: "Prathamesh Rege", mr: "प्रथमेश रेगे" },
      title: {
        en: "Information Technology and Social Media",
        mr: "माहिती तंत्रज्ञान व समाज माध्यम",
      },
      image: "/team/prathmeahrege.jpeg",
    },
    {
      id: 7,
      name: { en: "Swapnil Gaonkar", mr: "स्वप्निल गावंकर" },
      title: { en: "Spokesperson", mr: "प्रवक्ता" },
      image: "/team/swapnilgaonkar.jpeg",
    },
    {
      id: 8,
      name: { en: "Gaurav Chindarkar", mr: "गौरव चिंदारकर" },
      title: { en: "Spokesperson", mr: "प्रवक्ता" },
      image: "/team/gaurav.jpeg",
    }
  ]

  const prev = () => {
    setIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length)
  }

  const next = () => {
    setIndex((i) => (i + 1) % teamMembers.length)
  }

  // 🔹 Swipe refs
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    // 🚫 Ignore swipe if arrow was clicked
    if (isButtonClick.current) return

    const swipeDistance = touchStartX.current - touchEndX.current

    if (swipeDistance > 60) next()
    else if (swipeDistance < -60) prev()
  }

  const member = teamMembers[index]

  return (
    <section className="team-section-mv">
      <h2 className="team-title-mv">
        {language === "mr" ? "आमची टीम" : "Meet Our Team"}
      </h2>

      <p className="team-desc-mv">
        {language === "mr"
          ? "उत्साही टीमला भेटा — एक समर्पित समूह जो उद्दिष्टाने आणि मुंबईच्या BEST बसप्रेमाने एकत्र आला आहे."
          : "Meet the passionate team behind Aapli BEST Aaplyachsathi—a dedicated group united by purpose and love for Mumbai’s BEST buses."}
      </p>

      <div
        className="team-carousel-mv"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* ◀ LEFT ARROW */}
        <button
          className="nav-btn-mv left-mv"
          onTouchStart={() => (isButtonClick.current = true)}
          onClick={() => {
            prev()
            isButtonClick.current = false
          }}
        >
          ❮
        </button>

        {/* CARD */}
        <div className="team-card-mv">
          <img src={member.image} alt={member.name[language]} />

          <div className="team-info-mv">
            <h3>{member.name[language]}</h3>
            <p>{member.title[language]}</p>
          </div>
        </div>

        {/* ▶ RIGHT ARROW */}
        <button
          className="nav-btn-mv right-mv"
          onTouchStart={() => (isButtonClick.current = true)}
          onClick={() => {
            next()
            isButtonClick.current = false
          }}
        >
          ❯
        </button>
      </div>
    </section>
  )
}
