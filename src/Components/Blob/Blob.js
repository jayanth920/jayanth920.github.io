import "./Blob.scss"
import Draggable from "react-draggable"

import Img2 from "../../assets/myPics/Img2.png"

function Blob() {
  return (
    <Draggable>
            <div className="blop_wrap">
                <div className="circle">
                     <img src={Img2} alt=''/>
                </div>
            </div>
    </Draggable>
  )
}

export default Blob