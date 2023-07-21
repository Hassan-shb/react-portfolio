import React from 'react';
import './about.css';
import me from '../../assets/secondary.png';
import {BsAward} from 'react-icons/bs';
import {FcDiploma1} from 'react-icons/fc';
import {LiaGraduationCapSolid} from 'react-icons/lia';
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <img src={me} alt='about image' />
        </div>
        <div className='about__content'>
        <h5 className='textinput'>A fresh graduate looking for an internship opportunity to kickstart my career in the tech industry. I have excelled in tertiary education, and my academic achievements are a testament to my dedication and drive for success. Eager to apply my knowledge and skills, I am ready to make a meaningful contribution to any team and embrace new challenges with enthusiasm.</h5>
          <div className='about__cards'>
            <div className='about__card'>
              <BsAward className='about__icon' />
              <h4>UCSY</h4>
              <small>1.5 years of study</small>
            </div>
            <div className='about__card'>
              <FcDiploma1 className='about_icon'/>
              <h4>Gusto University</h4>
              <small>Level - 4/5 Diploma in Software Engineering</small>
            </div>
            <div className='about__card'>
              <LiaGraduationCapSolid className='about__icon' />
              <h4>University of Greenwich</h4>
              <small>BSc (Hons) Computing</small>
            </div>
            
            <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}


export default About;
