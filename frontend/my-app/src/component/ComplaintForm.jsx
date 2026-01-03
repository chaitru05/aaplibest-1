"use client"

// ==============================
// Imports
// ==============================

import React from "react"

// Language context for i18n support
import { useLanguage } from "../contexts/LanguageContext"

// Translation data
import { translations } from "../data/translations"

// Component-specific styles
import "../style/complaint-form.css"


// ==============================
// ComplaintForm Component
// ==============================
export default function ComplaintForm() {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.complaint[language]


  // --------------------------------
  // External Complaint Form Handler
  // --------------------------------
  // Opens Google Form in a new browser tab
  const handleComplaintClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSclGu598MlAUoo32xZTc9R1IWQEZrD3tmgJAKnWQJC3QcfQJA/viewform",
      "_blank"
    )
  }


  // ==============================
  // JSX
  // ==============================
  return (
    <div className="complaint-container">

      {/* --------------------------------
         Image Section
         -------------------------------- */}
      <div className="complaint-image-section">
        <img
          src="/complaint.jpeg"
          alt={t.imageAlt}
          className="complaint-image"
        />
      </div>


      {/* --------------------------------
         Text & Action Section
         -------------------------------- */}
      <div className="complaint-form-section">

        <div className="complaint-content">

          {/* Title */}
          <h1 className="complaint-title">
            {t.headingLine1} <br /> {t.headingLine2}
          </h1>

          {/* Desktop Description */}
          <p className="complaint-description">
            {t.description}
          </p>

          {/* Mobile Short Description */}
          <p className="mobile-text">
            {t.shortdescription}
          </p>

          {/* CTA Button */}
          <div className="complaint-button-wrapper">
            <button
              className="submit-button"
              onClick={handleComplaintClick}
            >
              {t.button}
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}
