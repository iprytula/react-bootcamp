import React from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'

function App() {
  function findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <PaletteList palettes={seedColors} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
        />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[1])}/> */}
    </div>
  );
}

export default App
