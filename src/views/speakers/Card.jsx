import React from 'react'
import "../../styles/speaker.css"
import twitter from "../../assets/images/wtwitter.png"
import linkedin from "../../assets/images/linkedin.png"
import ig from "../../assets/images/wIg.png"
import sp1 from "../../assets/images/sp1.png"

const Card = ({
    spImg =sp1, 
    name='Ridwan Sodamade', 
    title='Product Manager, NGM Conference'
}) => {
  return (
    <>
      <div className="card"> 
              <div className=""> 
                <img src={spImg} alt="" className='sp' />
              </div>
              <div className="smedia">
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={ig} alt="" />
              </div>
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
    </>
  )
}

export default Card
