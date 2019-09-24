import React, { Component } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'
import { SketchPicker } from 'react-color'
import TextField from '@material-ui/core/TextField'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import chroma from 'chroma-js'
import Button from '@material-ui/core/Button'
import NewColorBox from './NewColorBox'
import styles from '../styles/newPaletteStyles'

class NewPalette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: true,
      name: '',
      randName: '',
      color: '#4C83EC',
      snackBarOpen: false,
      newPalette: []
    }
  }

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true })
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleColorChange = (color, event) => {
    this.setState({
      color: color.hex,
    })
  }

  handleInputChange = (evt) => {
    this.setState({ name: evt.target.value })
  }

  handleInputPaste = (evt) => {
    this.setState({ name: evt.clipboardData.getData('Text') })
  }

  handleAddColor = (evt) => {
    evt.preventDefault()

    const palette = [...this.state.newPalette]
    palette.push({ name: this.state.name, color: this.state.color })

    this.setState({ newPalette: palette, name: '', randName: '' })
  }

  handleDeleteColor = (hex) => {
    const palette = this.state.newPalette.filter(color => color.color !== hex)

    this.setState({ newPalette: palette })
  }

  handleRandomColor = () => {
    function getRandomName(tags) {
      if (!tags)
        return 'New Random Color'

      if (tags[0] && !tags[1])
        return tags[0].name.charAt(0).toUpperCase() + tags[0].name.slice(1)

      if (!tags[1] && tags[1])
        return tags[1].name.charAt(0).toUpperCase() + tags[1].name.slice(1)

      if (tags[1] && tags[1])
        return `${tags[0].name.charAt(0).toUpperCase() + tags[0].name.slice(1)} ${tags[1].name.charAt(0).toUpperCase() + tags[1].name.slice(1)}`
    }

    axios
      .get('http://www.colr.org/json/colors/random/1')
      .then(response => {
        const tags = response.data.colors[0].tags

        if (response.data.colors[0].hex !== '') {
          this.setState({
            randName: getRandomName(tags),
            color: `#${response.data.colors[0].hex}`
          })
        }
      })
  }

  changeCopyState = () => {
    this.setState({ copied: true, snackBarOpen: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  render() {
    const textColorClass = chroma(this.state.color).luminance() < 0.1 ? 'light' : 'dark'
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.drawerOpen,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={this.handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, this.state.drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              Add New Palette
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={this.state.drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton className={classes.closeButton} onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.colorPicker}>
            <div className={classes.clearRandomButtons}>
              <Button variant='contained' color='secondary' className={classes.button}>Clear palette</Button>
              <Button variant='contained' onClick={this.handleRandomColor}>Random</Button>
            </div>
            <SketchPicker
              color={this.state.color}
              onChange={this.handleColorChange}
              disableAlpha
            />
            <div className={classes.proposed}>
              {this.state.randName !== ''
                ?
                <div>
                  <CopyToClipboard text={this.state.randName} onCopy={this.changeCopyState}>
                    <p>Proposed Name: <span>{this.state.randName}</span></p>
                  </CopyToClipboard>
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={1500}
                    message={<span id='message-id'>Color Name Was Copied!</span>}
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
                </div>
                :
                ''
              }
            </div>
            <form onSubmit={this.handleAddColor}>
              <TextField
                onChange={this.handleInputChange}
                onPaste={this.handleInputPaste}
                id='outlined-dense'
                label={'Your New Color Name'}
                className={classes.colorNameInput}
                margin='dense'
                variant='outlined'
              />
              <Button
                style={{ backgroundColor: this.state.color }}
                className={`${classes.addColorBtn} ${textColorClass}`}
                onClick={this.handleAddColor}
              >
                Add New Color
              </Button>
            </form>
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.drawerOpen,
          })}
        >
          <section className={classes.newPalette}>
            {
              this.state.newPalette.map(color => <NewColorBox deleteColor={this.handleDeleteColor} key={color.color} background={color.color} name={color.name} />)
            }
          </section>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(NewPalette)
