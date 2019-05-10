import React from 'react';
import Header from './Header';
import Footer from  './Footer';


function Contact() {
  return (
    <div className="App">
    <Header/>
      <h3>Contact Us</h3>
      <form className="contact-form" onSubmit={(e) => {this.onSubmit(e)}} id="">
        <div className="form-group">
          
          <button type="submit">Envoyez</button>
        </div>
      </form>
      <Footer/>
    </div>
  );
}

export default Contact;
