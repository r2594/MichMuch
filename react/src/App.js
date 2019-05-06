import React from 'react';
import Accueil from './Components/Accueil';
import Films from './Components/Films';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import { BrowserRouter, Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Header/>
    //     <Accueil/>
    //     <Footer/>
    //   </header>
    // </div>
    <BrowserRouter>
      <Route exact path="/" component={Accueil} />
      <Route path="/all-films" component={Films} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />

    </BrowserRouter>
  );
}

export default App;


// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import App from './App'

// import Contact from './Components/Contact'

// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/all-films" component={Films} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'))
