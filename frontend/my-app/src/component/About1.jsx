"use client"

// ==============================
// Imports
// ==============================

// Animation library
import { motion } from "framer-motion"

// Hook to detect when component enters viewport
import { useInView } from "react-intersection-observer"

// Language context for i18n
import { useLanguage } from "../contexts/LanguageContext"

// Translation data
import { translations } from "../data/translations"

// Component-specific styles
import "../style/about1.css"


// ==============================
// About1 Component
// ==============================
const About1 = () => {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.about1[language]


  // --------------------------------
  // Scroll-based Animation Trigger
  // --------------------------------
  // Animation runs when 20% of section enters viewport
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })


  // --------------------------------
  // Framer Motion Animation Variants
  // --------------------------------

  // Text block animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  // Image animation (fade + scale)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  }

  // Individual text elements animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }


  // ==============================
  // JSX
  // ==============================
  return (
    <>
      {/* --------------------------------
         Decorative SVG Wave (Top Divider)
         -------------------------------- */}
      <div className="about1-top-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          {/* Yellow wave line */}
          <path
            fill="none"
            stroke="#f9b233"
            strokeWidth="6"
            d="M0,100 C300,0 600,200 900,100 C1150,30 1350,150 1440,80"
          />

          {/* Red wave line */}
          <path
            fill="none"
            stroke="#e63946"
            strokeWidth="4"
            d="M0,120 C300,40 600,240 900,120 C1150,60 1350,180 1440,100"
          />
        </svg>
      </div>


      {/* --------------------------------
         About Section
         -------------------------------- */}
      <section id="about1" className="about1">

        {/* Main Container (Intersection Observer Target) */}
        <div className="about1-container" ref={ref}>
          <div className="about1-content">

            {/* Text Content */}
            <motion.div
              className="about1-text"
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h3 variants={itemVariants}>
                {t.heading}
              </motion.h3>

              {/* Desktop Full Description */}
              <motion.p className="desktop-text" variants={itemVariants}>
                {t.description}
              </motion.p>

              {/* Mobile Short Description */}
              <motion.p className="mobile-text" variants={itemVariants}>
                {t.shortdesciption}
              </motion.p>
            </motion.div>


            {/* Image Section */}
            <motion.div
              className="about1-image"
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <img
                src="about-busimg.jpeg"
                alt="BEST Bus Service"
                style={{
                  width: "700px",
                  height: "350px",
                  objectFit: "cover",
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About1
