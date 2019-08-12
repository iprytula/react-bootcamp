import React from 'react'

function Card(props) {
  const randDeg = (Math.random() < 0.5 ? -1 : 1) * (Math.floor((Math.random() * 20) + 1))
  const style = {
    position: 'absolute',
    transform: `rotate(${randDeg}deg)`,
    left: '0',
    right: '0',
    margin: 'auto'
  }
  return (
    <img 
      style={style}
      src={props.img}
      alt={props.name}
    />
  )
}

export default Card
