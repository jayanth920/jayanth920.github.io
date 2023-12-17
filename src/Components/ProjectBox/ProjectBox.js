import React, { useState } from 'react';
import './ProjectBox.css';
import ProjectMock from '../ProjectMock/ProjectMock';

function ProjectBox() {
  const projectsToShowInitially = 4;
  const [showAllProjects, setShowAllProjects] = useState(false);

//   const handleToggleShow = () => {
//     setShowAllProjects((prev) => !prev);
//   };

  const projectsToDisplay = showAllProjects ? ProjectMock : ProjectMock.slice(0, projectsToShowInitially);

  return (
    <div className="project_wrap">
      {projectsToDisplay.map((project) => (
        <div className="project" key={project.id}>
          <img className="project_pic" src={project.imageUrl} alt={project.name} />       
            <div className="project_info">
            <h2>{project.name}</h2><br></br>
            <p>Technologies: {project.technologies.join(', ')}</p>
            <p>Description: {project.description}</p>
          </div>
        </div>
      ))}
      {/* <button className='show_btn' onClick={handleToggleShow}>
        {showAllProjects ? 'Show Less' : 'Show More'}
      </button> */}
    <div id='more'>The list gets updated regularly with new projects. Check back again soon !</div>
    </div>
  );
}

export default ProjectBox;
