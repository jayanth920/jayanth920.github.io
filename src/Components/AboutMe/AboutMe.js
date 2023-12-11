import './AboutMe.css'
import Draggable from 'react-draggable';
import LabelInfo from '../LabelInfo/LabelInfo';
import arrow from "../../assets/banners/arrow.png"

function AboutMe() {
  return (
      <div className='aboutMe'>
    <Draggable>
        <div className='aboutMeText'>About Me...</div>
    </Draggable>
        <LabelInfo/>
        <Draggable>
        <div className="arrow">
            <img className="arrow_img" src={arrow} alt="arrow" />
        </div>
        </Draggable>
        </div>
  )
}

export default AboutMe
