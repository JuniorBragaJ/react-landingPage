import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';



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
  }


  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>
  );
}