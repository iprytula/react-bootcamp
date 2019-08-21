import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PaletteList extends Component {
  render() {
    return (
      <div>
        <h1>React Colors</h1>
        {this.props.palettes.map(palette => <p key={palette.id}><Link to={`palette/${palette.id}`}>{palette.paletteName}</Link></p>)}
      </div>
    )
  }
}

export default PaletteList
