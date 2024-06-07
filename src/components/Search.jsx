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
          <div className="home">
            <a href="">Home</a>
            <a href="">Event Brochure</a>
            <a href="">Contact Us</a>
          </div>
          <a href="#">Gallery</a>
          <a href="#">Become a sponsor</a>
          <a href="ngmconference.substack.com">Join NGM community</a>
        </div>
          <Button title="Buy Ticket" size={16} pad="10px 20px" />
      </div>
     </div>
    </>
  )
}

export default Search
