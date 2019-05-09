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
      error: null,
    };
  }


  componentDidMount(){
    this.fetchData();
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
                  
                   <img src="{'x.Image'}" alt=""/>
                   
            
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title> {x.title}</Card.Title>
                <Card.Text>{x.Description}
                  
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                 
            </div>
                 )}
              
            </div>

              

            <h4>Films à ne pas raté: NEXT WEEK</h4>
          </div>
          
          <Footer/>
        </div>
      );
    }
  }
  

export default AllFilms;
