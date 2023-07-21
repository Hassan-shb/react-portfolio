import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {PiTelegramLogo} from 'react-icons/pi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2yux8ct', 'template_it903we', form.current, 'mQzTOUGHoDxABdY2o')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  function clear(){
    document.getElementById('clear1').value = "";
    document.getElementById('clear2').value = "";
    document.getElementById('clear3').value = "";
  }

  function clearLater(){
  setTimeout(clear, 1000);
  }

  return (
    <section id="contact">
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>


    <div className="container contact__container">
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>waiyanhtunsince2000@gmail.com</h5>
          <a href="mailto:waiyanhtunsince2000@gmail.com" target='__blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>DM me!</h4>
          <h5>Wai Yan Htun</h5>
          <a href="https://www.messenger.com/t/100017916575560" target='__blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <PiTelegramLogo className='contact_option-icon'/>
          <h4>Telegram</h4>
          <h5>Wai Yan Htun</h5>
          <a href="https://t.me/realwyh" target='__blank'>Send a message</a>
        </article>
      </div>
      <form action='' ref={form} onSubmit={sendEmail}>
        <input type="name" id="clear1" name="name" placeholder='Your fullname' required/>
        <input type="email" id="clear2" name="email" placeholder='Your email' required/>
        <textarea name="message" id="clear3" placeholder='Message for me' rows="7"></textarea>
        <button type='submit' className='btn btn-primary send-button' onClick={clearLater}>Send Message</button>

      </form>

    </div>

    </section>
  )
}

export default Contact;