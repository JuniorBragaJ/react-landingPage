import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

const TYPES = ['/contact','/aboutme','/services',]

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize }) => {
       const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]     
    
       const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

       const checkButtonType = TYPES.includes(type) ? type : TYPES[0]

       return(
           <Link to={checkButtonType} className="btn-mobile">
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                    {children}
                </button>
           </Link>
       ) 
    }
