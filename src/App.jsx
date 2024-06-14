import './App.css'
import Hero from "./views/Hero";
import About from "./views/About"
import Agenda from "./views/Agenda"
import Conferences from "./views/conferences/Conferences"
import Faq from "./views/faq/index"
import Footer from "./views/Footer"
import Sponsor from "./views/Sponsor"
import Speakers from "./views/speakers/Speakers"
import Numbers from "./views/Numbers"
import Ticketing from "./views/Ticketing"
import New from "./views/New"
import Highlights from "./views/Highlights"

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Numbers/>
      <Highlights/>
      <Agenda />
      <New />
      <Speakers/> 
      <Ticketing/>
      <Sponsor/>
      <Faq/>
      <Footer/>
      {/** 
      <Conferences/>
       */}
    </>
  )
}

export default App
