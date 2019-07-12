import React from 'react'
import './Btn.css'

function Btn(props) {
  return (
    <button className={props.class} onClick={props.click}>{props.text}</button>
  )
}

export default Btn
