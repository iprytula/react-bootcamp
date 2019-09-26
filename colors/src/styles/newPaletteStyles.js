const drawerWidth = 300

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: '100px'
  },
  closeButton: {
    minWidth: '65px'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alighnItems: 'left',
    justifyContent: 'space-betwen',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  colorPicker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    padding: '1rem',
    flexDirection: 'column'
  },
  addColorBtn: {
    display: 'block',
    marginTop: '1rem',
    width: '250px',
    padding: '1rem'
  },
  clearRandomButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    width: '250px'
  },
  clearPaletteBtn: {

  },
  randomColorBtn: {

  },
  colorNameInput: {
    width: '250px',
    marginTop: '1rem'
  },
  '.sketch-picker': {
    width: '250px'
  },
  proposed: {

    '& p': {
      marginBottom: 0,
      cursor: 'pointer',

      '& span': {
        fontWeight: '600'
      }
    }
  },
  newPalette: {
    marginLeft: '-24px',
    height: '90vh',
    marginTop: '40px',
    marginRight: '-24px'
  },
  toolbar: {
    backgroundColor: '#6596F5',
    display: 'flex'
  },
  saveGoback: {
    marginLeft: 'auto',
    width: '620px',
    display: 'flex',
    justifyContent: 'flex-start',

    '& button': {
      marginLeft: '1rem'
    }
  },
  newPaletteForm: {
    width: '75%',
    height: '40px',
    position: 'relative',

    '& aside': {
      position: 'absolute',
      top: '55px'
    }
  },
  newPaletteName: {
    width: '80%',
    marginTop: '0px'
  },
  closeNewForm: {
    position: 'absolute',
    marginLeft: '0 !important',
    top: '-5px',
  },
  emoji: {
    width: 40,
    cursor: 'pointer',
    height: 40,
    display: 'inline-block',
    marginLeft: 20,
    paddingTop: '5px'
  },
  goBackButton: {
    marginLeft: 'auto !important'
  }
})

export default styles