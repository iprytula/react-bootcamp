import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/singleColorBoxStyles'

class SingleColorBox extends Component {
  render() {
    const { background, classes } = this.props

    return (
      <div className={classes.root} style={{ background: background }}>
        color
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorBox)
