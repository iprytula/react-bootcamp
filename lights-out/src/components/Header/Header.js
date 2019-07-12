import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div class="container">
      <div class="neon">{props.first}</div>
      <div class="flux">{props.second}</div>
    </div>
  )
}

export default Header
