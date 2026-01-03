"use client"

// ==============================
// Imports
// ==============================

import { useState, useEffect } from "react"

// Routing for category navigation
import { Link } from "react-router-dom"

// Language context (i18n)
import { useLanguage } from "../contexts/LanguageContext"

// Translation content
import { translations } from "../data/translations"

// Component styles
import "../style/ourwork.css"


// ==============================
// Ourwork Component
// ==============================
function Ourwork() {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.work[language]


  // --------------------------------
  // Slider State
  // --------------------------------
  // Index of the currently active (center) card
  const [activeIndex, setActiveIndex] = useState(0)


  // --------------------------------
  // Categories Data (Language-aware)
  // --------------------------------
  const categories = [
    {
      id: 1,
      name: t.categories[0],
      image: "/work/route.png",
      path: "/route-development",
    },
    {
      id: 2,
      name: t.categories[1],
      image: "/work/publicawarness.png",
      path: "/public",
    },
    {
      id: 3,
      name: t.categories[2],
      image: "/work/passenger.png",
      path: "/passenger",
    },
    {
      id: 4,
      name: t.categories[3],
      image: "/work/policy.png",
      path: "/policy",
    },
    {
      id: 5,
      name: t.categories[4],
      image: "/work/centric.png",
      path: "/centric",
    },
  ]


  // --------------------------------
  // Auto-Rotation Effect
  // --------------------------------
  // Automatically moves to the next card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === categories.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    // Cleanup interval when component unmounts
    return () => clearInterval(interval)
  }, [categories.length])


  // ==============================
  // JSX
  // ==============================
  return (
    <div className="slider-container">

      {/* Section Title */}
      <h1 className="gallery-title">
        {t.title}
      </h1>


      {/* Slider Wrapper */}
      <div className="slider">

        {categories.map((category, index) => {

          // --------------------------------
          // Calculate Relative Card Position
          // --------------------------------
          let position = index - activeIndex

          // Normalize position to maintain circular layout
          if (position > 2) position -= categories.length
          if (position < -2) position += categories.length


          return (
            <Link
              key={category.id}
              to={category.path}
              className={`slider-card ${
                index === activeIndex ? "active" : ""
              }`}

              // --------------------------------
              // Dynamic Transform Styling
              // --------------------------------
              style={{
                transform: `
                  translateX(${position * 55}%)
                  scale(${1 - Math.abs(position) * 0.1})
                  translateZ(${-Math.abs(position) * 60}px)
                `,
                zIndex: categories.length - Math.abs(position),
                opacity: 1 - Math.abs(position) * 0.1,
              }}
            >

              {/* Card Image */}
              <div className="card-image-work">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                />
              </div>

              {/* Card Text */}
              <div className="card-content-work">
                <h2>{category.name}</h2>
              </div>

            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Ourwork
