import React from 'react'
import './Cell.css'

function Cell(props) {
  let classes = props.isLit ? 'Cell Cell-lit' : 'Cell'

  return (
    <td onClick={props.flipCellsAround} className={classes}></td>
  )
}

export default Cell
