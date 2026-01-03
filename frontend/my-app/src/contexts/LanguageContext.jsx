"use client"

// ==============================
// Imports
// ==============================

import { createContext, useContext, useState } from "react"


// ==============================
// Language Context
// ==============================

// Create a context to store language-related state
const LanguageContext = createContext()


// ==============================
// Custom Hook: useLanguage
// ==============================
// Ensures that the hook is only used within LanguageProvider
export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}


// ==============================
// LanguageProvider Component
// ==============================
export const LanguageProvider = ({ children }) => {

  // --------------------------------
  // Language State
  // --------------------------------
  // 'en' → English
  // 'mr' → Marathi
  const [language, setLanguage] = useState("en")


  // --------------------------------
  // Toggle Language
  // --------------------------------
  // Switches between English and Marathi
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "mr" : "en"))
  }


  // --------------------------------
  // Context Value
  // --------------------------------
  // Exposed values & helpers for consumers
  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isMarathi: language === "mr",
    isEnglish: language === "en",
  }


  // ==============================
  // Provider
  // ==============================
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
