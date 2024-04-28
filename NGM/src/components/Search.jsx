import React from 'react'
import Button from './Button'
import logo from "../assets/images/Logo.png"

const Search = () => {
  return (
    <>
     <div className="flex  justify-center mt-8">
      <div className="w-full bg-white rounded-[45px] flex justify-between px-6 py-2">
        <div className="w-[37px] ">
          <img src={logo} alt="logo"/>
        </div>
        <div className="flex items-center gap-6 font-bold">
          <a href="#">Schedule</a>
          <a href="#">Gallery</a>
          <Button title="Buy Ticket" size={16} pad="10px 20px" />
        </div>
      </div>
     </div>
    </>
  )
}

export default Search
