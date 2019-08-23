import React, { Component } from 'react'
import SingleColorBox from './SingleColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/singleColorPaletteStyles'

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
    const { palette, classes } = this.props
    const colorBoxes = palette.map(color => <SingleColorBox name={color.name} color={color[this.state.format]} />)

    return (
      <div>
        <Navbar
          levelChange={this.handleLevelChange}
          formatChange={this.handleFormatChange}
        />
        <div className={classes.root}>
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
