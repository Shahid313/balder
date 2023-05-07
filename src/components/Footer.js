import React from 'react'
import Balder from '../images/Balder-logga.png';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();
  
  const handleClick1 = () => {
    history.push("/");
    }
  return (
    <footer>
      <div className="title__footer">

        <h1 className="footer__img">KONTAKT</h1>
       <div className="text__position"> <p className="text__info">Box 12 045, S-102 22 STOCKHOLM<br/>Kontor: Karlavägen 18</p></div>
       </div>
       <img className="Loggo__img" src={Balder} alt="Logotyp"/>
    </footer>
  )
}

export default Footer
