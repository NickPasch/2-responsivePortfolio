import React from 'react';
import './css/home.css';
import './css/style.css';
// var photoMe = require("../pages/images/photoMeNew.jpg");



function Home() {
    return (
        <div>
            <div className="container" className="home">
                <h1 className="row" id="abb">About Me</h1>
                <div className="row">
                    <div className="col-md-8">
                  <p  id="aboutText">Hello! I am Nick Pasch, an excited learner and entrepreneur. I pursued web development because I was unsatisfied with my situation in university and was ready to make some money writing code. After dropping out of college, I enrolled in the UW 6-month programming bootcamp and I recently graduated, certifying me as a full stack web developer. I am currently pursuing an organic mushroom business with a friend of mine, I’m taking classes part time at the University of New Mexico, I am the president and founder of a chapter of Hearts for the Homeless international at UNM, I work at a nonprofit as the director of technology and I am eager to help you obtain your dream website.</p>    
                  </div>
                  <div className="col-md-4">
                  <img src={require("./images/photoMeNew.jpg")} width="100%"/>
                  </div>
                </div>
              <br />
              <h2 className="animate__pulse" id="link">LINKS</h2>
              <br />
                <div className="row">
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-4">
                    <a href="https://www.linkedin.com/in/nicholas-pasch-7866a9186/" target="_blank"><img className="animate__animated animate__bounceInDown" src="1280px-LinkedIn_Logo.svg.png" height="200" width="350" /></a>
                  {/* <!-- <a className="animate__pulse" href="https://www.linkedin.com/in/nicholas-pasch-7866a9186/">LinkedIn</a> --> */}
                  </div>
                  <div className="col-md-6">
                    <a href="https://github.com/NickPasch" target="_blank"><img className="animate__animated animate__bounceInUp" src="github-logo.png" height="200" width="350" /></a>
                  </div>
                  {/* <!-- <a className="animate__pulse" href="https://github.com/NickPasch">Github</a> --> */}
                </div>

              </div>
        </div>
    )
}

export default Home; 