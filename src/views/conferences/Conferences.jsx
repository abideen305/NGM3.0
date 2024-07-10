import React, { useState } from 'react'
 import "../../styles/conferences.css"
 import bluey from "../../assets/images/blueSquare.png"
 import greeny from "../../assets/images/greenSquare.png"
 import confImg1 from "../../assets/images/conf_img4.png"
 import confImg2 from "../../assets/images/conf_img5.png"
 import youtube from "../../assets/images/youtube.png"

const Conferences = () => {
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id)=>{
    setToggle(id);
  }
  return (
    <>
      <div className="flex flex-col gap-[3rem] px-[5rem] py-[3rem] sm:gap-[1.5rem] sm:p-[2rem] ">
          <h2 className='title text-black font-extralight' >NGM Conferences <span>so far.. </span> </h2>
        <div className="flex flex-col gap-[2rem] ">
       
          <div className="flex justify-between font-medium text-[#0F1990]">
            <button className="tablinks  " onClick={()=>updateToggle(1)}>NGM Conference 1.0</button>
            <button className="tablinks" onClick={()=>updateToggle(2)}>NGM Conference 2.0</button>
            <button className="tablinks" onClick={()=>updateToggle(3)}>NGM Conference 3.0</button>
          </div>

          <hr />

          <div id="1" className={`${toggle === 1 ? 'block':'hidden'}`}>
            <div className="flex gap-[10%] items-center ">
              <div className="grid gap-2 grid-flow-row grid-cols-2 sm:hidden">
                <div className="row-start-1 justify-self-end"><img src={confImg1} alt="" /></div>
                <div className="self-end"><img src={bluey} alt=""/></div>
                <div className="row-start-2 justify-self-end"><img src={greeny} alt="" /></div>
                <div className=""><img src={confImg2} alt="" /></div>
          
              </div>
              <div className="basis-[50%] sm:basis-[80%] flex flex-col  gap-6 ">
                <h3>NGM Conference <span>1.0 </span> </h3>
                <p className='text-[#4B5565] font-medium' >Lorem ipsum dolor, sit amet consectetur 
                  adipisicing elit. Cum ipsa aliquam reprehenderit 
                  possimus? Quas exercitationem quaerat deleniti 
                  itaque commodi maxime, ipsa   est saepe fugit 
                  at quos explicabo reprehenderit beatae!</p>
                <p className='text-[#0F1990] font-medium '> Key Stats: 700+ Attendees, 13+ Speakers</p>
                <div className="">
                  <a href='https://drive.google.com/file/d/1Fs3W6VanuIBPMTpu7bGZ0tFOLtPbC2Ki/view?usp=drivesdk' 
                  className='flex gap-2 text-[#0F1990] font-medium border border-gray-200 px-4 py-2 rounded-full'>
                    <img src={youtube} alt="" /><p>Catch the Replay</p> </a>
                  </div>
              
              </div>
          </div>
          </div>

          <div id="2" className={`${toggle === 2 ? 'block':'hidden'}`}>
            <div className="flex gap-[10%] items-center">
              <div className="grid grid-flow-row grid-rows-5 gap-2 ">
                <div className="row-start-1 row-end-3"><img src={confImg1} alt="" /></div>
                <div className="row-start self-end"><img src={bluey} alt=""/></div>
                <div className="row-start-3 justify-self-end"><img src={greeny} alt="" /></div>
                <div className="row-start-2 row-end-5"><img src={confImg2} alt="" /></div>

              </div>
              <div className="basis-[50%] flex flex-col  gap-6 ">
                <h3>NGM Conference <span>2.0 </span> </h3>
                <p className='text-[#4B5565]' >Lorem ipsum dolor, sit amet consectetur 
                  adipisicing elit. Cum ipsa aliquam reprehenderit 
                  possimus? Quas exercitationem quaerat deleniti 
                  itaque commodi maxime, ipsa   est saepe fugit 
                  at quos explicabo reprehenderit beatae!</p>
                <p className='text-[#0F1990]  font-medium '>Key Stats: 700+ Attendees, 13+ Speakers</p>
                <div className="">
                <a href='https://drive.google.com/file/d/1Fs3W6VanuIBPMTpu7bGZ0tFOLtPbC2Ki/view?usp=drivesdk' 
                  className='flex gap-2 text-[#0F1990] font-medium border border-gray-200 px-4 py-2 rounded-full'>
                    <img src={youtube} alt="" /><p>Catch the Replay</p> </a>
                </div>
              </div>
          </div>
          </div>

          <div id="3" className={`${toggle === 3 ? 'block':'hidden'}`}>
            <div className="flex gap-[10%] items-center">
              <div className="grid grid-flow-row grid-rows-5 gap-2 ">
                <div className="row-start-1 row-end-3"><img src={confImg1} alt="" /></div>
                <div className="row-start self-end"><img src={bluey} alt=""/></div>
                <div className="row-start-3 justify-self-end"><img src={greeny} alt="" /></div>
                <div className="row-start-2 row-end-5"><img src={confImg2} alt="" /></div>

              </div>
              <div className="basis-[50%] flex flex-col  gap-6 ">
                <h3>NGM Conference <span>3.0 </span> </h3>
                <p className='text-[#4B5565]'>Lorem ipsum dolor, sit amet consectetur 
                  adipisicing elit. Cum ipsa aliquam reprehenderit 
                  possimus? Quas exercitationem quaerat deleniti 
                  itaque commodi maxime, ipsa   est saepe fugit 
                  at quos explicabo reprehenderit beatae!</p>
                <p className='text-[#0F1990] font-medium'>Key Stats: 700+ Attendees, 13+ Speakers</p>
                <div className="">
                  <Button title='Get Your Ticket' />
                </div>
              </div>
          </div>
          </div>
          
        </div>
          

      </div>
    
    </>
  )
}

export default Conferences

