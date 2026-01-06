"use client"

import React, { useState } from "react"
import "../style/PublicAwareness.css"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Footer from "../component/Footer"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../data/translations"
import { useNavigate } from "react-router-dom"

const PublicAwareness = () => {
  const { language } = useLanguage()
  const t = translations.publicAwareness[language]
  const navigate = useNavigate()

  // ------------------------------
  // Video Modal State
  // ------------------------------
  const [showVideo, setShowVideo] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")

  const openVideo = (src) => {
    setVideoSrc(src)
    setShowVideo(true)
  }

  // ------------------------------
  // Cards Data
  // ------------------------------
  const publicAwarenessCards = [
    {
      id: 1,
      image: "./publicawarness/public-img.jpeg",
      description: t.cards[0],
    },
    {
      id: 2,
      image: "./publicawarness/bestday.jpeg",
      description: t.cards[1],
      isVideo: true,
      videoSrc: "https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/7aug_mdipid.mp4",
    },
    {
      id: 3,
      image: "./publicawarness/bestexb.jpeg",
      description: t.cards[2],
      isVideo: true,
      videoSrc: "https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/bestexb_k7ymoq.mp4",
    },
    {
      id: 4,
      image: "./publicawarness/latenigth.jpeg",
      description: t.cards[3],
    },
  ]

  const socialMediaCards = [
    {
      id: 1,
      image: "./publicawarness/bus-img2.jpeg",
      description: "",
      isVideo: true,
      videoSrc: "https://res.cloudinary.com/dhrssdlwp/video/upload/f_auto,q_auto/social-video_ygwh3k.mp4",
    },
    { id: 2, image: "./publicawarness/socialmedia1.jpeg", description: "" },
    { id: 3, image: "./publicawarness/social2.jpeg", description: "" },
  ]

  return (
    <main className="main-public">

      {/* Back Button */}
      <button
        className="back-home-btn"
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

      {/* ===================== */}
      {/* Public Awareness Section */}
      {/* ===================== */}
      <section className="publicawar-public-awareness">
        <div className="publicawar-awareness-header">
          <h1 className="publicawar-awareness-title">{t.title}</h1>
        </div>

        <div className="publicawar-cards-grid">
          {publicAwarenessCards.map((card) => (
            <div
              key={card.id}
              className={`publicawar-card ${card.isVideo ? "video-card" : ""}`}
              onClick={() => card.isVideo && openVideo(card.videoSrc)}
              style={{ cursor: card.isVideo ? "pointer" : "default" }}
            >
              <img
                src={card.image}
                alt="card content"
                className="publicawar-card-image"
              />

              {card.isVideo && (
                <div className="play-overlay">
                  <Play size={42} />
                </div>
              )}

              <p className="publicawar-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== */}
      {/* Social Media Section */}
      {/* ===================== */}
      <section className="publicawar-social-media">
        <div className="publicawar-social-header">
          <h2 className="publicawar-social-title">{t.socialTitle}</h2>
          <p className="publicawar-social-description">
            {t.socialDescription}
          </p>
        </div>

        <div className="publicawar-cards-grid-three">
          {socialMediaCards.map((card) => (
            <div
              key={card.id}
              className={`publicawar-card ${card.isVideo ? "video-card" : ""}`}
              onClick={() => card.isVideo && openVideo(card.videoSrc)}
              style={{ cursor: card.isVideo ? "pointer" : "default" }}
            >
              <img
                src={card.image}
                alt="card content"
                className="publicawar-card-image"
              />

              {card.isVideo && (
                <div className="play-overlay">
                  <Play size={42} />
                </div>
              )}

              <p className="publicawar-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

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
              title="Public Awareness Video"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

export default PublicAwareness
