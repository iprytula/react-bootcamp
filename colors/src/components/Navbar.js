import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/navbarStyles'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = { format: 'hex', snackBarOpen: false }

    this.handleFormatChange = this.handleFormatChange.bind(this)
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, snackBarOpen: true }, () => this.props.formatChange(this.state.format))
  }

  render() {
    const { classes } = this.props

    return (
      <header className={classes.Navbar}>
        <div className={classes.NavbarLeft}>
          <div className={classes.logo}>
            <Link to='/'>reactcolorpicker</Link>
          </div>
          <div className={classes.slider}>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={this.props.level}
              onChange={this.props.levelChange}
            />
          </div>
          <p className={classes.level}>Color level: {this.props.level}</p>
        </div>
        <Select value={this.state.format} onChange={this.handleFormatChange}>
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.snackBarOpen}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed to <strong>{this.state.format.toUpperCase()}</strong></span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={() => this.setState({ snackBarOpen: false })}
          action={[
            <IconButton
              onClick={() => this.setState({ snackBarOpen: false })}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default withStyles(styles)(Navbar)
