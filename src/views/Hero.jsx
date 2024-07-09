import React, {useState, useRef} from 'react'
import Search from "../components/Search"
import Button from "../components/Button"
const Hero = () => {
  const Ref = useRef(null);
const [timer, setTimer] = useState({
  days:0,
  hours:0,
  minutes:0,
  seconds:0,
});
  const Timing = ()=>{
    const now = new Date().getTime();
    const eventDate = new Date("Oct 5, 2024 8:00:00").getTime();
    const distance = eventDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000)
    
    if (distance >= 0) {
      setTimer({...timer, days:day, hours:hour, minutes:minute, seconds:second}) 
    }else{
      setTimer({
        days:0,
        hours:0,
        minutes:0,
        seconds:0})
    };
  };
  const x = setInterval(Timing, 1000);
  Ref.current = x;


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
            <h1>Venture <div className='bg-[#0da04c] px-8 rounded-lg ' >Forward:</div></h1>
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
        <div className="countDown">
          <div className="">
            <h5>COUNTDOWN TO NGM CONFERENCE 3.0 🚀 </h5>
            <div className="flex gap-2 mx-auto ">
              <div className="">
                <h2>{timer.days}   :  </h2>   
               < p> DAYS</p>
              </div>
              <div className="">
              <h2>{timer.hours}  :  </h2>   
              < p> HOURS</p>
              </div>
              <div className="">
              <h2>{timer.minutes}  :  </h2>   
              < p> MINS</p>
              </div>
              <div className="">
              <h2>{timer.seconds}</h2>   
              < p> SECONDS</p>
              </div>
            </div>
            <hr />
            <div className="">
              <img src="" alt="" />
              <h5>Location: Lagos</h5>
            </div>
            <div className="">
              <img src="" alt="" />
              <h5>Oct 5, 2024</h5>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hero
