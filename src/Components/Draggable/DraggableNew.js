import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import newSvg from "./../../assets/banners/new.svg";
import './DraggableNew.css';
import closePic from '../../assets/banners/close.png';

export const DraggableNew = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [rotation, setRotation] = useState(-20);

  const closeNew = () => {
    setIsVisible(false);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const rotationFactor = 8;
    setRotation(scrollY * rotationFactor - 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Draggable>
        <div className="newSticker" style={{ transform: 'translate(1px, 28px)' }}>
          <img
            onClick={closeNew}
            className="close"
            src={closePic}
            alt="close"
          />
          <svg width="140" height="140" viewBox="0 0 200 200">
            <g transform={`rotate(${rotation} 100 100)`} >
              <image className="new" href={newSvg} width="100%" height="100%" />
            </g>
          </svg>
        </div>
      </Draggable>
    )
  );
};
