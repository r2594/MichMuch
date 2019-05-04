import React from 'react';
import Header from './Components/Header';
import Footer from  './Components/Footer';
import Films from './Components/Films';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Films/>
        <Footer/>
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
