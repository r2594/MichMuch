import React from 'react';
import './accueil.css';
import Header from './Header';
import Footer from  './Footer';
import Carousel from 'react-bootstrap/Carousel';
import Acform from './Acform';

function Accueil() {
  return (
    <div className="App">
        <Header></Header>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./Images/slider_accueil_endgame.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Avengers: Endgame</h3>
              <p>Prochaine séance : Mardi 10 Mai</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./Images/slider_accueil_shazam.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Shazam</h3>
              <p>Aujourd'hui : 15h40</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./Images/slider_accueil_dumbo.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Dumbo Live Action</h3>
              <p>Prochaine séance : Mercredi 11 Mai</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./Images/slider_accueil_hellboy.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Hellboy (2019)</h3>
              <p>Prochainement</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Acform></Acform>
        <h1>Solansh wasn't here this time !</h1>
        <Footer></Footer>
    </div>
  );
}

export default Accueil;
