import React from 'react';
import './contact.css';
import Header from './Components/Header';
import Footer from  './Components/Footer';



function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <h1>Contact</h1>
        <Footer/>
      </header>
    </div>
  );
}

export default Contact;
