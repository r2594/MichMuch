import React from 'react';
import './admin.css';
import {Link} from 'react-router-dom';


function Admin() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/Adminfilms">Films</Link>
      </header>
    </div>
  );
}

export default Admin;
