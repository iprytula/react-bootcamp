import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/paletteStyles'

class Palette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level: 400,
      format: 'hex'
    }

    this.handleLevelChange = this.handleLevelChange.bind(this)
    this.handleFormatChange = this.handleFormatChange.bind(this)
  }

  handleLevelChange(event, value) {
    this.setState({ level: value })
  }

  handleFormatChange(format) {
    this.setState({ format })
  }

  render() {
    const { classes } = this.props

    const colorBoxes = this.props.palette.colors[this.state.level].map(color => {
      return <ColorBox
                key={color.name}
                {...color}
                moreUrl={`/palette/${this.props.palette.id}/${color.id}`}
                background={color[this.state.format]}
              />
    })

    return (
      <div className={classes.Palette}>
        <Navbar
          levelChange={this.handleLevelChange}
          formatChange={this.handleFormatChange}
          level={this.state.level}
          withSlider
        />
        <div className={classes.PaletteColors}>
          {colorBoxes}
        </div>
        <footer className={classes.footer}>
          <h5>{this.props.palette.paletteName} <span className='emoji'>{this.props.palette.emoji}</span></h5>
        </footer>
      </div>
    )
  }
}

export default withStyles(styles)(Palette)
