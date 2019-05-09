import React from 'react';
import './films.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Carousel, Item, Caption, Dropdown, Divider } from 'react-bootstrap';
import Caarousel from './Caarousel';
import Seances from './Seances';
import Footer from './Footer';
import Header from './Header';
















function Films() {






  return (
    <div className="film-wrapper">
      <Header/>
      <Caarousel/>
      <div className="main container">
        <div className="movie-description col-lg-12 col-md-8">
          <h3 id="movie-name">Avengers: EndGame</h3>
          <span id="movie-rate">Rate</span>
          <span>
            <ul className="small-description">
              <li id="time">
                03H20<small>min</small>
              </li>
              <li id="version-movie">
                <p>VO</p>
              </li>
              <li id="type-movie">
                <p>3D</p>
              </li>
            </ul>
          </span>
          <Dropdown.Divider />

          <div className="big-description">
            <p id="descrip-movie">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div id="place-restants" className="text-center">
            <span> 
              {123} <br/> 
              Nombres de places restants
            </span>
          </div>
          
        </div>
      </div>
      <Seances/>
      <Footer/>
    </div>
  );
}

export default Films;
