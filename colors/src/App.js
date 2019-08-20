import React from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

function App() {
  

  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[4])}/>
      {console.log(generatePalette(seedColors[4]))}
    </div>
  );
}

export default App