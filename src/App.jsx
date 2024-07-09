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
import Gallery from './views/Gallery'


function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Numbers/>
      <Conferences/>
      <Highlights/>
      <Agenda />
      <New />
      <Speakers/> 
      <Ticketing/>
      <Sponsor/>
      <Faq/>
      <Footer/>
      <Gallery/>
     
    </>
  )
}

export default App
