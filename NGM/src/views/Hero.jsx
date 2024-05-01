import React from 'react'
import Search from "../components/Search"
import Button from "../components/Button"
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="w-[85%] ">
        <Search />
        </div>
        <div className="heroTitleContainer">
          <div className="hero_title">
            <h2>NGM CONFERENCE 3.0</h2>
          </div>
        </div>
        <div className="themeContainer">
          <div className="theme">
            <h1>Venture <span>Forward:</span></h1>
            <h2>Innovate, Create, Suceed</h2>
            <div className="">
              <p>Lorem ipsum dolor, sit amet consectetur 
              adipisicing elit. Sint exercitationem 
              perspiciatis fugiat maxime temporibus 
              adipisci fuga labore distinctio, eveniet 
              autem delectus aut doloribus dolorem optio
              at sunt commodi quis corporis.</p>
            </div>
          </div>
        </div>
        <div className="">
          <Button title="Buy Ticket" />
        </div>
      </div>
    </>
  )
}

export default Hero
