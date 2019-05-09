import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Button, Card} from 'react-bootstrap';
// import Caards from './Caards';
import Footer from './Footer';
import Header from './Header';
// import Movies from '../Data/Movies.json';



class AllFilms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      datacome: [],
      error: null,
    };
  }


  componentDidMount(){
    this.fetchData();
    this.fetchDataCome();
  }

  fetchData(){
    fetch('./Data/Movies.json')
    .then((response) => response.json())
    .then((findresponse)=>{
      console.log(findresponse)
      this.setState({
        data:findresponse
      })
    })
    .catch(error => console.log('erreurs me voilàà', error))
  }

  fetchDataCome(){
    fetch('./Data/MoviesComing.json')
    .then((response) => response.json())
    .then((results)=>{
      console.log(results)
      this.setState({
        datacome:results
      })
    })
    .catch(error => console.log('erreurs me voilàà', error))
  }


  render(){
    // const {isLoading, Films} = this.state;
    // const {isLoading, contacts} = this.state;
    return (
        <div className="-wrapper">
          <Header/>
          <div className="container">
            <h4>Cette semaine</h4>
            <div className={''}>{this.state.data.map((x, i) =>
              <div key={i}>                
            
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.title}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                  
              </div>
            )}
              
            </div>

              

            <h4>Films à ne pas rater: NEXT WEEK</h4>
            
            <div className={''}>{this.state.datacome.map((x, i) =>
              <div key={i}>                
            
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.title}</Card.Title>
                    <Button >Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            )}
            </div>
         
          </div>
          <Footer/>
        </div>
      );
    }
  }
  

export default AllFilms;
