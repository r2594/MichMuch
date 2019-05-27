import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Caards from './Caards';
import {Image, Row, Col} from 'react-bootstrap';
import './Commentaire.css';


class Comments extends Component {


    constructor(props) {
      super(props);
  
      this.state = {
        comments: []
      };
    }

    componentDidMount(){
      this.fetchComment();
    }

    fetchComment(){
      fetch('/comments')
      .then((response) => response.json())
      .then((allcomments) => {
        this.setState({
          comments: allcomments
        })

      })
      .catch(error => console.log('erreurs me voilàà', error))
    }


    // onCreateComm = id =>{

    // }

    // onEdit = id =>{

    // }

    // onRemoveItem = id => {
    //     this.setState(state => {
    //         const list = state.list.filter(item => item.id !== id);

    //         return {
    //         list,
    //         };
    //     });
    // };

  render() {
    return (
        <div className="container">
          <h3>{this.setState}</h3>
            <button>
              Ajouter votre avis
            </button>
            <div id="list-comments">{this.state.comments.map((comment, i) =>
              <div id="comment" key={i}>
                <Row> 
                  <Col xs={6} md={4}>
                    <Image className="profile" src="./Images/flou.jpg" roundedCircle />
                  </Col>
                </Row>
                <div className="okay">
                  
                  <h3 id="name">{comment.customer_name}</h3> <span id="time"></span>
                  <p id="body-comment">{comment.movie_comment_description}</p>
                  <div className="blockButton">
                    <button id="edit" type="button">Editer</button>
                    <button id="delete" type="button">Supprimer</button>
                  </div>
                </div>
              </div>
              )};
            </div>
        </div>
      );
    }
  }
  

export default Comments;
