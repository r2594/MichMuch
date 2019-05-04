import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App'
import Films from './Components/Films'
import Contact from './Components/Contact'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/all-films" component={Films} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
