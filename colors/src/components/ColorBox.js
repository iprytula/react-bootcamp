import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/colorBoxStyles'

class ColorBox extends Component {
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
    const { name, background, classes } = this.props

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div style={{ background }} className={this.state.copied ? classes.copyOverlayShow : classes.copyOverlay} />
          <div className={this.state.copied ? classes.copyMsgShow : classes.copyMsg}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div className={classes.boxContent}>
              <span>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          <span className={classes.seeMore}>More</span>
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
