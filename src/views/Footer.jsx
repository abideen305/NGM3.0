import React from 'react'
import logo from "../assets/images/Logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#f6f8ff] p-8 flex flex-col justify-center ">
      
        <div className="flex justify-around">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-2 text-[#475467] ">
            <a href="#">Contact Us</a>
            <a href="#">Be a Volunteer</a>
            <a href="#">Sponsor Us</a>
            <a href="#">NGM Community</a>
          </div>
          <div className="">
            <h3>Get <span>first hand news</span>from us!</h3>
            <p className='text-[#475467]'>Subscribe to our news letter</p>
            <form action="">
              <input type="email" placeholder='Your Email' />
              <button>icon</button>
            </form>
          </div>
        </div>
        <div className="flex justify-between text-[#475467] ">
          <div className="">follow us on our socials:</div>
          <p>
          copyright &copy; {currentYear} 
          </p>
       </div>
      </div>
    </>
  )
}

export default Footer
