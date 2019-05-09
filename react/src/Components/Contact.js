import React from 'react';



function Contact() {
  return (
    <div className="App">
      <h3>Contact Us</h3>
      <form className="contact-form" onSubmit={(e) => {this.onSubmit(e)}} id="">
        <div className="form-group">
          
          <button type="submit">Envoyez</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
