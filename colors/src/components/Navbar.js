import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header className='Navbar'>
        <div className='Navbar-left'>
          <div className='logo'>
            <a href='/'>React colors</a>
          </div>
          <div className='slider'>
            <Slider
              min={100}
              max={900}
              step={100}
              defaultValue={this.props.level}
              onChange={this.props.levelChange}
            />
          </div>
          <p className='level'>Color level: {this.props.level}</p>
        </div>
      </header>
    )
  }
}

export default Navbar
