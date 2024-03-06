import ProjectBanner from '../../Components/ProjectBanner/ProjectBanner'
import ProjectBox from '../../Components/ProjectBox/ProjectBox'
import "./Projects.css"
function Projects() {
  return (
    <div className="projects">
      <ProjectBanner/>
      <ProjectBox/>
    </div>

  )
}

export default Projects