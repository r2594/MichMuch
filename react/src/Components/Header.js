import React from 'react';
import './header.css';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar expand="lg">
      <Navbar.Brand href="#home" className="brandname clearfix"><p id="brand1"><span>Tchi</span>Tcha</p><p id="brand2"><span>Cinema</span> JeanMichMuche</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/" className="activebar">Accueil</Nav.Link>
            <Nav.Link to="/all-films">Films</Nav.Link>
            <Nav.Link to="/contact">Contacts</Nav.Link>
          </Nav>
          <Form inline>
            {/* <Button variant="outline-success">Search</Button> */}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
