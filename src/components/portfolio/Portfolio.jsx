import React from 'react';
import './portfolio.css';
import flutter from '../../assets/flutter.jpeg';
import react from '../../assets/react.png';


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2> Projects </h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item_image'>
            <img src={flutter} alt='flutter image'/>
          </div>
          <h3>This is a portfolio item title.</h3>
          <a href='https://github.com' className='btn btn-primary' target='__blank'>Github</a>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item_image'>
            <img src={react} alt='flutter image' />
          </div>
          <h3>This is a portfolio item title.</h3>
          <a href='https://github.com' className='btn btn-primary' target='__blank'>Github</a>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item_image'>
            <img src={flutter} alt='flutter image' />
          </div>
          <h3>This is a portfolio item title.</h3>
          <a href='https://github.com' className='btn btn-primary' target='__blank'>Github</a>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item_image'>
            <img src={flutter} alt='flutter image' />
          </div>
          <h3>This is a portfolio item title.</h3>
          <a href='https://github.com' className='btn btn-primary' target='__blank'>Github</a>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item_image'>
            <img src={flutter} alt='flutter image' />
          </div>
          <h3>This is a portfolio item title.</h3>
          <a href='https://github.com' className='btn btn-primary' target='__blank'>Github</a>
         
        </article>
      </div>
    </section>
  )
}

export default Portfolio;