import { makeStyles, fade } from '@material-ui/core/styles';

const UseStyles = makeStyles({
    bold: {
      fontWeight: 600
    }
  })

export default makeStyles((theme) => ({
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

}));