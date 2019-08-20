import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'

class Palette extends Component {
  constructor(props) {
    super(props)

    this.state = {
      level: 400,
      format: 'hex'
    }

    this.handleLevelChange = this.handleLevelChange.bind(this)
    this.handleFormatChange = this.handleFormatChange.bind(this)
  }

  handleLevelChange(event, value) {
    this.setState({level: value})
  }

  handleFormatChange(format) {
    this.setState({ format })
  }

  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(color => {
      return <ColorBox key={color.name} name={color.name} background={color[this.state.format]} />
    })

    return (
    <div className='Palette'>
      <Navbar
        levelChange={this.handleLevelChange}
        formatChange={this.handleFormatChange}
        level={this.state.level}
      />
      <div className='Palette-colors'>
        {colorBoxes}
      </div>
      {/* Footer goes here */}
    </div>
    )
  }
}

export default Palette
