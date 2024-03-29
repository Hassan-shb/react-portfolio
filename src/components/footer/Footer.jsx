import React from 'react';
import './footer.css';
import {LiaFacebook, LiaGithub} from 'react-icons/lia';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wai Yan Htun</a>


      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>



    <div className="footer__socials">
        <a href="https://www.facebook.com/waiyanhtun25102000/" target="__blank" className='footer__logos'><LiaFacebook /></a>
        <a href="https://github.com/Hassan-shb" target="__blank" className='footer__logos'><LiaGithub /></a>
      </div>


      <div className="footer__copyright">
        <small>
          &copy; All rights reserved.
        </small>
      </div>
    </footer>



    
  )
}

export default Footer