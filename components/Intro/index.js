/* eslint-disable no-useless-escape */
import React from 'react';
import ProfilePic from '../../assets/picofme.jpg';

import './style.css';

function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section-title section-title-intro">
            <img src={ProfilePic} alt="me smiling" className="intro-image" /> 
                Hi, I'm <strong> bazza</strong>
            </h1>
        </section>
    );
}

export default Intro;