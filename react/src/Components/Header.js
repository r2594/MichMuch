import React from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Link} from 'react-router-dom';
import { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: '',
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/films')
      .then((response) => response.json())
      .then((findresponse) => {
        console.log(findresponse)
        this.setState({
          data: findresponse
        })
      })
      .catch(error => console.log('erreurs me voilàà', error))
  }

  update(event) {
    console.log('toto');

    this.setState({ search: event.target.value })
  }

  search() {
    // let regex = new RegExp('/[A-Za-z]{1,}/');
    document.getElementById('divfilm').innerHTML = "";
    this.state.data.forEach(element => {
      console.log(element.movie_name);

      if (element.movie_name == this.state.search) {
        document.getElementById("divfilm").insertAdjacentHTML
          ('afterbegin', '<div class="row acdivfilm clearfix"><div class="col-4"><img src="' + element.movie_image + '"/></div><div class="col-8 title-form"><h3>' + element.movie_name + '</h3></div></div>');
      }
    });
  }

  render() {

    return (
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className="brandname clearfix"><p id="brand1"><span>Tchi</span>Tcha</p><p id="brand2"><span>Cinema</span> JeanMichMuche</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="activebar">Accueil</Link>
              <Link to="/all-films" className="activebar">Films</Link>
              <Link to="/contact" className="activebar">Contacts</Link>
            </Nav>
            <Form inline>
              {/* <Button variant="outline-success">Search</Button> */}
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default Header;
