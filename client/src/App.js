import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
// Components 
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


// Page Views
import Home from "./pages/home";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
