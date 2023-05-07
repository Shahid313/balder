import React, {useState} from 'react';
import { useRef } from 'react';
import './Kontakt.css';
import Formulärbild from '../images/Kontakt_bakgrund.jpg';
import './Kontakt.css';
import Loggo from '../images/Balder-logga.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';


const KontaktForm = (props) => {
  const [namn,setnamn] = useState()
  const [adress,setadress] = useState()
  const [telefon,settelefon] = useState()
  const [email,setemail] = useState()
  const [meddelande,setmeddelande] = useState()

  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__navbar")
  }
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Skicka formulärdata till servern eller hantera på annat sätt
  }

  const handleClick1 = () => {
    props.history.push("/strategi");
  }
  
  const handleClick2 = () => {
    props.history.push("/affärsutveckling");
  }
  
 const handleClick3 = () => {
    props.history.push("/marknadsforing");
  }
  
  const handleClick4 = () => {
    props.history.push("/kontakt");
  }

  const handleClick5 = () => {
    props.history.push("/");
  }
  

    return (
      <div className='kontakt-background'>
        <h1 className="rubrik">KONTAKTA MIG</h1>
        <img className="background__k" src={Formulärbild} alt="Beskrivning av min bild" />
        <nav className="navbar">
          <img className="Loggo__nav" onClick={handleClick5} src={Loggo} alt="Logotyp"></img>
          <ul>
            <li onClick={handleClick1}>STRATEGI</li>
            <li onClick={handleClick2}>AFFÄRSUTVECKLING</li>
            <li onClick={handleClick3}>MARKNADSFÖRING</li>
            <li className='strate__color_li' onClick={handleClick4}>KONTAKT</li>
        </ul>

        <div ref={navRef}>
          <AiFillCloseCircle onClick={showNavBar} className='close__btn'/>
          <p className='responsive__navbar__link' onClick={handleClick1}>STRATEGI</p>
          <p className='responsive__navbar__link' onClick={handleClick2}>AFFÄRSUTVECKLING</p>
          <p className='responsive__navbar__link' onClick={handleClick3}>MARKNADSFÖRING</p>
          <p className='responsive__navbar__link strate__color' onClick={handleClick4}>KONTAKT</p>
        </div>
          <AiOutlineMenu onClick={showNavBar} className='toggle__btn'/> 
        </nav>
        <div className="form-wrapper">
        <form name="contactForm" action="https://formspree.io/f/mknakywr" method="POST">
          <div>
            <label htmlFor="namn">Namn</label>
            <input 
              type="text" 
              id="namn" 
              name="namn" 
              value={namn} 
              onChange={handleInputChange} 
              required
              placeholder="Namn"
            />
          </div>
          <div>
            <label htmlFor="adress">Adress</label>
            <input 
              type="text" 
              id="adress" 
              name="adress" 
              value={adress} 
              onChange={handleInputChange} 
              required
              placeholder="Adress"
            />
          </div>
          <div>
            <label htmlFor="telefon">Telefon</label>
            <input 
              type="tel" 
              id="telefon" 
              name="telefon" 
              value={telefon} 
              onChange={handleInputChange} 
              required
              placeholder="Telefon"
            />
          </div>
          <div>
            <label htmlFor="email">E-postadress</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={handleInputChange} 
              required
              placeholder="E-postadress"
            />
          </div>
          <div>
            <label htmlFor="meddelande">Meddelande</label>
            <textarea className="message"
              type="text"
              id="meddelande" 
              name="meddelande" 
              value={meddelande}
              onChange={handleInputChange} 
              required
              placeholder="Meddelande"
            ></textarea>
   </div>
   <button className="btn__send" type="submit">Skicka</button>
   </form>
   </div>
   </div>
   );
   }
   
   export default KontaktForm;
