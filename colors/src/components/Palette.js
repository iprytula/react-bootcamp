import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'

const styles = {
  Palette: {
    height: "100vh"
  },
  PaletteColors: {
    height: "90%"
  },
  footer: {
    display: "flex",

    '& h5': {
      marginLeft: "auto",
      marginRight: "3rem"
    }
  }
}

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
      return <ColorBox key={color.name} name={color.name} background={color[this.state.format]} />
    })

    return (
      <div className={classes.Palette}>
        <Navbar
          levelChange={this.handleLevelChange}
          formatChange={this.handleFormatChange}
          level={this.state.level}
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
