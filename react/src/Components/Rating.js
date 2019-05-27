import React, { Component } from 'react';
import './films.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      rates: [],
      starsTotal: 5
    };
  } 

  
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('./Data/Movies.json')
    .then((response) => response.json())
    .then((ratings)=>{
      this.setState({
        ratings
      })
    })
    .catch(error => console.log('erreurs me voilàà', error))
  }


  render(){  
  
  
  //   function getRatings() {
  //   	console.log(this.fetchData.ratings[0])
	 // }



    return (
      <div className="film-wrapper">
    
      </div>
      )
    }

}
  
export default Rating;
