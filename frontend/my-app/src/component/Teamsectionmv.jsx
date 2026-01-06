"use client"

import "../style/teamsectionmv.css"
import { useState, useRef } from "react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Teamsectionmv() {
  const { language } = useLanguage()
  const [index, setIndex] = useState(0)

  // src/data/teamData.js

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
  },
]


  const prev = () => {
    setIndex((i) => (i - 1 + teamMembers.length) % teamMembers.length)
  }

  const next = () => {
    setIndex((i) => (i + 1) % teamMembers.length)
  }

  // swipe refs
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
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
          ? "उत्साही टीमला भेटा — एक समर्पित समूह जो उद्दिष्टाने आणि मुंबईच्या BEST बसप्रेमाने एकत्र आला आहे. रणनीती आखणाऱ्यांपासून ते जनजागृती करणाऱ्यांपर्यंत, प्रत्येक सदस्य सार्वजनिक वाहतुकीचे संरक्षण आणि प्रसार करण्याच्या आमच्या ध्येयाला बळकट करण्यामध्ये महत्त्वाची भूमिका बजावतो."
          : "Meet the passionate team behind Aapli BEST Aaplyachsathi—a dedicated group united by purpose and a deep love for Mumbai’s BEST buses. From strategists to advocates, each member plays a vital role in strengthening our mission to protect and promote public transport."}
      </p>

      <div
        className="team-carousel-mv"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-btn-mv left-mv" onClick={prev}>❮</button>

        <div className="team-card-mv">
          <img src={member.image} alt={member.name[language]} />

          <div className="team-info-mv">
            <h3>{member.name[language]}</h3>
            <p>{member.title[language]}</p>
          </div>
        </div>

        <button className="nav-btn-mv right-mv" onClick={next}>❯</button>
      </div>
    </section>
  )
}
