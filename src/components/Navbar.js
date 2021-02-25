import React from "react";
import './nav.css';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavComponent() {

  return (
    <Navbar className="myNavBar bg-dark navbar-expand-md navbar-dark" variant="dark">
      <Navbar.Brand href="#">Nick Pasch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>       
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

//     {/* <nav class="navbar navbar-expand-md navbar-dark bg-dark">
//         <a class="navbar-brand" href="#">Nick Pasch</a>
//         <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="collapse_target">
//           <ul class="navbar-nav mr-auto">
//             <li class="nav-item ">
//               <a class="nav-link" href="./index.html">Home<span class="sr-only">(current)</span></a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="./portfolio.html">Portfolio</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="./Documents.html">Documents</a>
//             </li>
//           </ul>
//         </div>
//   </nav> */}

  )
}

export default NavComponent;