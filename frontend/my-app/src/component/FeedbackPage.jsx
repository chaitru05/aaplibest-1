"use client"

// ==============================
// Imports
// ==============================

// Language context for i18n support
import { useLanguage } from "../contexts/LanguageContext"

// Translation data
import { translations } from "../data/translations"

// Component-specific styles
import "../style/feedback-page.css"


// ==============================
// FeedbackPage Component
// ==============================
const FeedbackPage = () => {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.feedback[language]


  // --------------------------------
  // External Feedback Form Handler
  // --------------------------------
  // Opens Google Feedback Form in a new tab
  const handleFeedbackClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSclGu598MlAUoo32xZTc9R1IWQEZrD3tmgJAKnWQJC3QcfQJA/viewform",
      "_blank"
    )
  }


  // ==============================
  // JSX
  // ==============================
  return (
    <section className="feedback">

      <div className="feedback-container">
        <div className="content-wrapper">

          {/* --------------------------------
             Left Decorative Image
             -------------------------------- */}
          <div className="image-section left-image">
            <img
              src="/bus-illus2.png"
              alt={t.imageAlt1}
              className="section-image left-rounded"
            />
          </div>


          {/* --------------------------------
             Central Content
             -------------------------------- */}
          <div className="central-content">

            {/* Main Heading */}
            <h1 className="main-title">
              {t.heading}
            </h1>

            {/* Description */}
            <div className="content-text">
              <p>{t.description}</p>
            </div>

            {/* CTA Button */}
            <button
              className="feedback-button"
              onClick={handleFeedbackClick}
            >
              {t.button}
            </button>

          </div>


          {/* --------------------------------
             Right Decorative Image
             -------------------------------- */}
          <div className="image-section right-image">
            <img
              src="/bus-illus1.png"
              alt={t.imageAlt2}
              className="section-image right-rounded"
            />
          </div>

        </div>
      </div>

    </section>
  )
}

export default FeedbackPage
