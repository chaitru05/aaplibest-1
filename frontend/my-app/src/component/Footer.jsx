"use client"

// ==============================
// Imports
// ==============================

// Language context for i18n support
import { useLanguage } from "../contexts/LanguageContext"

// Translation data
import { translations } from "../data/translations"

// Component-specific styles
import "../style/Footer.css"


// ==============================
// Footer Component
// ==============================
export default function Footer() {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.footer[language]


  // ==============================
  // JSX
  // ==============================
  return (
    <footer className="footer">

      {/* --------------------------------
         Decorative Top Bar
         -------------------------------- */}
      <div className="footer-topbar" />


      {/* --------------------------------
         Main Footer Content
         -------------------------------- */}
      <div className="footer-inner">

        {/* ==============================
           Brand Section
           ============================== */}
        <div className="footer-brand">

          {/* Logo */}
          <div className="footer-logo">
            <div className="footer-logo-icon">✦</div>
            <span className="footer-logo-text">Aapli Best.</span>
          </div>

          {/* Description (Desktop) */}
          <p className="footer-description">
            {t.description}
          </p>

          {/* Description (Mobile) */}
          <p className="mobile-text-footer">
            {t.shortdesciption}
          </p>

          {/* Social Media Links */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com/share/1DQaeAjxsr/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              📘
            </a>

            <a
              href="https://x.com/aaplibest"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Twitter"
            >
              🐦
            </a>

            <a
              href="https://www.instagram.com/aaplibest/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Instagram"
            >
              📸
            </a>
          </div>
        </div>


        {/* ==============================
           Quick Links Section
           ============================== */}
        <div className="footer-links">
          <h3>{t.quickLinks.title}</h3>
          <ul>
            <li>
              <a
                href="https://bestundertaking.com/transport.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.quickLinks.bestTransport}
              </a>
            </li>
          </ul>
        </div>


        {/* ==============================
           Contact Information
           ============================== */}
        <div className="footer-contact">
          <h3>{t.contact.title}</h3>

          <p>
            <strong>{t.contact.helpline}:</strong>{" "}
            <a href="tel:1800227550">
              1800-227-550 (Toll Free)
            </a>
          </p>

          <p>
            <strong>{t.contact.email}:</strong>{" "}
            <a href="mailto:transport@bestundertaking.com">
              transport@bestundertaking.com
            </a>
          </p>
        </div>

      </div>


      {/* --------------------------------
         Footer Bottom Bar
         -------------------------------- */}
      <div className="footer-bottom">
        <p>{t.copyright}</p>

        <div className="footer-legal">
          <a href="#">{t.privacy}</a>
          <span>|</span>
          <a href="#">{t.cookies}</a>
        </div>
      </div>

    </footer>
  )
}
