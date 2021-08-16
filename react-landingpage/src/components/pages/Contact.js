import React from 'react';
import './Contact.css';
import ContactUs from '../ContactForm';

export default function Contact() {
    return (
        <div className="contact-page-container">
            <div className="contact-us-wrapper">
                {/* <div className="contact-us-content">
                    <div className="contact-us-content-img-wrap">
                        <img className="contact-us-content-img" src="../images/ContactPhoto.png"/>
                    </div>
                     <p className="contact-us-content-txt">
                        Ola eu sou o werner e gosto de advogar
                    </p>
                </div>  */}
                <ContactUs/>
            </div>
        </div>
        )
}