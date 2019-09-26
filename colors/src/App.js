import React, { Component } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import PaletteList from './components/PaletteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPalette from './components/NewPalette'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      palettes: seedColors
    }
  }

  findPalette = (id) => {
    return this.state.palettes.find((palette) => {
      return palette.id === id
    })
  }

  findColorPalette = (palette, colorId) => {
    const { colors } = palette
    const colorPalette = []

    for (let level in colors) {
      colorPalette.push(colors[level].find(color => color.id === colorId))
    }

    return colorPalette
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [newPalette, ...this.state.palettes] }, () => {console.log(this.state.palettes)})
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/new-palette'
            render={(routeProps) => <NewPalette palettes={this.state.palettes} savePalette={this.savePalette} {...routeProps} />}
          />
          <Route
            exact
            path='/'
            render={() => <PaletteList palettes={this.state.palettes} />}
          />
          <Route
            exact
            path='/palette/:id'
            render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
          />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={
              (routeProps) =>
                <SingleColorPalette
                  palette={this.findColorPalette(generatePalette(this.findPalette(routeProps.match.params.paletteId)), routeProps.match.params.colorId)}
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
}

export default App
