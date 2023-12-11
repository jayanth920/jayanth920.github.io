import React, { useState } from 'react';
import './ProjectBox.css';
import ProjectMock from '../ProjectMock/ProjectMock';

function ProjectBox() {
  const projectsToShowInitially = 4;
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleToggleShow = () => {
    setShowAllProjects((prev) => !prev);
  };

  const projectsToDisplay = showAllProjects ? ProjectMock : ProjectMock.slice(0, projectsToShowInitially);

  return (
    <div className="project_wrap">
      {projectsToDisplay.map((project) => (
        <div className="project" key={project.id}>
          {/* Render project details here */}
          <h2>{project.name}</h2>
          <p>Technologies: {project.technologies.join(', ')}</p>
          <p>Description: {project.description}</p>
        </div>
      ))}
      <button className='show_btn' onClick={handleToggleShow}>
        {showAllProjects ? 'Show Less' : 'Show More'}
      </button>
      {showAllProjects ? <div id='more'>The list gets updated regularly with new projects. Check back again soon !</div> : null }
    </div>
  );
}

export default ProjectBox;
