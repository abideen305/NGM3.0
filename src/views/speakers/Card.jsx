import React from 'react'
import "../../styles/speaker.css"
import sp1 from "../../assets/pastSpeakers/sp1.png"
const Card = ({
    spImg =sp1, 
    name='Alhaji Nasir Giwa', 
    title='Founder',
    organisation = 'Nasir Giwa Foundation'
}) => {
  return (
    <>
      <div className="card"> 
              <div className=""> 
                <img src={spImg} alt="" className='sp' />
              </div>
              <div className="smedia">
              <h3>{name}</h3>                
              </div>
              <h6>{title}</h6>
              <p>{organisation}</p>
            </div>
    </>
  )
}

export default Card
