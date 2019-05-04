import React from 'react';
import './films.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Carousel, Item, Caption } from 'react-bootstrap';
import Caarousel from './Caarousel';

function Films() {
  return (
    <div className="film-wrapper">
      <header className="App-header">
        <Caarousel/>
        <div className="main container">
          <div className="movie-description">
            <h3 id="movie-name">Nom Du film</h3>
            <span id="movie-rate">Rate</span>
            <span>
              03H20<small>min</small>
            <h2>All righhhht</h2>
            </span>

          </div>
        </div>
      </header>
    </div>
  );
}

export default Films;
