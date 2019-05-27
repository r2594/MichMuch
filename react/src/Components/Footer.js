import React from 'react';
import './footer.css';


function Footer() {
  
  return (
    <div className="App">
        <div className="footer container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <p className="pfooter1"><span><b>tel :</b></span> 01.33.78.12.26</p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <p className="pfooter2"><span><b>mail :</b></span> cinema.michmuch@gmail.com</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <p className="pfooter3"><span><b>adresse :</b></span> 8 rue du Pavillon Leclerc, Paris, 75021</p>
            </div>
          </div>
          <div className="row divnewsletter">
            <div className="col-12">
              <p className="pnewsletter"><span><b>Newsletter :</b></span></p>
              <a href="#">OUI</a><span>/</span><a href="#">NON</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
