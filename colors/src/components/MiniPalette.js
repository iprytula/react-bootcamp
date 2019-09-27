import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/miniPaletteStyles'
import jsemoji from '../emojiHelper'

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
          <img src={`${jsemoji.img_sets.emojione.path}${emoji}.png`} />
        </span>
      </h5>
    </Link>
  )
}

export default withStyles(styles)(MiniPalette)