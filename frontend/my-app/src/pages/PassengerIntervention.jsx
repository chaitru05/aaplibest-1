"use client"

// ==============================
// Imports
// ==============================

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Icons
import { Users, FileText, Shield, MapPin, Play } from "lucide-react"

// Language & translations
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"

// Styles
import "../style/PassengerInterventions.css"

// Shared components
import Footer from "../component/Footer"


// ==============================
// PassengerIntervention Component
// ==============================
const PassengerIntervention = () => {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.passengerCentric[language]

  // --------------------------------
  // Navigation
  // --------------------------------
  const navigate = useNavigate()

  // --------------------------------
  // Video Modal State
  // --------------------------------
  const [showVideo, setShowVideo] = useState(false)

  // --------------------------------
  // Intervention Cards Data
  // --------------------------------
  const interventions = [
    {
      id: 1,
      image: "./passenger/intervention.jpeg",
      icon: <Users className="card-icon" />,
      description: t.cards[0].description,
    },
    {
      id: 2,
      image: "./passenger/pc-videothumb.jpeg",
      icon: <FileText className="card-icon" />,
      description: t.cards[1].description,
      isVideo: true,
    },
    {
      id: 3,
      image: "./passenger/pc-income.jpeg",
      icon: <MapPin className="card-icon" />,
      description: t.cards[2].description,
    },
    {
      id: 4,
      image: "./passenger/pc-bars.jpeg",
      icon: <Shield className="card-icon" />,
      description: t.cards[3].description,
    },
  ]

  // ==============================
  // JSX
  // ==============================
  return (
    <>
      <div className="passenger-interventions-container">

        {/* Back Button */}
        <button
          className="back-home-btn"
          onClick={() => navigate("/")}
          aria-label="Back to home"
        >
          ←
        </button>

        {/* Page Title */}
        <div className="title-section">
          <h1 className="main-title">{t.title}</h1>
        </div>

        {/* Intervention Cards */}
        <div className="cards-grid">
          {interventions.map((item) => (
            <div
              key={item.id}
              className={`intervention-card ${item.isVideo ? "video-card" : ""}`}
              onClick={() => item.isVideo && setShowVideo(true)}
              style={{ cursor: item.isVideo ? "pointer" : "default" }}
            >
              <div className="card-image-container">
                <img
                  src={item.image}
                  alt={`Intervention ${item.id}`}
                  className="card-image"
                />

                {/* Play Icon Overlay */}
                {item.isVideo && (
                  <div className="play-overlay">
                    <Play size={40} />
                  </div>
                )}
              </div>

              <div className="card-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== */}
      {/* Video Modal */}
      {/* ===================== */}
      {showVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close-btn"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>

            <iframe
              src="./passenger/passenger-video.mp4"
              allow="autoplay"
              allowFullScreen
              title="Passenger Feedback Video"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default PassengerIntervention
