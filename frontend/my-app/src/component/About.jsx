"use client"

// ==============================
// Imports
// ==============================

// Animation library
import { motion } from "framer-motion"

// Hook to detect when component enters viewport
import { useInView } from "react-intersection-observer"

// Custom language context for i18n
import { useLanguage } from "../contexts/LanguageContext"

// Translation content
import { translations } from "../data/translations"

// Component styles
import "../style/About.css"


// ==============================
// About Component
// ==============================
const About = () => {

  // --------------------------------
  // Language & Translations
  // --------------------------------
  const { language } = useLanguage()
  const t = translations.about[language]


  // --------------------------------
  // Scroll-based Animation Trigger
  // --------------------------------
  // `inView` becomes true once the section is visible on screen
  const [ref, inView] = useInView({
    triggerOnce: true, // animation runs only once
    threshold: 0.2,    // 20% visibility triggers animation
  })


  // --------------------------------
  // Framer Motion Animation Variants
  // --------------------------------

  // Parent container animation (staggered children)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  }

  // Individual text items animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      transition: { duration: 1, delay: 0.3 },
    },
  }


  // ==============================
  // JSX
  // ==============================
  return (
    <section id="about" className="about">

      {/* --------------------------------
         Decorative SVG (Bottom Left)
         -------------------------------- */}
      <span className="about-svg-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="120" height="120">
          <g fill="#880911">
            <path d="M0 0v120a360 360 0 0 1 360 360h120A480 480 0 0 0 0 0Z" />
            <path d="M0 240v120a120 120 0 0 1 120 120h120A240 240 0 0 0 0 240Z" />
          </g>
        </svg>
      </span>


      {/* --------------------------------
         Main Container (Scroll Observer)
         -------------------------------- */}
      <div className="container" ref={ref}>

        {/* Section Title */}
        <motion.div
          className="section-title"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="about-h2">
            {t.title.split(" ")[0]}
            <span className="text-accent">
              {t.title.split(" ")[1] || ""}
            </span>

            {/* Decorative SVG inside title */}
            <span className="about-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 48 48">
                <g fill="#880911">
                  <circle cx="24" cy="24" r="24" />
                  <circle cx="24" cy="24" r="16" fill="#fff" />
                  <circle cx="24" cy="24" r="8" />
                </g>
              </svg>
            </span>
          </h2>
        </motion.div>


        {/* --------------------------------
           Content Section
           -------------------------------- */}
        <div className="about-content">

          {/* Image Section */}
          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img
              src="https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2023/9/13/red-bus.jpg?w=1120&h=583"
              alt="About Section Visual"
            />

            {/* Experience Badge */}
            <div className="about-experience">
              <span className="years">4+</span>
              <span className="text">{t.experience}</span>
            </div>
          </motion.div>


          {/* Text Content */}
          <motion.div
            className="about-text"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants}>
              {t.heading}
            </motion.h3>

            {/* Desktop Text */}
            <motion.p className="desktop-text" variants={itemVariants}>
              {t.description}
            </motion.p>

            {/* Mobile Short Text */}
            <motion.p className="mobile-text" variants={itemVariants}>
              {t.shortdesciption}
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
