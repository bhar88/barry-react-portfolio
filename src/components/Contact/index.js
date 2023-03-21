import {MDBBtn} from 'mdb-react-ui-kit'
import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import './style.css';

export default function Contact() {
    return (
        <section className="contact-me" id="connect">
            <h2 className="section-title mt-5 text-center">
                Connect with Me!
            </h2>
            <hr />
            <div id="contact-details" className="text-center pt-3 pb-4">
                <a href="#home" className="d-block bg-accent h4">Barry Hardacre</a>
                <a href="" className="d-block bg-accent h4"></a>
                <a href="mailto:baz.hardacre@gmail.com" className="d-block bg-accent h4"></a>
                <hr />
                <h3 className="mb-3">Follow me on GitHub and LinkedIn</h3>
                <div id="social-icons" className="justify-content-center">
                <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>
                    
                    <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
                    
                </div>
            </div>
        </section>

    );
}