import React from 'react'
import Hero from "./Hero"
import About from "./About"
import Agenda from "./Agenda"
import Conferences from "./conferences/Conferences"
import Faq from "./faq/index"
import Footer from "./Footer"
import Sponsor from "./Sponsor"
import Speakers from "./speakers/Speakers"
import Numbers from "./Numbers"
import Ticketing from "./Ticketing"
import New from "./New"
import Highlights from "./Highlights"
const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Numbers/>
      <Conferences/>
      <Highlights/>
      <div id='agenda'>
      <Agenda />
      </div>
      <New />
      <Speakers/> 
      <Ticketing/>
      <Sponsor/>
      <Faq/>
      <div id='footer'>
      <Footer/>
      </div>
    </>
  )
}

export default Home
