import React from 'react'
import Button from '../components/Button'
import './ticketing.css';
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
              <p className='text-[rgba(0, 0, 0, 0.5)] '>This conference will bring together a community of like-minded individuals who can share their knowledge and experiences, and inspire each other to achieve their full potential.</p>
              <div className="text-[#0F1990] flex flex-col gap-4">
                <div className="flex gap-2">
                  <img src={location} alt="" />
                  <p className='ticket'>Waterfall Event Center, Ikeja, Lagos</p>
                </div>
                <div className=" flex gap-2">
                  <img src={date} alt="" />
                  <p className='ticket'> Oct. 5, 2024</p>
                </div>
                <div className="mt-4">
                  <a href="https://www.google.com/maps/dir/6.551669,3.3346863/Waterfall+Hall+Event+Center,+Ikeja,+Lagos+on+google+map/@6.5793038,3.3016832,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b9318b0832561:0xe76998dee8b6bb2d!2m2!1d3.3642396!2d6.6066916?entry=ttu" target='_blank'  className='px-6 py-3 text-[#0DA04C] border-[#0DA04C] border-[1.5px] rounded-full  ' >
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
                <p className='text-[rgba(0, 0, 0, 0.5)] '>Early Bird</p>
                <h2 className='font-bolder text-[40px] sm:text-[24px] ' >&#8358;3,500</h2>
                <div className=" flex justify-center p-6">
              <a href="https://tix.africa/discover/ngmconf3" target="_blank" rel="noopener noreferrer">  <Button 
                  title="Buy Ticket" size={15} pad={20}
                /></a>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Ticketing
