import { useEffect, useState } from "react"
import TeamSection from "./TeamSection"      // Web view
import Teamsectionmv from "./Teamsectionmv"  // Mobile view

const TeamResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return isMobile ? <Teamsectionmv /> : <TeamSection />
}

export default TeamResponsive
