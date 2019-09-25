import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/paletteListStyles'
import Button from '@material-ui/core/Button'

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Button variant="contained" href="/new-palette" className={classes.newPaletteButton}>
              New Palette
            </Button>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => <MiniPalette key={palette.id} {...palette} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
