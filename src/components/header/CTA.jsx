import React from 'react';
import resume from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download CV</a>
        <a href='#portfolio' className='btn btn-primary'>Explore</a>
    </div>
  )
}

export default CTA;