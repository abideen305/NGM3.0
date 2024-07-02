import React from 'react'
import gal1 from '../assets/gallery/gal1.png'
import gal2 from '../assets/gallery/gal2.png'
import gal3 from '../assets/gallery/gal3.png'
import gal4 from '../assets/gallery/gal4.png'
import gal5 from '../assets/gallery/gal5.png'
import gal6 from '../assets/gallery/gal6.png'
import gal7 from '../assets/gallery/gal7.png'
import gal8 from '../assets/gallery/gal8.png'
import gal9 from '../assets/gallery/gal9.png'
import gal10 from '../assets/gallery/gal10.png'
import gal11 from '../assets/gallery/gal11.png'
import gal12 from '../assets/gallery/gal12.png'
import gal13 from '../assets/gallery/gal13.png'
import gal14 from '../assets/gallery/gal14.png'
import gal2a from '../assets/gallery/gal2a.png'

const Gallery = () => {
  return (
    <>
        <div className="bg-[#f6f8ff] flex flex-col gap-[3rem] px-[5rem] py-[3rem] sm:gap-[1.5rem] sm:p-[2rem]  ">
            <h2 className='font-bold'>NGM Conference Gallery</h2>
            <div className="gap-3 columns-3 *:mb-8 ">
                <img src={gal1} alt=""  />
                <img src={gal2a} alt="" />
                <img src={gal2} alt="" />
                <img src={gal3} alt="" />
                <img src={gal5} alt="" />
                <img src={gal4} alt="" />
                <img src={gal6} alt="" />
                <img src={gal12} alt="" />
                <img src={gal7} alt="" />
                <img src={gal14} alt="" />
                <img src={gal9} alt="" />
                <img src={gal10} alt="" />
                <img src={gal11} alt="" />
                <img src={gal8} alt="" />
                <img src={gal13} alt="" />
                
                <img src="" alt="" />
            </div>
        </div>
      
    </>
  )
}

export default Gallery
