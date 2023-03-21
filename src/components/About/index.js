
import React from 'react';
import  Resume from '../../assets/barry-hardacre.pdf';

import './style.css';


function About() {
    return (
        <section className="about-me" id="about">
            <h2 className="section-title section-title-about text-center">About Me</h2>
            <p className="section-subtitle section-subtitle-about mb-5">Designer and developer based in West Yorkshire</p>

            <div className="about-me-body">
                <p></p>
                <p>.</p>
            </div>

             <p>
                <a href = {Resume }target="_blank" className="resume-btn btn text-center">
                    <i className="fa fa-download"></i>
                Download Resume
            </a>
            </p> 
        </section>
    );
}

export default About;