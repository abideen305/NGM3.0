import React from 'react'
import blueVector from "../assets/images/blueVector.png"
import greenVector from "../assets/images/VectorB.png"
const New = () => {
  return (
    <>
      <div className="relative bg-[#FCFCFD] flex items-center justify-center p-20 sm:p-6">
        <img src={blueVector} alt="" className='absolute top-[1rem] right-[1rem] '/>
        <img src={greenVector} alt="" className='absolute bottom-[2rem] left-[3rem] sm:hidden ' />

        <div className="flex flex-col gap-20 sm:gap-6 ">
            <h2 className='title text-[#000] text-[36px] sm:text-[20px] ' ><span>What’s New</span> in NGM Conference 3.0 </h2>
            <div className="flex gap-10 sm:flex-col sm:gap-6 ">
                <div className="bg-white hover:bg-gray-600  border-2 border-[#E3E8EF] rounded-xl px-4 py-6 flex flex-col gap-3 ">
                    <h4 className='text-[#202939] font-medium ' >Networking Mixer</h4>
                    <p className='text-[#697586] hover:text-white ' >This year we are making it possible to
                      engage in insightful conversations and forge valuable connections at
                      the NGM Conference 3.0
</p>
                </div>
                <div className="bg-[#fff] hover:bg-gray-600 border-2 border-[#E3E8EF] rounded-xl px-4 py-6 flex flex-col gap-3 ">
                    <h4 className='text-[#202939] font-medium ' >Team-building Exercises</h4>
                    <p className='text-[#697586] hover:text-white ' >Get ready to enhance collaboration through our dynamic team-building 
                        exercises designed to foster synergy among participants.</p>
                </div>
                <div className="bg-white hover:bg-gray-600  border-2 border-[#E3E8EF] rounded-xl px-4 py-6 flex flex-col gap-3 ">
                    <h4 className='text-[#202939] font-medium ' >Startup Pitch</h4>
                    <p className='text-[#697586] hover:text-white ' >Be a witness as innovative minds take the startup stage
                      to pitch their groundbreaking ideas in front of a diverse set of panel
                      </p>
                </div>
                
            </div>
        </div>
      </div>

    </>
  )
}

export default New
