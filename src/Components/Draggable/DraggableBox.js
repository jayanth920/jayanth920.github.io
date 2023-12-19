import React from 'react';
import Draggable from 'react-draggable';
import './DraggableBox.css' 

export const DraggableBox = () => {
  const ref = React.createRef()
  return (
    <Draggable ref={ref}>

  <div id='box'>
  <div className="content">
        <p>FRONT-END</p>
        <p>🤍</p>
        </div>
  </div>

    </Draggable>
  );
};
