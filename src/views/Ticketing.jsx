import React from 'react'
import Button from '../components/Button'
import location from "../assets/images/location.png"
import date from "../assets/images/calendar.png"
import logo from "../assets/images/Logo.png"
import tick from "../assets/images/tick.png"
import rule from "../assets/images/dottedRule.png"

const Ticketing = () => {
  return (
    <>
        <div className="bg-[#F6F8FF]  p-20 sm:p-6">
          <div className="flex justify-around items-center sm:flex-col sm:gap-10">
            <div className="max-w-[500px] flex flex-col gap-10 sm:gap-4 sm:items-center">
              <h4 className='max-w-[370px] text-[48px] sm:text-[28px] sm:max-w-[230px] font-semibold' >Get your ticket, do not miss out!</h4>
              <p className='text-[rgba(0, 0, 0, 0.5)] '>Lorem ipsum dolor sit amet consectetur. Dui sed sed mattis id elit. 
                Morbi pharetra sagittis non massa iaculis neque cras aliquet. At vulputate vomsan velit.</p>
              <div className="text-[#0F1990] flex flex-col gap-4">
                <div className="flex gap-2">
                  <img src={location} alt="" />
                  <p>Location Here, Lagos</p>
                </div>
                <div className=" flex gap-2">
                  <img src={date} alt="" />
                  <p> Oct. 5, 2024</p>
                </div>
                <div className="">
                  <a href="#" className='px-6 py-3 text-[#0DA04C] border-[#0DA04C] border-[1.5px] rounded-full ' >
                    Get Venue Direction
                  </a>
              </div>
                </div>
                 
            </div>
            <div className="bg-white rounded-2xl flex flex-col gap-8 sm:gap-4">
              <div className="flex justify-center p-6  "><img src={logo} alt="" /></div>
              <img src={rule} alt="" />
              <div className="flex flex-col px-8 gap-4">
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className='sm:w-[35px] ' />
                  <p className='text-[20px] sm:text-[16px] '>Access to Mentors</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className='sm:w-[35px] '/>
                  <p className='text-[20px] sm:text-[16px]'>Event Perk Here</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className='sm:w-[35px] '/>
                  <p className='text-[20px] sm:text-[16px]'>Event Perk Here</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className='sm:w-[35px] '/>
                  <p className='text-[20px] sm:text-[16px]'>Event Perk Here</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className='text-[rgba(0, 0, 0, 0.5)] '>Admit one</p>
                <h2 className='font-bolder text-[40px] sm:text-[24px] ' >&#8358;3,500</h2>
                <div className=" flex justify-center p-6">
                <Button 
                  title="Buy Ticket" size={15} pad={20}
                />
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Ticketing
