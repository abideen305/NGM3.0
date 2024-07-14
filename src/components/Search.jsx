import React, { useRef, useState } from 'react';
import Button from './Button';
import './search.css';
import logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import Footer from '../views/Footer';
import Agenda from '../views/Agenda';
import Gallery from '../views/Gallery';
import Home from '../views/Home';

const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerMenuRef = useRef(null);
  const mobileNavRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="flex justify-center">
          <div className="searchBg">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="cta">
              <div className="home">
                <Link to={Home} className='hhh'>Home</Link>
                <Link to={Agenda}>Event Brochure</Link>
                <Link to={Footer}>Contact Us</Link>
                <Link to={Gallery}>Gallery</Link>
                <a href="#" className='xs:hidden'>Become a sponsor</a>
                <a href="https://ngmconference.substack.com">Join NGM community</a>
                <a href="https://ngmconference.substack.com"><Button title="Buy Ticket" size={13} pad="5px 10px" /></a>
              </div>

              <div className="hamburger-menu" id="hamburger-menu" ref={hamburgerMenuRef} onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
              </div>

              <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`} id="mobile-nav" ref={mobileNavRef}>
                <Link to={Home}>Home</Link>
                <Link to={Agenda}>Event Brochure</Link>
                <Link to={Footer}>Contact Us</Link>
                <Link to={Gallery}>Gallery</Link>
                <a href="#" className='xs:hidden'>Become a sponsor</a>
                <a href="https://ngmconference.substack.com">Join NGM community</a>
                <a href="https://ngmconference.substack.com"><Button title="Buy Ticket" size={16} pad="10px 20px" /></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Search;
