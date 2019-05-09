import React from 'react'
import Accueil from './Components/Accueil';
import './index.css'
import Films from './Components/Films';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import AllFilms from './Components/AllFilms';

import { BrowserRouter, Router, Route, Link} from 'react-router-dom';

function App() {
  return  (
    <BrowserRouter>
      <Route exact path="/" component={Accueil} />
      <Route path="/film" component={Films} />
      <Route path="/contact" component={Contact} />
      <Route path="/all-films" component={AllFilms} />
      <Route path="/admin" component={Admin} />

    </BrowserRouter>
    )
  };

export default App;
