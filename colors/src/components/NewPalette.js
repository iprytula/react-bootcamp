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
import chroma from 'chroma-js'
import Button from '@material-ui/core/Button'
import NewColorBox from './NewColorBox'
import styles from '../styles/newPaletteStyles'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

class NewPalette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drawerOpen: true,
      name: '',
      color: '#4C83EC',
      newPalette: []
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isNameUnique', (value) => {
      return this.state.newPalette.every(color => color.name.toLowerCase() !== value.toLowerCase())
    })

    ValidatorForm.addValidationRule('isColorUnique', () => {
      return this.state.newPalette.every(color => color.color.toLowerCase() !== this.state.color.toLowerCase())
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
      color: color.hex,
    })
  }

  handleInputChange = (evt) => {
    this.setState({ name: evt.target.value })
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
          const palette = [...this.state.newPalette]

          palette.push({name: getRandomName(tags), color: `#${response.data.colors[0].hex}`})

          this.setState({newPalette: palette})
        }
      })
  }

  changeCopyState = () => {
    this.setState({ copied: true, snackBarOpen: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500)
    })
  }

  handleResetPalette = () => {
    this.setState({ newPalette: [] })
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
              <Button variant='contained' color='secondary' className={classes.button} onClick={() => this.props.history.goBack()}>Go Back</Button>
              <Button variant='contained' color='primary' className={classes.button}>Save Palette</Button>
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
            {/* <form onSubmit={this.handleAddColor}> */}
              {/* <TextField
                onChange={this.handleInputChange}
                id='outlined-dense'
                label={'Your New Color Name'}
                className={classes.colorNameInput}
                margin='dense'
                variant='outlined'
                value={this.state.name}
              /> */}
              <ValidatorForm onSubmit={this.handleAddColor}>
                <TextValidator
                  onChange={this.handleInputChange}
                  id='outlined-dense'
                  label={'Your New Color Name'}
                  className={classes.colorNameInput}
                  margin='dense'
                  variant='outlined'
                  value={this.state.name}
                  validators={['required', 'isNameUnique', 'isColorUnique']}
                  errorMessages={['this field is required', 'Name of color must be unique', 'Color is alredy used']}
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
              this.state.newPalette.map(color => <NewColorBox deleteColor={this.handleDeleteColor} key={color.color} background={color.color} name={color.name} />)
            }
          </section>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(NewPalette)
