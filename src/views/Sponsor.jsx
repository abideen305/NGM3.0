import React from 'react'
import "../styles/sponsors.css"
import lotus from "../assets/images/lotus.png"
import cowry from "../assets/images/cowrywise.png"
import leadway from "../assets/images/leadway.png"
import ps1 from "../assets/pastSponsors/ps1.png"
import ps2 from "../assets/pastSponsors/ps2.png"
import ps3 from "../assets/pastSponsors/ps3.png"
import ps4 from "../assets/pastSponsors/ps4.png"
import ps5 from "../assets/pastSponsors/ps5.png"
import ps6 from "../assets/pastSponsors/ps6.png"
import ps7 from "../assets/pastSponsors/ps7.png"
import ps8 from "../assets/pastSponsors/ps8.png"




const Sponsor = () => {
  return (
    <>
      <div className='sponsorContainer'>
        <h2>PAST SPONSORS</h2>
        <div className="sponsors">
          <img src={cowry} alt="" />
          <img src={lotus} alt="" />
          <img src={leadway} alt="" />
          <img src={ps1} alt="" />
          <img src={ps2} alt="" />
          <img src={ps3} alt="" />
          <img src={ps4} alt="" />
          <img src={ps5} alt="" />
          <img src={ps6} alt="" />
          <img src={ps7} alt="" />
          <img src={ps8} alt="" />
        </div>
       
      </div>

    </>
  )
}

export default Sponsor
