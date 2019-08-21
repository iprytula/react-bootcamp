import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    display: 'block',
    textDecoration: 'none',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px'
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0px',
    top: '0px',
    padding: '10px',
    zIndex: 10,
    opacity: 0
  },
  miniColor: {
    width: '25%',
    height: '25%',
    display: 'inline-block'
  }
}

function MiniPalette(props) {
  const { classes, paletteName, emoji, id, colors } = props

  return (
    <Link to={`palette/${id}`} className={classes.root}>
      <div className={classes.colors}>
        {colors.map(color => <div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>)}
      </div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>
          {emoji}
        </span>
      </h5>
    </Link>
  )
}

export default withStyles(styles)(MiniPalette)