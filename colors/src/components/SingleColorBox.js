import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from '../styles/singleColorBoxStyles'

class SingleColorBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copied: false
    }

    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const { color, classes, name } = this.props

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.root} style={{ background: color }}>
          <div style={{ background: color }} className={this.state.copied ? classes.copyOverlayShow : classes.copyOverlay} />
          <div className={this.state.copied ? classes.copyMsgShow : classes.copyMsg}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(SingleColorBox)
