import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'

class Palette extends Component {
  constructor(props) {
    super(props)

    this.state = { level: 400 }
    this.handleLevelChange = this.handleLevelChange.bind(this)
  }

  handleLevelChange(event, value) {
    this.setState({level: value})
  }

  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(color => {
      return <ColorBox key={color.name} name={color.name} background={color.hex} />
    })

    return (
    <div className='Palette'>
      <Navbar levelChange={this.handleLevelChange} level={this.state.level} />
      <div className='Palette-colors'>
        {colorBoxes}
      </div>
      {/* Footer goes here */}
    </div>
    )
  }
}

export default Palette
