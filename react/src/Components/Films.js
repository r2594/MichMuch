import React, { Component } from 'react';
import './films.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Carousel, Item, Caption, Dropdown, Divider } from 'react-bootstrap';
import Caarousel from './Caarousel';
import Seances from './Seances';
import Footer from './Footer';
import Header from './Header';
import Comments from './Comments';
import Rating from './Rating';




class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  
  componentDidMount(){
    this.fetchData();
    //this.fetchDataCome();
  }

  fetchData(){
    fetch('/films')
      .then(res => res.json())
      .then(allfilms =>
       this.setState({films: allfilms })
      );
    //.catch(error => console.log('erreurs me voilàà', error))
  }

  // fetchDataCome(){
  //   fetch('./Data/MoviesComing.json')
  //   .then((response) => response.json())
  //   .then((results)=>{
  //     console.log(results)
  //     this.setState({
  //       datacome:results
  //     })
  //   })
  //   .catch(error => console.log('erreurs me voilàà', error))
  // }


  render(){
    console.log(this.state.film)

    return (
      <div className="film-wrapper">
        <Header/>
        <Caarousel/>
          <div className="main container" className={''}>
            <div className="movie-description col-lg-12 col-md-8">
            {this.state.films.map((film, i)=>

              <div key={i}>

                <h3 id="movie-name">{film.movie_name}</h3>
                <span id="movie-rate">{film.movie_rating}</span>
                <span>
                  <ul className="small-description">
                    <li id="time">
                      {film.Hours}<small>min</small>
                    </li>
                    <li id="version-movie">
                      <p>{film.version}</p>
                    </li>
                    <li id="type-movie">
                      <p>{film.Version}</p>
                    </li>
                  </ul>
                </span>
              
                <Dropdown.Divider />

                <div className="big-description">
                  <p id="descrip-movie">
                  </p>
                </div>
              </div>
            )}

              <div id="place-restants" className="text-center">
                <span> 
                  <br/> 
                  <Rating/>
                </span>
              </div>
              
            </div>
          
          </div>
        <Seances/>
        <Comments/>
        <Footer/>
      </div>
      )
    }

}
  
export default Films;
