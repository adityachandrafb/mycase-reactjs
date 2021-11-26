import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bold: {
    fontWeight: 600
  }
})

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#B1D4E0',
    color : 'black',
    font : 'nunito',
    boxShadow: 'blue',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  appBar2 : {
    backgroundColor: '#FF6767',
    color : 'black',
    font : 'nunito',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },


  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontWeight: '600',
  },

  bar: {
    fontWeight: '600',
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  
  image: {
    marginRight: '10px',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  
}));
