"use client"

// ==============================
// Imports
// ==============================

import { useState } from "react"

// Smooth scroll navigation
import { Link } from "react-scroll"

// Icon library
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Globe,
} from "lucide-react"

// Language context (i18n)
import { useLanguage } from "../contexts/LanguageContext"

// Translation content
import { translations } from "../data/translations"

// Component styles
import "../style/Navbar.css"


// ==============================
// Navbar Component
// ==============================
const Navbar = () => {

  // --------------------------------
  // State: Mobile Menu Toggle
  // --------------------------------
  const [menuOpen, setMenuOpen] = useState(false)


  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language, toggleLanguage, isMarathi } = useLanguage()
  const t = translations.navbar[language]


  // --------------------------------
  // Handlers
  // --------------------------------

  // Close mobile menu after clicking a nav link
  const handleLinkClick = () => {
    setMenuOpen(false)
  }


  // ==============================
  // JSX
  // ==============================
  return (
    <div className="navbar-wrapper">

      {/* =====================================
         Top Contact & Social Bar
         ===================================== */}
      <div className="top-bar">
        <div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>aaplibest@gmail.com</span>
            </div>
          </div>

          {/* Language Toggle + Social Links */}
          <div className="social-links">

            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={`Switch to ${isMarathi ? "English" : "Marathi"}`}
            >
              <Globe size={16} />
              <span>{isMarathi ? "ENG" : "मर"}</span>
            </button>

            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/share/1DQaeAjxsr/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://x.com/aaplibest"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://www.instagram.com/aaplibest/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029VaFYvmzL2ATpdDo6tp0B"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>

          </div>
        </div>
      </div>


      {/* =====================================
         Main Navigation Bar
         ===================================== */}
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <img src="/logo.jpg" alt="Aapli Best Logo" />
        </div>


        {/* Navigation Links */}
        <nav className={`nav-links${menuOpen ? " open" : ""}`}>
          <ul>

            <Link
              to="home"
              spy
              smooth
              offset={-700}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.home}</li>
            </Link>

            <Link
              to="about"
              spy
              smooth
              offset={-100}
              duration={300}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.about}</li>
            </Link>

            <Link
              to="team"
              spy
              smooth
              offset={-60}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.team}</li>
            </Link>

            <Link
              to="work"
              spy
              smooth
              offset={-50}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.work}</li>
            </Link>

            <Link
              to="volunteer"
              spy
              smooth
              offset={-100}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.volunteer}</li>
            </Link>

            <Link
              to="feedback"
              spy
              smooth
              offset={-100}
              duration={500}
              activeClass="active"
              onClick={handleLinkClick}
            >
              <li>{t.contact}</li>
            </Link>

          </ul>
        </nav>


        {/* Mobile Hamburger Menu */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
        >
          <span />
          <span />
          <span />
        </div>

      </div>
    </div>
  )
}

export default Navbar
