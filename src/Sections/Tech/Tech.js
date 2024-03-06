import TechBanner from "../../Components/TechBanner/TechBanner"
import TechBox from "../../Components/TechBox/TechBox"
import "./Tech.css"

function About() {
  return (
    <div className="tech-container">
        <TechBanner />
        <TechBox />
    </div>
  )
}

export default About