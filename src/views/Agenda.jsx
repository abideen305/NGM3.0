import React from 'react'
import "../components/styles/agenda.css"
import vector from "../assets/images/VectorB.png"

const Agenda = () => {
  return (
    <>
      <div className="agendaContainer">
        <div className="vectorB">
          <img src={vector} alt="" />
        </div>
        <h2 className='title'>Event <span>Agenda</span></h2>
        <div className="agenda">
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
              <h3>Registration</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div> 
            </div>
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
            <div className="segment">
              <h4 className='timing'>9:00a.m - 10:00a.m</h4>
              <div className="">
              <h3>Lorem Ipsum Dolor Sit</h3>
              <p>Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Voluptatum sit nisi cumque 
                fuga iusto. Aut et nam atque officia consequatur 
                animi illum </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Agenda
