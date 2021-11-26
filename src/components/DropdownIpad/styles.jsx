import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bold: {
    fontWeight: 600
  }
})

export default makeStyles((theme) => ({
    bar: {
        fontWeight: '600',
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      }, 
}));