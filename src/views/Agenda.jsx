import React from 'react'
import './Agenda.css'
import "../styles/agenda.css"

import vector from "../assets/images/VectorB.png"

const Agenda = () => {
  return (
  
    <>

      <div className="py-[3rem] sm:py-[1.5rem] sm:px-6 px-[8rem] flex flex-col gap-[3rem]">
        <h2 className='text-[#0da04c] text-center text-[36px]'>Event <span className='font-bold'>Agenda</span> </h2>
        <div className="relative flex flex-col gap-4 sm:gap-2">
          <div className="absolute left-[25.5%] sm:left-[26.5%] xs:left-[28%] h-[98%] border-l-2 border-[#0da04c]"></div>

          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>08:00a.m - 10:00a.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Pre Event Activities</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'>Registration, Networking Breakfast, Medical Checkups, 
                Interactive Workshop on “Designing The Future: A Hands-On Approach to Innovation” . 
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>10:00a.m - 10:30a.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Opening Ceremony</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'>Welcome Address: Grand Mentor,
              Conference Planning Committee Chairman’s Speech 
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>10:30a.m - 11:00a.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Keynote Speech</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'> 
              Venture Forward: Innovate, Create, Succeed  Speaker:
              Dr Omobola Johnson; Senior Partner, TLcom Capital
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>11:00a.m - 12:00p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Panel Session</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'>From Idea to Impact: Navigating the Entrepreneurial Landscape
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>12:00a.m - 12:20p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Networking Break</h3>
              
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>12:20a.m - 12:50p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>SME Pitches and Showcases</h3>
              
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>12:50a.m - 02:00p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Dhur Prayer and Lunch Break </h3>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>02:00p.m - 02:40p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Fireside Chat</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'>Strategies for Sustainable Growth 
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>02:40p.m - 03:10p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Keynote Speech</h3>
              <p className='text-[16px] text-slate-500 sm:text-[10px]'>Think All Around the Box: Innovation and Creativity in entrepreneurship and personal growth.
              Mrs Amal Hassan; Founder/CEO, Outsource Global (Tentative)
              </p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>03:10a.m - 03:55p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Award and Presentation</h3>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>03:55p.m - 04:35p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Asr and Networking</h3>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div className=" text-[20px] text-slate-500 sm:text-[12px]"><p>04:35p.m - 05:05p.m</p></div>
            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0da04c] sm:hidden"></div>
            <div className="w-[65%]">
              <h3 className='font-semibold text-[24px] sm:text-[18px]'>Closing Ceremony</h3>
            </div>
          </div>
         
          
        </div>
      </div>
    </>
  )}
  

export default Agenda