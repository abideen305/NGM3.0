import React from 'react' ;
import "../styles/about.css"
import Button from '../components/Button';
import confImg1 from "../assets/images/confImg1.png"
import confImg2 from "../assets/images/confImg2.png"
import confImg3 from "../assets/images/conf_img3.png"
import vector from "../assets/images/Vector.png"

const About = () => {
  return (
    <>
    <div className="aboutContainer ">
      <div className="about">
        <div className="gallery">
          <img src={confImg2} alt="" className='item2' />
          <img src={confImg3} alt="" />
          <img src={confImg1} alt="" className='item3' />

        </div>
        <div className="content">
          <h2>About <span>NGM Conference </span> </h2>
          <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Cum ipsa aliquam reprehenderit 
            possimus? Quas exercitationem quaerat deleniti 
            itaque commodi maxime, ipsa vel est saepe fugit 
            at quos explicabo reprehenderit beatae!</p>
            <Button title="Reserve Seat"/>
        </div>
      </div>
      <img src={vector} alt="" className='vector' />
    </div>
    </>
  )
}

export default About
