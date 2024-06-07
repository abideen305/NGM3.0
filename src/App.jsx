import './App.css'
import Hero from "./views/Hero";
import About from "./views/About"
import Agenda from "./views/Agenda"
import Conferences from "./views/conferences/Conferences"
import FAQ from "./views/FAQ"
import Footer from "./views/Footer"
import Sponsor from "./views/Sponsor"
import Speakers from "./views/speakers/Speakers"
import Numbers from "./views/Numbers"
import Ticketing from "./views/Ticketing"
import New from "./views/New"

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Numbers/>
      <Sponsor/>
      <Agenda />
      <New />
      <Speakers/> 
      <Footer/>
      {/* 
      <Conferences/>
      {<Ticketing/>
      <FAQ/>
       */}
    </>
  )
}

export default App
