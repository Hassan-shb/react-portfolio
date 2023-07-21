import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/third.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Wai Yan Htun</h1>
        <h5 className='text-light'>React.js Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
            <img src={me} alt='' width='300px' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;