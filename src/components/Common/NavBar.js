import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import './navBar.css';

//const font = "'Crimson Text', serif;";
//color scheme
// navy - #1D3557
// bright navy - #3A0CA3
// sea blue - # 219EBC
// light jade - 52B788
// kinda sea green - 4ECDC4


const useStyles = makeStyles({
  appBar: {
    margin: '0 0 1rem',
    // backgroundColor: '#C36',
    // fontFamily: font,

    backgroundColor: '#3A0CA3',
  },
  toolBar: {
    //border: '1px solid grey',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  companyHolder: {
    width: '20%',
  },
  company: {
    //border: '1px solid grey',
    padding: '.5rem 1rem',
    // fontFamily: font,
  },
  nav: {
    //border: '3px solid grey',
    //border: '3px solid blue',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '75%',
    padding: '.5rem 0', //tb rl
  },
  link: {
    //border: '1px solid grey',
    width: '100%',
    padding: '.5rem .5rem',
    margin: '0rem .5rem',
    fontSize: '1rem',
    textAlign: 'center',
  },
  // link:hover{
  //   background-color: #F4C35F;
  //   border-radius: 10px;
  // }
});
export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolBar}>
          <div className={classes.companyHolder}>
            <Typography variant="h5" component="h2" className={classes.company}>
              <Link
              component={RouterLink}
              color="inherit"
              to="/home"
              style = {{textDecoration: "none"}}
            >
              Funding the Future
            </Link>
            </Typography>
          </div>
          <Typography variant="body2" component="h3" className={classes.nav}>
            <Link
              component={RouterLink}
              color="inherit"
              to="/landing"
              className={classes.link}
            >
              Projects
            </Link>
            <Link
              component={RouterLink}
              color="inherit"
              to="/login"
              className={classes.link}
            >
              Login
            </Link>
            <Link
              component={RouterLink}
              color="inherit"
              to="/signup"
              className={classes.link}
            >
              Signup
            </Link>
            <Link
              component={RouterLink}
              color="inherit"
              to="/userpage"
              className={classes.link}
            >
              My-Projects
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}