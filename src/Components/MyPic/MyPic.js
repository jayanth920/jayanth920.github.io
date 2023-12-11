import React, { useEffect } from 'react';
import './MyPic.css';
import hoverEffect from 'hover-effect';
import Img1 from '../../assets/myPics/Img1.png';
import Img2 from '../../assets/myPics/Img2.png'

function MyPic() {
  useEffect(() => {
    const picContainer = document.querySelector(".picContainer");
    
    // Check if the container exists before creating the hover effect
    if (picContainer) {
      var image_animate = new hoverEffect({
        parent: picContainer,
        intensity: .3,
        image1: Img2,
        image2: Img1,
        displacementImage: Img1,
      });
    }

    // Cleanup function, remove the hover effect when the component is unmounted
    return () => {
      if (image_animate) {
        image_animate.remove();
      }
    };
  }, []);

  return (
    <div className="picContainer" style={{ borderRadius: "20px" }}>
      {/* Your content */}
    </div>
  );
}

export default MyPic;
