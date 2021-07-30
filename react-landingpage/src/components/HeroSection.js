import React from 'react';
import '../App.css'
import { Button } from './Button.js'
import './HeroSection.css'

function HeroSection() {
    return(
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>Consultoria Tributária</h1>
            <p>Venha</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Clique aqui
                </Button>

                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Entre em contato
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;