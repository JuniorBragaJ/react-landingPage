import React from 'react';
import { Button } from './Button.js';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
          <section class='social-media'>
            <div class='social-media-wrap'>
              <small class='website-rights'>Copyright © 2021 All rights reserved | Desenvolvido por <Link className="website-rights-dev-contact">Junior Braga</Link></small>
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