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
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'
import { SketchPicker } from 'react-color'
import chroma from 'chroma-js'
import Button from '@material-ui/core/Button'
import NewColorBox from './NewColorBox'
import styles from '../styles/newPaletteStyles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { TextField } from '@material-ui/core'
import EmojiPicker from 'emoji-picker-react'
import JSEMOJI from 'emoji-js'

class NewPalette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: true,
      savePalette: false,
      showEmojies: false,
      color: '#4C83EC',
      colorName: '',
      paletteName: '',
      newPalette: {
        paletteName: '',
        id: '',
        emoji: '1f3a8',
        colors: []
      }
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isNameUnique', (value) => {
      return this.state.newPalette.colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
    })
  }

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true })
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleColorChange = (color, event) => {
    this.setState({
      color: color.hex
    })
  }

  handleInputChange = (evt) => {
    this.setState({ colorName: evt.target.value })
  }

  handleNamePalleteInputChange = (evt) => {
    this.setState({ paletteName: evt.target.value })
  }

  handleAddColor = (evt) => {
    evt.preventDefault()

    const colors = [...this.state.newPalette.colors]
    colors.push({ name: this.state.colorName, color: this.state.color })

    this.setState({ newPalette: { colors: colors }, colorName: '', color: '#6596F5' })
  }

  handleDeleteColor = (hex) => {
    const colors = this.state.newPalette.colors.filter(color => color.color !== hex)

    this.setState({ newPalette: { colors: colors } })
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

        if (response.data.colors[0].hex !== '' && tags) {
          const colors = [...this.state.newPalette.colors]

          colors.push({ name: getRandomName(tags), color: `#${response.data.colors[0].hex}` })

          this.setState({
            newPalette: {
              paletteName: this.state.paletteName,
              id: this.state.id,
              emoji: this.state.newPalette.emoji,
              colors: colors
            },
            color: `#${response.data.colors[0].hex}`
          })
        }
      })
  }

  handleResetPalette = () => {
    this.setState({
      newPalette: {
        paletteName: this.state.paletteName,
        id: this.state.id,
        emoji: this.state.emoji,
        colors: []
      }
    })
  }

  handleSavePalette = (newPalette) => {
    const paletteId = this.state.paletteName.split(' ').map(word => word.toLowerCase()).join('-')
    this.setState({
      newPalette: {
        paletteName: this.state.paletteName,
        id: paletteId,
        emoji: this.state.newPalette.emoji,
        colors: this.state.newPalette.colors
      }
    }, () => {
      this.props.savePalette(this.state.newPalette)
      this.props.history.push('/')
    })
  }

  handleSetEmoji = (emojiCode) => {
    this.setState({
      newPalette: {
        paletteName: this.state.newPalette.paletteName,
        id: this.state.newPalette.paletteId,
        emoji: emojiCode,
        colors: this.state.newPalette.colors
      },
      showEmojies: false
    })
  }

  render() {
    const textColorClass = chroma(this.state.color).luminance() < 0.1 ? 'light' : 'dark'
    const classes = this.props.classes

    const jsemoji = new JSEMOJI()
    jsemoji.img_set = 'emojione'
    jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/'

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.drawerOpen,
          })}
        >
          <Toolbar className={classes.toolbar}>
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
            <div className={classes.saveGoback}>
              <Button variant='contained' color='secondary' className={`${classes.button} ${classes.goBackButton}`} onClick={() => this.props.history.goBack()}>Go Back</Button>
              {this.state.savePalette
                ?
                <form className={classes.newPaletteForm} onSubmit={this.handleSavePalette}>
                  {this.state.showEmojies
                  ?
                  <EmojiPicker
                    onEmojiClick={(emojiCode) => this.handleSetEmoji(emojiCode)}
                    className={classes.emojiPicker}
                  />
                  :
                  null}
                  <a className={classes.emoji} onClick={() => this.setState({ showEmojies: !this.state.showEmojies })}>
                    <img src={`${jsemoji.img_sets.emojione.path}${this.state.newPalette.emoji}.png`} />
                  </a>
                  <TextField
                    onChange={this.handleNamePalleteInputChange}
                    label={'Write your new Palette Name and press "Enter"'}
                    margin='dense'
                    variant='outlined'
                    className={classes.newPaletteName}
                  />
                  <IconButton
                    onClick={() => this.setState({ savePalette: false })}
                    color='inherit'
                    key='close'
                    aria-label='close'
                    className={classes.closeNewForm}
                  >
                    <CloseIcon />
                  </IconButton>
                </form>
                :
                <div>
                  {this.state.newPalette.colors.length > 0
                  ?
                  <Button variant='contained' color='primary' className={classes.button} onClick={() => this.setState({ savePalette: true })}>Save Palette</Button>
                  :
                  null
                  }
                </div>
              }
            </div>
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
              <Button variant='contained' color='secondary' className={classes.button} onClick={this.handleResetPalette}>Clear palette</Button>
              <Button variant='contained' onClick={this.handleRandomColor}>Random</Button>
            </div>
            <SketchPicker
              color={this.state.color}
              onChange={this.handleColorChange}
              disableAlpha
            />
            <ValidatorForm onSubmit={this.handleAddColor}>
              <TextValidator
                onChange={this.handleInputChange}
                id='outlined-dense'
                label={'Your New Color Name'}
                className={classes.colorNameInput}
                margin='dense'
                variant='outlined'
                value={this.state.colorName}
                validators={['required', 'isNameUnique']}
                errorMessages={['this field is required', 'Name of color must be unique']}
              />
              <Button
                style={{ backgroundColor: this.state.color }}
                className={`${classes.addColorBtn} ${textColorClass}`}
                type='submit'
              >
                Add New Color
                </Button>
            </ValidatorForm>
            {/* </form> */}
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.drawerOpen,
          })}
        >
          <section className={classes.newPalette}>
            {
              this.state.newPalette.colors.map(color => <NewColorBox deleteColor={this.handleDeleteColor} key={color.color} background={color.color} name={color.name} />)
            }
          </section>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(NewPalette)
