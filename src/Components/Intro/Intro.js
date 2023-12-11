import React from 'react';
import './Intro.css';
import { DraggableNew } from '../Draggable/DraggableNew';
import { DraggableBox } from '../Draggable/DraggableBox';
import LabelInfo from '../LabelInfo/LabelInfo';
import AboutMe from '../AboutMe/AboutMe';

function Intro() {
  return (
    <div className="intro_wrap">
      <DraggableNew />
      <DraggableBox />
      <AboutMe />
      <LabelInfo />
    </div>
  );
}

export default Intro;
