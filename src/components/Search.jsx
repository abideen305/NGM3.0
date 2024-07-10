import React from 'react'
import Button from './Button'
import "./search.css"
import logo from "../assets/images/Logo.png"
import { Link } from 'react-router-dom'
import Footer from '../views/Footer'
import Agenda from '../views/Agenda'
import Gallery from '../views/Gallery'
import Home from '../views/Home'

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
            <Link to={Home}>Home</Link>
            <Link to={Agenda}>Event Brochure</Link>
            <Link to={Footer}>Contact Us</Link>
          </div>
         <Link to={Gallery}>Gallery</Link> 
          <a href="#" className='xs:hidden'>Become a sponsor</a>
          <a href="https://ngmconference.substack.com">Join NGM community</a>
        </div>
          <Button title="Buy Ticket" size={16} pad="10px 20px" />
      </div>
     </div>
    </>
  )
}

export default Search
