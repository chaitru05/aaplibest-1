"use client"

import React, { useState } from "react"
import "../style/policyacc.css"
import Footer from "../component/Footer"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import { useNavigate } from "react-router-dom"
import { Play } from "lucide-react"

const Policyacc = () => {
  const { language } = useLanguage()
  const t = translations.policyAcc[language]
  const navigate = useNavigate()

  // ------------------------------
  // Video Modal State
  // ------------------------------
  const [showVideo, setShowVideo] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")

  // ------------------------------
  // Open Video
  // ------------------------------
  const openVideo = (src) => {
    setVideoSrc(src)
    setShowVideo(true)
  }

  return (
    <>
      <div className="policy-container">

        {/* Back Button */}
        <button
          className="back-home-btn-policy"
          onClick={() => navigate("/")}
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

        {/* Hero Section */}
        <div className="policy-hero-section">
          <div className="policy-bg-box">
            <h1 className="policy-hero-title">{t.title}</h1>

            <div className="policy-hero-content">
              <ul className="policy-bullet-list">
                <li>{t.points[0]}</li>
                <li>{t.points[1]}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="policy-full-width-rectangle">
          <img
            src="./policy/policyimg2.jpeg"
            alt={t.imageAlt}
            className="policy-rectangle-image"
          />
        </div>

        {/* Cards Section */}
        <div className="policy-cards-container">

          {/* Image Card */}
          <div className="policy-card">
            <img
              src="./policy/policyimg2.jpeg"
              alt={t.cardAlt1}
              className="policy-card-image"
            />
          </div>

          {/* Video Card 1 */}
          <div
            className="policy-card video-card"
            onClick={() =>
              openVideo("./policy/policy-video-1.mp4")
            }
          >
            <img
              src="./policy/policyvideoimg2.png"
              alt={t.cardAlt2}
              className="policy-card-image"
            />
            <div className="play-overlay">
              <Play size={42} />
            </div>
          </div>

          {/* Video Card 2 */}
          <div
            className="policy-card video-card"
            onClick={() =>
              openVideo("https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/policy-video-2_q4utrw.mp4")
            }
          >
            <img
              src="./policy/policyvideoimg1.png"
              alt={t.cardAlt3}
              className="policy-card-image"
            />
            <div className="play-overlay">
              <Play size={42} />
            </div>
          </div>

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
              src={videoSrc}
              allow="autoplay"
              allowFullScreen
              title="Policy Awareness Video"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Policyacc
