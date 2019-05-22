import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Caards from './Caards';
import {Image, Row, Col} from 'react-bootstrap';
import './Commentaire.css';


class Comments extends Component {


    constructor(props) {
      super(props);
  
      this.state = {
        list: [
          { id: '1', age: 42 },
          { id: '2', age: 33 },
          { id: '3', age: 68 },
        ],
        yourComment: 'How was the movie',
        comment: []
      };
    }

    componentDidMount(){
      this.fetchComment();
    }

    fetchComment(){
      fetch('./Data/Commentaires.json')
      .then((response) => response.json())
      .then((results) => {
        this.setState({
          comment: results
        })

      })
      .catch(error => console.log('erreurs me voilàà', error))
    }


    onCreateComm = id =>{

    }

    onEdit = id =>{

    }

    onRemoveItem = id => {
        this.setState(state => {
            const list = state.list.filter(item => item.id !== id);

            return {
            list,
            };
        });
    };

  render() {
    return (
        <div className="container">
          <h3>{this.setState}</h3>
            <button>
              Ajouter votre avis
            </button>
            <div id="list-comments">{this.state.comment.map((x, i) =>
                <div id="comment" key={i}>
                  <Row> 
                    <Col xs={6} md={4}>
                      <Image className="profile" src="./Images/flou.jpg" roundedCircle />
                    </Col>
                  </Row>
                  <div className="okay">
                    
                    <h3 id="name">{x.Surname}</h3> <span id="time">{x.time}</span>
                    <p id="body-comment">{x.bodycomment}</p>
                    <div className="blockButton">
                      <button id="edit" type="button">Editer</button>
                      <button id="delete" type="button">Supprimer</button>
                    </div>
                  </div>
                </div>
                )}
                <div>
                {this.state.list.map(item => (
                <div key={item.id}>
                    The person is {item.age} years old.
                    <input
                      type="text"
                      onc
                    />
                    <button
                    type="button"
                    onClick={() => this.onRemoveItem(item.id)}
                    >
                    Remove
                    </button>
                </div>
                ))}
              </div>
            </div>
        </div>
      );
    }
  }
  

export default Comments;
