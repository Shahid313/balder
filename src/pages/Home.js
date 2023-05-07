import React from 'react'
import { useRef } from 'react';
import Förstabilden from "../images/Första sida.jpg";
import Strategi from '../images/Strategi.jpg';
import Utveckling from '../images/affärsutveckling.jpg';
import "./Home.css";
import { useHistory } from 'react-router-dom';
import Loggo from '../images/Balder-logga.png';
import Sistabilden from '../images/marknadsföring.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';


function Home() {
  const history = useHistory();

  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__navbar")
  }

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


  return (
    <div className="home">
      <div className="image__container">
        <img src={Förstabilden} alt="Min bild" />
        <nav className="navbar">
            <img className="Loggo__nav" src={Loggo} alt="Logotyp"/>
          <ul>
            <li onClick={handleClick1}>STRATEGI</li>
            <li onClick={handleClick2}>AFFÄRSUTVECKLING</li>
            <li onClick={handleClick3}>MARKNADSFÖRING</li>
            <li onClick={handleClick4}>KONTAKT</li>
          </ul>

          <div ref={navRef}>
          <AiFillCloseCircle onClick={showNavBar} className='close__btn'/>
            <p className='responsive__navbar__link' onClick={handleClick1}>STRATEGI</p>
            <p className='responsive__navbar__link' onClick={handleClick2}>AFFÄRSUTVECKLING</p>
            <p className='responsive__navbar__link' onClick={handleClick3}>MARKNADSFÖRING</p>
            <p className='responsive__navbar__link' onClick={handleClick4}>KONTAKT</p>
          </div>
          <AiOutlineMenu onClick={showNavBar} className='toggle__btn'/> 
        </nav>
      </div>
      <div className="home__container">
        <h1 className="first__tlt" >VI HJÄLPER DIG <br />KOMMA NÄRMARE DINA KUNDER</h1>
        <p className="bröd__text">Med mångårigt kunnande och tillgång till ett skräddarsytt 
          nätverk av specialister inom <br /> många nivåer av reklam hjälper 
          vi dig med fler möjligheter inom nätverkande, <br /> kommunikation och event.</p>
          <p className="texto__t">Vår metod är 100% flexibel vilket betyder att du kan orsaka nya resultat utan att själv behöva "lägga till en sak".</p>
      </div>
      <div className="box__container">
        
          <div className="box">
            <img className="img2" src={Strategi} alt="strategi"></img>
            <p onClick={handleClick1} className="box__text">STRATEGI</p>
            <p className="under__t">VI HJÄLPER DIG MED FLER MÖJLIGHETER</p>
          </div>
       
          <div className="box">
            <img className="img2" src={Utveckling} alt="utveckling"></img>
            <p onClick={handleClick2} className="box__text">AFFÄRSUTVECKLING</p>
            <p className="under__t">NAVIGERA I DEN DIGITALA OMSTÄLLNINGEN</p>
          </div>

          <div className="box">
            <img className="img2" src={Sistabilden} alt="marknadsforing"></img>
            <p onClick={handleClick3} className="box__text">MARKNADSFÖRING</p>
            <p className="under__t">FLEXIBLA STEG FÖR STEG LÖSNINGAR</p>
          </div>
        
      </div>
    </div>
  )
}

export default Home