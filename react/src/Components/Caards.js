import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';




class Caards extends Component {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e){
      e.preventDefault();
      this.setState({
          isExpanded: !this.state.isExpanded
      })
    }
  

    render(){
      const {title, children} = this.props;
      const {isExpanded} = this.state;
    return (
        <div className="film-wrapper">
          <Card style={{ width: '18rem' }} onClick={(e) => this.handleToggle(e)}>
            <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {children}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>
      );
    }
  }
  

export default Caards;
