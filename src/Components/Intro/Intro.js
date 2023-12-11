import React from 'react'
import './Intro.css'
import {DraggableNew} from '../Draggable/DraggableNew'
import {DraggableBox} from '../Draggable/DraggableBox'
import LabelInfo from "../LabelInfo/LabelInfo"
// import MyPic from '../MyPic/MyPic'

function Intro() {

  return (
    <div className="intro_wrap">
      <DraggableNew />
      <DraggableBox/>
      <LabelInfo/>
      {/* <MyPic/> */}
    </div>
  )
}

export default Intro