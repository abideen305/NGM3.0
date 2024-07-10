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
          <p>Nasir Giwa Mentorship (NGM) platform is a mentorship
            community for both students as well as early and mid-stage
            career professionals who aspire to be leaders, entrepreneurs
            and/or business executives</p>
          <p>The NGM Conference is an event that brings together a
            community of like-minded individuals who can share their
            knowledge and experiences, and inspire each other to achieve
            their full potential.</p>
            <Button title="Reserve Seat"/>
        </div>
      </div>
      <img src={vector} alt="" className='vector' />
    </div>
    </>
  )
}

export default About
