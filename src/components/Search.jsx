import React from 'react'
import Button from './Button'
import "./search.css"
import logo from "../assets/images/Logo.png"

const Search = () => {
  return (
    <>
     <div className="flex  justify-center ">
      <div className="searchBg">
        <div className="logo ">
          <img src={logo} alt="logo"/>
        </div>
        <div className="cta">
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
