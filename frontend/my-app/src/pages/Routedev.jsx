"use client"

// ==============================
// Imports
// ==============================

import React, { useState } from "react"
import { Play } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Language context (i18n)
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"

// Footer component
import Footer from "../component/Footer"

// Styles
import "../style/Route.css"


// ==============================
// Routedev Component
// ==============================
const Routedev = () => {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.routeDev[language]

  // --------------------------------
  // Navigation
  // --------------------------------
  const navigate = useNavigate()

  // --------------------------------
  // Video Modal State
  // --------------------------------
  const [showVideo, setShowVideo] = useState(false)

  const openVideo = () => {
    setShowVideo(true)
  }

  const closeVideo = () => {
    setShowVideo(false)
  }

  // ==============================
  // JSX
  // ==============================
  return (
    <>
      {/* =====================================
         HERO / INTRO SECTION
         ===================================== */}
      <section className="route-section">

        {/* Back to Home Button */}
        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
          aria-label="Back to home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.5 19a1 1 0 0 1-.7-.29l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 1 1 1.4 1.42L11.9 11H20a1 1 0 1 1 0 2h-8.1l4.3 4.29A1 1 0 0 1 15.5 19z" />
          </svg>
        </button>

        {/* Heading */}
        <div className="route-content-section">
          <h1
            className="route-heading"
            dangerouslySetInnerHTML={{ __html: t.heading }}
          />
        </div>

        {/* Hero Image with Mask */}
        <div className="route-image-mask-container">
          <div className="route-cont"></div>
          <div className="route-cont2"></div>

          <div className="route-image-mask">
            <img src="/routedev/Route-hero.jpeg" alt="Route Advocacy" />
          </div>
        </div>
      </section>

      {/* =====================================
         A30 ROUTE STORY SECTION
         ===================================== */}
      <section className="route-wrapper">

        {/* Left: Image Grid */}
        <div className="route-left">
          <div className="route-card-grid">
            <div className="route-card">
              <img src="/routedev/A84.jpeg" alt="Community work" />
            </div>
            <div className="route-card">
              <img src="/routedev/A30-2.jpeg" alt="Public transport" />
            </div>
            <div className="route-card wide">
              <img src="/routedev/A30-3.jpeg" alt="BEST route" />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="route-right">
          <h2>{t.a30Title}</h2>
          <p dangerouslySetInnerHTML={{ __html: t.a30Desc }} />
        </div>
      </section>

      {/* =====================================
         ACHIEVEMENTS + VIDEO SECTION
         ===================================== */}
      <section className="route-achievements">
        <div className="achievements-container">

          <h2 className="achievements-heading">
            {t.achievementsTitle}
          </h2>

          <div className="content-layout">

            {/* Video Thumbnail */}
            <div
              className="video-section"
              onClick={openVideo}
              role="button"
              tabIndex={0}
              aria-label="Play achievements video"
            >
              <img
                src="/routedev/routevideo.jpeg"
                alt="Video thumbnail"
              />
              <div className="play-overlay">
                <Play className="play-icon" size={64} />
              </div>
            </div>

            {/* Achievements Cards */}
            <div className="achievements-grid">
              {t.achievements.map((item, index) => (
                <div key={index} className="achievement-card">
                  <h3 className="card-title-ach">{item.title}</h3>
                  <p className="card-description-ach">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
         VIDEO MODAL (GOOGLE DRIVE)
         ===================================== */}
      {showVideo && (
        <div
          className="video-modal-overlay"
          onClick={closeVideo}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close-btn"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ✕
            </button>

            <iframe
              src="https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/A30-video_piyogb.mp4"
              allow="autoplay"
              allowFullScreen
              title="Route Development Video"
            />
          </div>
        </div>
      )}

      {/* =====================================
         FOOTER
         ===================================== */}
      <Footer />
    </>
  )
}

export default Routedev
