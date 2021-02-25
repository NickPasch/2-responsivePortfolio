import React from 'react'
import './css/style.css';


import movie from "./images/movie review.png";
import hike from "./images/hike locator.png";
import note from "./images/note taker.png";
import work from "./images/work day.png";
import fit from "./images/fitnesstracker.png";
import weather from "./images/weatherdash.png";


function Portfolio() {
    return (
    <div>
        <div className="container portfolio">
            <div className="row">
              <div className="card col-md-5">
                <img className="card-img-top" src={movie} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Movie Review Website</h5>
                  <p className="card-text">This was a group project that I did with some classmates. We created a movie review forum with fully functioning
                    user accounts.
                  </p>
                  <a href="https://github.com/NickPasch/movie-review" target="_blank" className="btn btn-primary">Repository</a>
                  <a href="https://limitless-plains-10972.herokuapp.com/movie_search" target="_blank" className="btn btn-primary">Website</a>
                </div>
              </div>
          
              <div className="col-md-2"></div>
              <div className="card col-md-5">
                <img className="card-img-top" src={hike} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Hike Locator</h5>
                  <p className="card-text">This was a group project that I did with some classmates. We created a hiking locator.</p>
                  <a href="https://github.com/Jessica264365/Find-A-Hike" target="_blank" className="btn btn-primary">Repository</a>
                </div>
              </div>
            </div>
        
            <br />
            <div className="row">
              <div className="card col-md-5">
                <img className="card-img-top" src={note} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Note Taking Website</h5>
                  <p className="card-text">This was a homework assignment in which I created a note taking application.</p>
                  <a href="https://github.com/NickPasch/11-noteTaker" target="_blank" className="btn btn-primary">Repository</a>
                  <a href="https://damp-ridge-93515.herokuapp.com/" target="_blank" className="btn btn-primary">Website</a>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="card col-md-5">
                <img className="card-img-top" src={work} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">This was an assignment in which I created an application that allows a user to schedule their work day.</p>
                  <a href="https://github.com/NickPasch/5-workDayScheduler" target="_blank" className="btn btn-primary">Repository</a>
                </div>
              </div>
            </div>  
            <br />
            <div className="row">
              <div className="card col-md-5">
                <img className="card-img-top" src={fit} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Fitness Tracker</h5>
                  <p className="card-text">This was a homework assignment that consisted of creating a fitness tracker.
                  </p>
                  <a href="https://github.com/NickPasch/17-workoutTracker" target="_blank" className="btn btn-primary">Repository</a>
                  <a href="https://evening-savannah-88058.herokuapp.com/" target="_blank" className="btn btn-primary">Website</a>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="card col-md-5">
                <img className="card-img-top" src={weather} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">This was a homework assignment that consisted of creating a weather data application.</p>
                  <a href="https://github.com/NickPasch/6-weatherDashboard" target="_blank" className="btn btn-primary">Repository</a>
                  <a href="https://nickpasch.github.io/6-weatherDashboard/" target="_blank" className="btn btn-primary">Website</a>
                </div>
              </div>
            </div>
          </div> 
        {/* <div className="container">
        <div className="row">
              <div className="card col-md-5" >
                <img className="card-img-top" src="movie review.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Movie Review Website</h5>
                  <p className="card-text">This was a group project that I did with some classmates. We created a movie review forum with fully functioning
                    user accounts.
                  </p>
                  <a href="https://github.com/NickPasch/movie-review" className="btn btn-primary">Repository</a>
                  <a href="https://limitless-plains-10972.herokuapp.com/movie_search" className="btn btn-primary">Website</a>
                </div>
              </div>
            </div>

        </div> */}
    </div>    
    )
}

export default Portfolio; 

//  <div className="container">
//     <div className="row">
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="movie review.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Movie Review Website</h5>
//           <p className="card-text">This was a group project that I did with some classmates. We created a movie review forum with fully functioning
//             user accounts.
//           </p>
//           <a href="https://github.com/NickPasch/movie-review" className="btn btn-primary">Repository</a>
//           <a href="https://limitless-plains-10972.herokuapp.com/movie_search" className="btn btn-primary">Website</a>
//         </div>
//       </div>
          
//       <div className="col-md-2"></div>
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="hike locator.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Hike Locator</h5>
//           <p className="card-text">This was a group project that I did with some classmates. We created a hiking locator.</p>
//           <a href="https://github.com/Jessica264365/Find-A-Hike" className="btn btn-primary">Repository</a>
//         </div>
//       </div>
//     </div>
        
//     <br />
//     <div className="row">
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="note taker.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Note Taking Website</h5>
//           <p className="card-text">This was a homework assignment in which I created a note taking application.</p>
//           <a href="https://github.com/NickPasch/11-noteTaker" className="btn btn-primary">Repository</a>
//           <a href="https://damp-ridge-93515.herokuapp.com/" className="btn btn-primary">Website</a>
//         </div>
//       </div>
//       <div className="col-md-2"></div>
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="work day.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Work Day Scheduler</h5>
//           <p className="card-text">This was an assignment in which I created an application that allows a user to schedule their work day.</p>
//           <a href="https://github.com/NickPasch/5-workDayScheduler" className="btn btn-primary">Repository</a>
//         </div>
//       </div>
//     </div>  
//     <br />
//     <div className="row">
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="fitnesstracker.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Fitness Tracker</h5>
//           <p className="card-text">This was a homework assignment that consisted of creating a fitness tracker.
//           </p>
//           <a href="https://github.com/NickPasch/17-workoutTracker" className="btn btn-primary">Repository</a>
//           <a href="https://evening-savannah-88058.herokuapp.com/" className="btn btn-primary">Website</a>
//         </div>
//       </div>
//       <div className="col-md-2"></div>
//       <div className="card col-md-5" style="width: 18rem;">
//         <img className="card-img-top" src="weatherdash.png" alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">Weather Dashboard</h5>
//           <p className="card-text">This was a homework assignment that consisted of creating a weather data application.</p>
//           <a href="https://github.com/NickPasch/6-weatherDashboard" className="btn btn-primary">Repository</a>
//           <a href="https://nickpasch.github.io/6-weatherDashboard/" className="btn btn-primary">Website</a>
//         </div>
//       </div>
//     </div>
//   </div> 