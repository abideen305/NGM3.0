import React from 'react'
import './footer.css'
import logo from "../assets/images/Logo.png"
import linkedin from "../assets/images/linkedin.png"
import ig from "../assets/images/ig.png"
import x from "../assets/images/X.png"
import y from "../assets/images/youtube.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#f6f8ff] p-8 flex flex-col gap-6 sm:gap-2 justify-center ">
      
        <div className="flex justify-around">
          <div className="sm:w-[10%] xs:hidden">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-2 text-[#475467] font-medium text-[20px] sm:text-[12px] ">
            <a href={"mailto:conference@ngmplatform.com"} >Contact Us</a>
            <a href="#">Be a Volunteer</a>
            <a href="#">Sponsor Us</a>
          </div>
          <div className="">
            <h3 className='text-[30px] sm:text-[15px]' >Get <span className='font-bold' >first hand news</span> from us!</h3>
            <form action="">
              <input type="email" 
              placeholder='Subscribe to our newsletter' 
              className='bg-white p-2 text-[20px] sm:text-[14px] news'/>
              <button></button>
            </form>
          </div>
        </div>
        <hr className='border' />
        <div className="flex justify-between text-[#475467] sm:text-[12px] xs:flex-col ">
          <div className="flex items-center socials">
            <p>Follow us on our socials:</p>
            <div className="flex gap-1 ">
              <a href="https://www.instagram.com/ngm.conference"><img src={ig} alt="instagram" /></a> 
              <a href="https://twitter.com/NGM_Platform"><img src={x} alt="Twitter" /></a> 
              <a href="https://ng.linkedin.com/company/ngm_platform"><img src={linkedin} alt="Linkedin" /></a> 
              <a href="https://www.youtube.com/watch?v=5k8QYHF3iKE&list=PLSSLsONuaxCGMWKnLiYnuUmrFFBm7qMJR"><img src={y} alt="Youtube" /></a> 
              
            </div>
          </div>
          <p>
          copyright &copy; {currentYear} NGM Conference
          </p>
       </div>
      </div>
    </>
  )
}

export default Footer
