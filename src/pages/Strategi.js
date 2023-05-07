import React from 'react'
import { useRef } from 'react';
import Strate from '../images/Strategi.jpg';
import './Strategi.css';
import { useHistory } from 'react-router-dom';
import Loggo from '../images/Balder-logga.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';


function Strategi() {
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__navbar")
  }
  const history = useHistory();

  const handleClick1 = () => {
  history.push("/strategi");
  }
  
  const handleClick2 = () => {
  history.push("/affärsutveckling");
  }
  
  const handleClick3 = () => {
  history.push("/marknadsforing");
  }
  
  const handleClick4 = () => {
  history.push("/kontakt");
  }

  const handleClick5 = () => {
  history.push("/");
  }

  const handleClick6 = () => {
  history.push("/kontakt");
  }
  return (
    <div className="strategi">
      <div className="strategi__container">
      <img className="background__img" src={Strate} alt="Min bild" />
      <nav className="navbar">
          <img className="Loggo__nav" onClick={handleClick5} src={Loggo} alt="Logotyp"></img>
          <ul>
            <li className='strate__color_li' onClick={handleClick1}>STRATEGI</li>
            <li onClick={handleClick2}>AFFÄRSUTVECKLING</li>
            <li onClick={handleClick3}>MARKNADSFÖRING</li>
            <li onClick={handleClick4}>KONTAKT</li>
          </ul>

          <div ref={navRef}>
          <AiFillCloseCircle onClick={showNavBar} className='close__btn'/>
            <p className='responsive__navbar__link strate__color' onClick={handleClick1}>STRATEGI</p>
            <p className='responsive__navbar__link' onClick={handleClick2}>AFFÄRSUTVECKLING</p>
            <p className='responsive__navbar__link' onClick={handleClick3}>MARKNADSFÖRING</p>
            <p className='responsive__navbar__link' onClick={handleClick4}>KONTAKT</p>
          </div>
            <AiOutlineMenu onClick={showNavBar} className='toggle__btn'/> 
        </nav>
      </div>
      <div className="text__container">
        <h1>VI HJÄLPER DIG MED FLER MÖJLIGHETER</h1>
        <p className="down__text">Det ﬁnns många möjligheter och en del problem att lösa.
         Vi gör det lätt för dig att välja.</p>
      </div>
      <button onClick={handleClick6} className="btn__s">KONTAKTA OSS REDAN I DAG</button>
    </div>
  )
}

export default Strategi