import React from 'react';
import { Button } from './Button.js';
import './Footer.css';
import { Link } from 'react-router-dom';

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
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre Mim</h2>
                        <Link to="/aboutMe">Como funciona</Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                    </div>
                </div>
            </div>


    <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Werner Borges © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link whatsapp'
              to='/'
              target='_blank'
              aria-label='Whatsapp'
            >
              <i class='fab fa-whatsapp' />
            </Link>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            {/* <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>  */}

            {/* <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link> */}

            <Link
              class='social-icon-link linkedin'
              to='/'
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