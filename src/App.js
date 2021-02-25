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
import Footer from "./components/Footer";
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
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
