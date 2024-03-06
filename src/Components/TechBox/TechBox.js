import "./TechBox.css";
import {
  Js,
  Html,
  Css,
  ReactJS,
  NodeJS,
  MongoDB,
  Firebase,
} from "../Techs/Techs";

function TechBox() {
  return (
    <div className="tech-box">
      <Js />
      <Html />
      <Css />
      <ReactJS />
      <NodeJS />
      <MongoDB />
      <Firebase />
    </div>
  );
}

export default TechBox;
