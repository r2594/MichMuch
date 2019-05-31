import React from 'react';
import Adlist from './Adlist';
import {Link} from 'react-router-dom';


function Adminfilms() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/adminfilms"></Link>
        <Adlist></Adlist>
      </header>
    </div>
  );
}

export default Adminfilms;