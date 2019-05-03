import React from 'react';
import Header from './Components/Header';
import Footer from  './Components/Footer';
import Films from './Components/Films';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <h1>OKAAUY</h1>
        <Films/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
