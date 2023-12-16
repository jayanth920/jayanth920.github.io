import React from 'react';
import './Intro.css';
import { DraggableNew } from '../../Components/Draggable/DraggableNew';
import { DraggableBox } from '../../Components/Draggable/DraggableBox';
import AboutMe from '../../Components/AboutMe/AboutMe';
// import Blob from '../../Components/Blob/Blob';

function Intro() {
  return (
    <div className="intro_wrap">
      <DraggableNew />
      <DraggableBox />
      <div className="about">
      <AboutMe />
      {/* <Blob /> */}
      </div>
    </div>
  );
}

export default Intro;
