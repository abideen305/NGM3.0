import React from 'react'
import hl1 from "../assets/eventCarousel/hl1.png"
import hl2 from "../assets/eventCarousel/hl2.png"
import hl3 from "../assets/eventCarousel/hl3.png"
import hl4 from "../assets/gallery/gal1.png"
import hl5 from "../assets/gallery/gal2.png"
import hl6 from "../assets/gallery/gal3.png"


const Highlights = () => {
  return (
    <>
    <div className="h-[100vh] bg-[#f6f8ff] flex items-center ">
      <div className='  flex flex-col gap-12 overflow-hidden'>
        <h2 className='title text-black'>Events <span>HighLights</span></h2>
        <div className="sponsors">
          <img src={hl1} alt="" />
          <img src={hl2} alt="" />
          <img src={hl3} alt="" />
          <img src={hl4} alt="" />
          <img src={hl5} alt="" />
          <img src={hl6} alt="" />          
        </div>
       </div>
    </div>
    </>
  )
}

export default Highlights
