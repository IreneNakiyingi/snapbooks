//support page
import React, { useState } from 'react';
import './Support.css';
import Footer from './Footer';
import NavBar from './Nav';
import ContactForm from './ContactForm';

const Support = ()=>{
    return (
        <div className='support'>
            <NavBar/>
            <h1>Support</h1>
            <p>Have a question or concern? Reach out to us
                via the form below.
            </p>
            <form className='contact-form'>
                <ContactForm/>
            </form>

            <Footer/>
        </div>
    );

};
export default Support;