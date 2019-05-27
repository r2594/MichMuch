import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';




class Acform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: '',
      error: null,
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('/films')
    .then((response) => response.json())
    .then((findresponse)=>{
      console.log(findresponse)
      this.setState({
        data:findresponse
      })
    })
    .catch(error => console.log('erreurs me voilàà', error))
  }

  update (event) {
    console.log('toto');
    
    this.setState({search: event.target.value})
  }

  search () {
    // let regex = new RegExp('/[A-Za-z]{1,}/');
    document.getElementById('divfilm').innerHTML = "";
    this.state.data.forEach(element => {
      console.log(element.movie_name);
      
      if(element.movie_name == this.state.search){
        document.getElementById("divfilm").insertAdjacentHTML
        ('afterbegin', '<div class="row acdivfilm clearfix"><div class="col-4"><img src="'+element.movie_image+'"/></div><div class="col-8 title-form"><h3>'+element.movie_name+'</h3><p>'+element.movie_synopsis+'</p><p>'+element.movie_hours+'</p></div></div>');}
    });
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-8 acform">
              <div className="acdivform">
                <Form>
                  <Form.Row>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Film</Form.Label>
                      <Form.Control type="text" placeholder="titre" onChange={this.update.bind(this)} value={this.state.search} />
                    </Form.Group>
  
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Heure</Form.Label>
                      <Form.Control type="text" placeholder="heure" />
                    </Form.Group>
  
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="text" placeholder="date" />
                    </Form.Group>
  
                  </Form.Row>
  
                  <Button variant="primary" onClick={this.search.bind(this)}>
                    Rechercher
                  </Button>
                </Form>
                <div id="divfilm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  };


export default Acform;