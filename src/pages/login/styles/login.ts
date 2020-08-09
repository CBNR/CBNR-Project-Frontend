import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
      // marginTop: theme.spacing(25),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '90vh',
      justifyContent: 'center',
      justifyItems: 'center'
    },
    avatar: {
      margin: theme.spacing(3),
      width: theme.spacing(10),
      height: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
    },
    arrowButtons: {
      margin: theme.spacing(3),
      width: theme.spacing(5),
      height: theme.spacing(5),
      backgroundColor: theme.palette.primary.light,
      color: '#ffffff',
    },
    arrow:{
      fontSize: 35,
    },
    wrapper: {
      justifyItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
}));
  