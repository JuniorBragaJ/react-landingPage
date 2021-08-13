import React from 'react';
import { Button } from './Button.js';
import './Footer.css';
import { Link } from 'react-router-dom';
import ContactUs from './ContactForm.js';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    Entre em contato comigo!
                </p>
                <p className="footer-contact-text">
                    A qualquer hora e a qualquer momento
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        className="footer-input"
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail">
                        </input>
                        <Button buttonStyle="btn--outline">Enviar!</Button>

                    </form>
                </div>
                <ContactUs/>
            </section>


    <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Werner Borges © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link whatsapp'
              to= {{ pathname: "https://wa.me/+554896617103"}}
              target='_blank'
              aria-label='Whatsapp'
            >
              <i class='fab fa-whatsapp' />
            </Link>
            
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://instagram.com/luis.weerner" }}
              rel="noopener noreferrer"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link linkedin'
              to={{ pathname: "https://www.linkedin.com/in/luis-eduardo-werner"}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
    </section>
        </div>
    )
}

export default Footer;