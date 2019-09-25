import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/newColorBoxStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import chroma from 'chroma-js'

class ColorBox extends Component {
  render() {
    const { classes, background, name } = this.props
    const textColorClass = chroma(background).luminance() < 0.1 ? 'light' : 'dark'

    return (
      <div style={{ background }} className={classes.NewColorBox}>
        <button className={ `${classes.deleteButton} ${textColorClass}` } onClick={() => this.props.deleteColor(background)}><DeleteIcon/></button>
        <p className={ `${classes.colorName} ${textColorClass}` }>{name.toUpperCase()}</p>
      </div>
    )
  }
}

export default withStyles(styles)(ColorBox)
