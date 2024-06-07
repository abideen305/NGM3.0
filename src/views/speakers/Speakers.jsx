import React from 'react'
import "../../styles/speaker.css"
import sp2 from "../../assets/images/sp2.png"
import sp3 from "../../assets/images/sp3.png"
import sp4 from "../../assets/images/sp4.png"
import sp5 from "../../assets/images/sp5.png"
import Card from './Card'

const Speakers = () => {
  return (
    <>
        <div className="speakerContainer">
          <h2 className='title' style={{color:'white'}} >Event <span>Speaker</span></h2>
          <div className="speakers">
            <Card name='Ridwan Sodamade' title='Product Manager, NGM Conference' />
            <Card spImg={sp2}/>
            <Card spImg={sp3}/>
            <Card spImg={sp4}/>
            <Card spImg={sp5}/>
            <Card spImg={sp5}/>
            <Card spImg={sp5}/>
            <Card spImg={sp5}/>
          </div>
        </div>
    </>
  )
}

export default Speakers
