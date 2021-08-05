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
        </div>
    )
}

export default Footer;