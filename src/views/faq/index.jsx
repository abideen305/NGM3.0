import React, { useState } from 'react'
import FAQ from "./FAQ"
import accordionData from "./accordion"
import design from "../../assets/images/img_logo.png"

const index = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index)=>{
        setActiveIndex((prev) =>(prev === index? null : index));
    }
  return (
    <>
    <div className="relative">
      <div className="max-w-[70%] sm:max-w-[85%] px-[3rem] py-[5rem] sm:px-2 sm:py-4">
      <h2 className='sm:text-center font-bold text-[32px] sm:text-[22px] '>Frequently Asked Questions</h2>

        <div className="pt-5">
            {accordionData.map((item, index)=>(
                <FAQ
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={()=>handleClick(index)}
                />
            ))}
        </div>   
      </div> 
      <div className="sm:w-[30%] sm:right-[-3rem] sm:top-[30%] absolute top-[15%] right-[-11rem] ">
        <img src={design} alt="" width='75%' />
      </div>
    </div> 
    </>
  )
}

export default index

