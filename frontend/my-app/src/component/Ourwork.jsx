"use client"

// ==============================
// Imports
// ==============================
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import "../style/ourwork.css"

// ==============================
// Ourwork Component
// ==============================
function Ourwork() {
  const { language } = useLanguage()
  const t = translations.work[language]

  const [activeIndex, setActiveIndex] = useState(0)
  const isInteracting = useRef(false)

  // 🔹 Swipe refs
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const categories = [
    { id: 1, name: t.categories[0], image: "/work/route.png", path: "/route-development" },
    { id: 2, name: t.categories[1], image: "/work/publicawarness.png", path: "/public" },
    { id: 3, name: t.categories[2], image: "/work/passenger.png", path: "/passenger" },
    { id: 4, name: t.categories[3], image: "/work/policy.png", path: "/policy" },
    { id: 5, name: t.categories[4], image: "/work/centric.png", path: "/centric" },
  ]

  // --------------------------------
  // Auto-Rotation (pause on swipe)
  // --------------------------------
  useEffect(() => {
    if (isInteracting.current) return

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [categories.length, activeIndex])

  // --------------------------------
  // Swipe Handlers
  // --------------------------------
  const handleTouchStart = (e) => {
    isInteracting.current = true
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current

    if (distance > 60) {
      // swipe left
      setActiveIndex((prev) =>
        prev === categories.length - 1 ? 0 : prev + 1
      )
    } else if (distance < -60) {
      // swipe right
      setActiveIndex((prev) =>
        prev === 0 ? categories.length - 1 : prev - 1
      )
    }

    isInteracting.current = false
  }

  return (
    <div className="slider-container">
      <h1 className="gallery-title">{t.title}</h1>

      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {categories.map((category, index) => {
          let position = index - activeIndex
          if (position > 2) position -= categories.length
          if (position < -2) position += categories.length

          return (
            <Link
              key={category.id}
              to={category.path}
              className={`slider-card ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                transform: `
                  translateX(${position * 55}%)
                  scale(${index === activeIndex ? 1 : 0.9})
                  translateZ(${-Math.abs(position) * 60}px)
                `,
                zIndex:
                  index === activeIndex
                    ? 20
                    : 10 - Math.abs(position),
                opacity: 1 - Math.abs(position) * 0.15,
              }}
            >
              <div className="card-image-work">
                <img src={category.image} alt={category.name} />
              </div>

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
