import React, { Component } from 'react'
import SingleColorBox from './SingleColorBox'

class SingleColorPalette extends Component {
  render() {
    const { palette } = this.props
    const colorBoxes = palette.map(color => <SingleColorBox key={color.name} background={color.hex} />)

    console.log(colorBoxes)
    return (
      <div>
        <h1>Single color box</h1>
        {colorBoxes}
      </div>
    )
  }
}

export default SingleColorPalette
