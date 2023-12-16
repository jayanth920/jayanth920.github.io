import Intro from "../../Sections/Intro/Intro";
import Projects from "../../Sections/Projects/Projects";
import TechStack from "../../Sections/TechStack/TechStack";
import "./Body.css";



function Body() {
  return (
    <div className="body">
      <Intro />
      <TechStack />
      <Projects />
    </div>


  )
}

export default Body