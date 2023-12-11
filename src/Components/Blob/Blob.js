import "./Blob.scss"
import Draggable from "react-draggable"

import Img2 from "../../assets/myPics/Img2.png"

function Blob() {
  return (
    <Draggable>

            <div class="blop_wrap">
                <div class="circle">
                     <img src={Img2} alt=''/>
                </div>
  
            </div>
    </Draggable>
  )
}

export default Blob