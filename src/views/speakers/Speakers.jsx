import React from 'react'
import "../../styles/speaker.css"
import sp1 from "../../assets/pastSpeakers/sp1.png"
import sp2 from "../../assets/pastSpeakers/sp2.png"
import sp3 from "../../assets/pastSpeakers/sp3.png"
import sp4 from "../../assets/pastSpeakers/sp4.png"
import sp5 from "../../assets/pastSpeakers/sp5.png"
import sp6 from "../../assets/pastSpeakers/sp6.png"
import sp7 from "../../assets/pastSpeakers/sp7.png"
import sp8 from "../../assets/pastSpeakers/sp8.png"
import sp9 from "../../assets/pastSpeakers/sp9.png"
import sp10 from "../../assets/pastSpeakers/sp10.png"
import sp11 from "../../assets/pastSpeakers/sp11.png"
import sp12 from "../../assets/pastSpeakers/sp12.png"
import sp13 from "../../assets/pastSpeakers/sp13.png"
import sp14 from "../../assets/pastSpeakers/sp14.png"
import sp15 from "../../assets/pastSpeakers/sp15.png"
import sp16 from "../../assets/pastSpeakers/sp16.png"
import sp17 from "../../assets/pastSpeakers/sp17.png"
import sp18 from "../../assets/pastSpeakers/sp18.png"
import sp19 from "../../assets/pastSpeakers/sp19.png"

import Card from './Card'
import './speakers.css'

const Speakers = () => {
  return (
   <>
        <div className="speakerContainer">
          <h2 className='title' style={{color:'white'}} >
            Event <span>Speaker</span>
          </h2>
          <div className="speakers">
            <Card />
            <Card spImg={sp2} name='HRM, Prof. Saka Adelola' title='Olowu' organisation='Olowu of Owu kingdom'/>
            <Card spImg={sp3} name='Paul Onwuanibe' title='CEO' organisation='Landmark Africa' />
            <Card spImg={sp4} name='Razak Ahmed' title='CEO' organisation='Cowrywise' />
            <Card spImg={sp5} name='Dr. Akintoye Akindele' title='Chairman' organisation='platform Capital Investment Partners'  />
            <Card spImg={sp6} name='Modupe Kadiri' title='CFO ' organisation='MTN Nigeria' />
            <Card spImg={sp7} name='Toyin Kekere-Ekun' title='CEO' organisation='Lotus Financial Services' className='.extra-speaker'/>
            <Card spImg={sp8} name='Suraj Oyewole' title='CEO' organisation='Jarus Homes & Investment Ltd'className='.extra-speaker'/>
            <Card spImg={sp9} name='Chikezie Nwosu' title='CEO' organisation='Waltersmith Petroman Oil Ltd.'/>
            <Card spImg={sp10} name='Kafilat Aroye' title='CEO/MD' organisation='Lotus Bank' className='.extra-speaker' />
            <Card spImg={sp11} name='Bimpe Afolabi' title='Partner, internal Audit, Governance, Risk Compliance Services' organisation='KPMG Nigeria' />
            <Card spImg={sp12} name='Azeezah Muse-Sadiq' title='Partner' organisation='Banwo & Ighodalo' />
            <Card spImg={sp13} name='Eric Idiahi' title='Co-Founder/partner' organisation='Verod Capital' />
            <Card spImg={sp14} name='Olaynka Subair' title='Country Manager' organisation='Pfizer'  />
            <Card spImg={sp15} name='Shakiru Lawal' title='Country Human Resources Manager' organisation='Nestle'className='.extra-speaker' />
            <Card spImg={sp16} name='Titi Adams' title='Assistant General Manager' organisation='Optimus Bank' className='.extra-speaker' />
            <Card spImg={sp17} name='Fuad Lawal' title='Project Lead' organisation='Archivi.ng' className='.extra-speaker'/>
            <Card spImg={sp18} name='Humuanni Mogaji' title='Director Training & welfare' organisation='LSDPC' className='.extra-speaker'/>
            <Card spImg={sp19} name='Moshood Olajide' title='Managing Director' organisation='Ardova Plc' className='.extra-speaker'/>
            <Card spImg={sp4} name='Razak Ahmed' title='CEO' organisation='Cowrywise' className='.extra-speaker'/>
          </div>
        </div>
    </>
  )
}

export default Speakers
