"use client"

// ==============================
// Imports
// ==============================

import React, { useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"

// Styles
import styles from "../style/vision-section.module.css"
import "../style/BestVitthal.css"

// Shared components
import Footer from "../component/Footer"

// Language / i18n
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"


// ==============================
// Cnetric Component
// ==============================
const Cnetric = () => {

  // --------------------------------
  // State
  // --------------------------------
  const [selectedVideo, setSelectedVideo] = useState(null)

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.centric[language]

  // --------------------------------
  // Navigation
  // --------------------------------
  const navigate = useNavigate()

  // --------------------------------
  // Data Preparation
  // --------------------------------
  const projectData = {
    title: t.vitthalTitle,
    cards: t.vitthalCards,
  }

  const bestDayData = {
    title: t.bestDayTitle,
    description: t.bestDayDescription,
    media: t.bestDayMedia,
  }

  // --------------------------------
  // Video Modal Handlers
  // --------------------------------
  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  // ==============================
  // JSX
  // ==============================
  return (
    <section
      className={styles["vision-section-container"]}
      style={{ position: "relative", padding: 0, overflow: "hidden" }}
    >

      {/* Back Button */}
      <button
        className="back-home-btn"
        onClick={() => navigate("/")}
        aria-label="Go back to home"
      >
        ←
      </button>

      {/* Hero Image */}
      <img
        src="/centric/hero-centric-1.jpeg"
        alt="Cnetric"
        style={{ width: "100%", display: "block" }}
      />

      {/* HERO SECTION */}
      <section className={styles["hero-section-container"]}>
        <div className={styles["hero-section-content"]}>
          <div className={styles["hero-text-column"]}>
            <h1
              className={styles["hero-heading"]}
              dangerouslySetInnerHTML={{ __html: t.heroTitle }}
            />
          </div>

          <div className={styles["hero-description-column"]}>
            <p className={styles["hero-description"]}>
              {t.heroDescription}
            </p>
          </div>
        </div>

        {/* Hero video remains unchanged */}
        <div className={styles["hero-video-container"]}>
          <video width="100%" height="auto" controls>
            <source src="https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/centric-video_giyvfr.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= VITTHAL PROJECT ================= */}
      <div className="best-vitthal-container">

        <header className="page-header">
          <h1 className="main-title">{projectData.title}</h1>
        </header>

        <section className="description-section">
          <p
            className="description-intro"
            dangerouslySetInnerHTML={{ __html: t.vitthalIntro }}
          />
          <p className="description-conclusion">
            {t.vitthalConclusion}
          </p>
        </section>

        <section className="content-section-vithal">
          <div className="cards-container-vithal">
            {projectData.cards.map((card) => (
              <div key={card.id} className="project-card">
                <div
                  className="card-image-container"
                  onClick={() =>
                    card.hasVideo && openVideo(card.videoUrl)
                  }
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />

                  {card.hasVideo && (
                    <div className="video-overlay">
                      <div className="play-button">▶</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= BEST DAY ================= */}
      <section className="best-day-section">
        <div className="best-day-content">

          <div className="best-day-text">
            <h2 className="best-day-title">
              {bestDayData.title}
            </h2>
            <p className="best-day-description">
              {bestDayData.description}
            </p>
          </div>

          <div className="media-grid">
            {bestDayData.media.map((item) => (
              <div key={item.id} className="media-item">
                <div
                  className="media-image-container"
                  onClick={() =>
                    item.hasVideo && openVideo(item.videoUrl)
                  }
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="media-image"
                  />

                  {item.hasVideo && (
                    <div className="video-overlay">
                      <div className="play-button">▶</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= VIDEO MODAL (PORTAL) ================= */}
      

      <Footer />
    </section>
  )
}

export default Cnetric
