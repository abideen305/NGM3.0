import React from 'react'
import "../styles/sponsors.css"
import lotus from "../assets/images/lotus.png"
import cowry from "../assets/images/cowrywise.png"
import leadway from "../assets/images/leadway.png"

const Sponsor = () => {
  return (
    <>
      <div className='sponsorContainer'>
        <h2>PAST SPONSORS</h2>
        <div className="sponsors">
          <img src={cowry} alt="" />
          <img src={lotus} alt="" />
          <img src={leadway} alt="" />
          <img src={cowry} alt="" />
          <img src={lotus} alt="" />
          <img src={leadway} alt="" />
        </div>
       
      </div>

    </>
  )
}

export default Sponsor
