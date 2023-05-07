import React from 'react';
import Marknad from '../images/marknadsföring.jpg';
import Loggo from '../images/Balder-logga.png';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Marknadsforing.css';
import Lightball from '../images/marknadsföring2.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';

function Marknadsforing() {
const history = useHistory();

const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__navbar")
  }

const handleClick1 = () => {
history.push('/strategi');
};

const handleClick2 = () => {
history.push('/affärsutveckling');
};

const handleClick3 = () => {
history.push('/marknadsforing');
};

const handleClick4 = () => {
history.push('/kontakt');
};

const handleClick5 = () => {
history.push('/');
};

const handleClick6 = () => {
  history.push("/kontakt");
  }

return (
<div className='marknadsforing'>
<div className='marknadsforing__container'>
<img className='background__m' src={Marknad} alt='Min bild'/>
<nav className='navbar'>
<img
         className='Loggo__nav'
         onClick={handleClick5}
         src={Loggo}
         alt='Logotyp'
       ></img>
    <ul>
      <li onClick={handleClick1}>STRATEGI</li>
      <li onClick={handleClick2}>AFFÄRSUTVECKLING</li>
      <li className='strate__color_li' onClick={handleClick3}>MARKNADSFÖRING</li>
      <li onClick={handleClick4}>KONTAKT</li>
    </ul> 

    <div ref={navRef}>
        <AiFillCloseCircle onClick={showNavBar} className='close__btn'/>
        <p className='responsive__navbar__link' onClick={handleClick1}>STRATEGI</p>
        <p className='responsive__navbar__link' onClick={handleClick2}>AFFÄRSUTVECKLING</p>
        <p className='responsive__navbar__link strate__color' onClick={handleClick3}>MARKNADSFÖRING</p>
        <p className='responsive__navbar__link' onClick={handleClick4}>KONTAKT</p>
    </div>
      <AiOutlineMenu onClick={showNavBar} className='toggle__btn'/> 
</nav>
</div>
<div className='content__container'>
<div className='text__container'>
<h1>FLEXIBEL STEG FÖR STEG LÖSNING</h1>
<p className='down__text'>
Vi kombinerar kommunikation, event och digitala tjänster som ger
önskade resultat
</p>
<h1 className="title__2">
MED KUNNANDE OCH ETT SKRÄDDARSYTT NÄTVERK AV <br /> SPECIALISTER
HJÄLPER VI DIG MED FLER MÖJLIGHETER
</h1>
</div>
<div class="wrapper__text">
  <div class="text-container">
    <p>Produktion av reklam och idéer</p>
    <p>Produktion av material</p>
    <p>Produktion av möten och utställningar</p>
    <p>Genomförande av kampanjer i både digital och print</p>
    <p>Kundundersökningar och förankring av kampanjer</p>
    <p>Kunskapsöverföring och utbildningar</p>
    <p>Advisoryboard’s-expert och genomförande</p>
    <p>Foto och ﬁlm</p>
    <p>Skräddarsydda genomföranden marknadsidéer</p>
  </div>
  <div class="image-container">
    <img src={Lightball} alt="Beskrivande text om bilden"/>
  </div>
</div>
<button onClick={handleClick6} className="btn__s">KONTAKTA OSS REDAN I DAG</button>

</div>
</div>
);
}
export default Marknadsforing;
