import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/singleColorPaletteStyles'
import { Link } from 'react-router-dom'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      format: 'hex'
    }

    this.handleFormatChange = this.handleFormatChange.bind(this)
  }
  
  handleFormatChange(format) {
    this.setState({ format })
  }

  render() {
    const { palette, classes, paletteId, colorId } = this.props
    const colorBoxes = 
      palette.map(color => 
        color.hex !== '#ffffff'
          ?
          <ColorBox
            single
            key={color.name}
            name={color.name}
            {...color}
            background={color[this.state.format]}
          />
          :
          null
      )

    return (
      <div>
        <Navbar
          levelChange={this.handleLevelChange}
          formatChange={this.handleFormatChange}
        />
        <div className={classes.singleColorPalette}>
          {colorBoxes}
          <div className={classes.SingleColorBox, classes.back} onClick={this.props.history.goBack}>
            Back
          </div>
        </div>
        <footer className={classes.footer}>
          <h5>{colorId} | {paletteId.replace(/-/g, ' ')}</h5>
        </footer>
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
