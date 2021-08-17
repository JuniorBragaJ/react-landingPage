import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

/* npm install emailjs-com --save */

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_test', 'template_4xxl8zh', e.target, 'user_dbuFRizQ4GyZ9sjuAb7vb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      window.alert("Mensagem enviada com sucesso")
  }


  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h1 className="contact-form-header">Entre em contato!</h1>
      <div className="contact-form-name-wrapper">
        <p className="contact-form-label-name">Nome:</p>
        <input type="text" name="user_name" className="contact-form-name-input" required minLength="2" maxLength="60"/>
      </div>
      
      <div className="contact-form-email-wrapper">
      <p className="contact-form-label-name" >Email:</p>
      <input type="email" name="user_email" className="contact-form-email-input" required/>
      </div>

      <div className="contact-form-message-wrapper">
        <p className="contact-form-label-message">Mensagem:</p>
        <textarea name="message" className="contact-form-message-textarea" required minLength="15" maxLength="500"/>
      </div>

        <input type="submit" value="Enviar!" className="contact-form-send"/>
    </form>
  );
}