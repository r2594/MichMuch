import React from 'react';
import './admin.css';
import Nav from 'react-bootstrap/Nav'


function Admin() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav.Link to="/Adminfilms">Films</Nav.Link>
      </header>
    </div>
  );
}

export default Admin;
