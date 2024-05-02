import './App.css'
import Hero from "./views/Hero";
import About from "./views/About"
import Agenda from "./views/Agenda"
import Conferences from "./views/Agenda"
import FAQ from "./views/FAQ"
import Footer from "./views/Footer"
import Sponsor from "./views/Sponsor"
import Speakers from "./views/Speakers"
import Numbers from "./views/Numbers"
import Ticketing from "./views/Ticketing"

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Numbers/>
      {/* 
      <Conferences/>
      <Sponsor/>
      <Agenda />
      <Speakers/> 
      {<Ticketing/>
      <FAQ/>
      <Footer/> */}
    </>
  )
}

export default App
