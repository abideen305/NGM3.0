import React from 'react'
import './Agenda.css'
import "../styles/agenda.css"

import vector from "../assets/images/VectorB.png"

const Agenda = () => {
  return (
    <>
      <div className="agendaContainer">
        <div className="vectorB faded">
          <img src={vector} alt="" />
        </div>
        <h2 className='title'>Event <span>Agenda</span></h2>
        
        <div className='faded-section-container'>
        <div className="agenda faded">
        <span class="overlay-text">Coming Soon...</span>
          <div className="relative">
            <div className="vertical"></div>
            <div className="dot">
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
          </div>
          </div>   
          <div className="activity">
            
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Pre Event Activities</h3>
              <p>Registration, Networking Breakfast, Medical Checkups, 
                Interactive Workshop on “Designing The Future: A Hands-On Approach to Innovation” . </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>10:00a.m - 10:30a.m</h4>
              <div className="">
              <h3>Opening Ceremony</h3>
              <p>Welcome Address: Grand Mentor,
              Conference Planning Committee Chairman’s Speech</p>
              </div> 
            </div>
            <div className="segment">
              <h4 className='timing'>10:30a.m - 11:00a.m</h4>
              <div className="">
              <h3>Keynote Speech</h3>
              <p>Venture Forward: Innovate, Create, Succeed  Speaker:
              Dr Omobola Johnson; Senior Partner, TLcom Capital </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>11:00a.m - 12:00p.m</h4>
              <div className="">
              <h3>Panel Session</h3>
              <p>From Idea to Impact: Navigating the Entrepreneurial Landscape </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>12:00p.m - 12:20p.m</h4>
              <div className="">
              <h3>Networking Break</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>12:20p.m - 12:50p.m</h4>
              <div className="">
              <h3>SME pitches and show case</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
           
          </div>
        </div>

        </div>
        
      </div>
    </>
  )
}

export default Agenda
