import Contact from "../../Sections/Contact/Contact";
import Intro from "../../Sections/Intro/Intro";
import Projects from "../../Sections/Projects/Projects";
import Tech from "../../Sections/Tech/Tech";
import "./Body.css";



function Body() {
  return (
    <div className="body">
      <Intro />
      <Tech />
      <Projects />
      <Contact />
    </div>


  )
}

export default Body