import './AboutMe.css'
import Draggable from 'react-draggable';
import LabelInfo from '../LabelInfo/LabelInfo';


function AboutMe() {
  return (
      <div className='aboutMe'>
    <Draggable>
        <div className='aboutMeText'>About Me...</div>
    </Draggable>
        <LabelInfo/>
        </div>
  )
}

export default AboutMe
