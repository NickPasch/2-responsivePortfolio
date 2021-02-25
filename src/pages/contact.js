import React from 'react'
import './css/contact.css';
import resume from './assets/Nick Pasch Resume 2-13-21.pdf';



function Contact() {
    return (
        <div>
            <div className="container pho" id="contactPage">
                <div className="row">
                  <h1 id="docu">Documents & Info</h1>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3">
                  </div>
                  <div className="col-sm-4">
                  <h4>Phone: (505)362-4004</h4>
                  <br />
                  <br />
                  <div>
                    <h1><a href={resume} target="_blank" download>Download my Resume</a></h1>
                  </div>
                  </div>
                  <div className="col-sm-5">
                    <h4>Email: paschnick100@gmail.com</h4>
                  </div>
                </div>
    
              </div>
        </div>
    )
}

export default Contact; 