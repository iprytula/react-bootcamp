import React from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPalette from './components/NewPalette'

function App() {
  function findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  function findColorPalette(palette, colorId) {
    const { colors } = palette
    const colorPalette = []
    
    for (let level in colors) {
      colorPalette.push(colors[level].find(color => color.id === colorId))
    }

    return colorPalette
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path='/new-palette'
          render={(routeProps) => <NewPalette {...routeProps} />}
        />
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
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={
            (routeProps) =>
              <SingleColorPalette 
                palette={findColorPalette(generatePalette(findPalette(routeProps.match.params.paletteId)), routeProps.match.params.colorId)}
                paletteId={routeProps.match.params.paletteId}
                colorId={routeProps.match.params.colorId}
                {...routeProps}
              />
          }
        />
      </Switch>
      {/* <Palette palette={generatePalette(seedColors[1])}/> */}
    </div>
  );
}

export default App
