import React from 'react';
import './portfolio.css';
import flutter from '../../assets/flutter.jpeg';
import react from '../../assets/react.png';
import laravel from '../../assets/laravel.png';
import javaScriptLogo from '../../assets/JavaScript-logo.png';



const Portfolio = () => {
  return (
    <section id="portfolio">
    <h2> Projects </h2>
    <div className='container portfolio__container'>
    <article className='portfolio__item'>
    <div className='portfolio__item_image'>
    <img src={react} alt='React Imagegi'/>
    </div>
    <h2 className='center'>React Portfolio Project</h2>
    <h4 className='class2'> This is a personal portfolio project meticulously developed using React. Get to know about me and my works on this website. The Github and my personal social links are also added on the webiste.</h4>
    <a href='https://github.com/Hassan-shb/react-portfolio' className='btn btn-primary' target='__blank'>Github</a>
    
    </article>
    <article className='portfolio__item'>
    <div className='portfolio__item_image'>
    <img src={flutter} alt='flutter image' />
    </div>
    <h2 className='center'>Second Year Project</h2>
    <h4 className='class2'>An online shop project crafted for Advanced Programming Subject. This project is written in <b> Flutter and Dart </b> programming languages. </h4>
    <a href='https://github.com/Hassan-shb/Second_year_project.git' className='btn btn-primary' target='__blank'>Github</a>
    
    </article>
    <article className='portfolio__item'>
    <div className='portfolio__item_image'>
    <img src={laravel} alt='Laravel Image' />
    </div>
    <h2 className='center'>Final year project</h2>
    <h4 className='class2'>This project is crafted for final year computing research project subject. Carefully built with PHP and Laravel.</h4>
    <a href='https://github.com/Hassan-shb/Final_year_project' className='btn btn-primary' target='__blank'>Github</a>
    
    </article>
    
    </div>
    </section>
    )
  }
  
  export default Portfolio;