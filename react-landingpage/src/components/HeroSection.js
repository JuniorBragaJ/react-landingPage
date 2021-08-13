import React from 'react';
import '../App.css'
import { Button } from './Button.js'
import './HeroSection.css'

function HeroSection() {
    return(
        <div className="hero-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted/> */}
            <h1>Werner Borges</h1>
            <p>Consultoria tributária</p>
            <div className="hero-btns">
                <Button type="/aboutme"className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Saiba mais
                </Button>

                <Button type="/contact" className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Entre em contato
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;