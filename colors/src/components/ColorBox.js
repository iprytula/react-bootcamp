import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import styles from '../styles/colorBoxStyles'
import chroma from 'chroma-js'

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
    const { name, background, classes, moreUrl, single } = this.props
    const textColorClass = chroma(background).luminance() < 0.1 ? 'light' : 'dark'

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={single ? 'ColorBox ' + classes.SingleColorBox : 'ColorBox ' + classes.ColorBox} style={{ background }}>
          <div style={{ background }} className={this.state.copied ? classes.copyOverlayShow : classes.copyOverlay} />
          <div className={this.state.copied ? classes.copyMsgShow : classes.copyMsg}>
            <h1 className={textColorClass}>Copied!</h1>
            <p className={textColorClass}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className={classes.boxContent}>
              <span className={textColorClass}>{name}</span>
            </div>
            <button className={`copyButton ${textColorClass}`}>Copy</button>
          </div>
          {!single ? <Link to={moreUrl} className={classes.seeMore}><span className={textColorClass}>MORE</span></Link> : null}
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox)
