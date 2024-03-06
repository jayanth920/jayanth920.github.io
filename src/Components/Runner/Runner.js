import Marquee from "react-fast-marquee";
import './Runner.css'

const Runner= () =>{

  return (
    <div className="ticker__wrap"  >
    <Marquee 
    speed={60}
    pauseOnHover = {true}>
        <div className="ticker__item">
        HOPE YOUR HAVING A GREAT DAY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="ticker__item">
        FEEL FREE TO LOOK AT MY PORTFOLIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="ticker__item">
        TRY MOVING THINGS AROUND&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="ticker__item">
        CLICK ON SOME ITEMS TO SEE MAGIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="ticker__item">
        CHILLAX...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="ticker__item">
        DONT FORGET TO CHECK MY RESUMÉ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </Marquee>
    </div>
  )
}

export default Runner;