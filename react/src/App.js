import React from 'react';
import Accueil from './Components/Accueil';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accueil></Accueil>
      </header>
    </div>
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
