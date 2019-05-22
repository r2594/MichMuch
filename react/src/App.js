import React from 'react'
import Accueil from './Components/Accueil';
import './index.css'
import Films from './Components/Films';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import AllFilms from './Components/AllFilms';
import Comments from './Components/Comments';

import Rating from './Components/Rating';

import { BrowserRouter, Router, Route, Link} from 'react-router-dom';

function App() {
  return  (
    <BrowserRouter>
      <Route exact path="/" component={Accueil} />
      <Route path="/films" component={Films} />
      <Route path="/contact" component={Contact} />
      <Route path="/all-films" component={AllFilms} />
      <Route path="/admin" component={Admin} />
      <Route path="/comments" component={Comments} />

      <Route path="/rating" component={Rating} />

    </BrowserRouter>
    )
  };

export default App;
