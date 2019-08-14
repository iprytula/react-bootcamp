import React from 'react'
import './App.css'
import Deck from './components/Deck/Deck'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>&diams; Card Dealer &diams;</h1>
        <h3>&diams; A little demo made with React &diams;</h3>
      </header>
      <Deck />
    </div>
  );
}

export default App;
