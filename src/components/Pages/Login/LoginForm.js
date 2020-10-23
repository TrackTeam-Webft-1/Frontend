import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5,
    backgroundColor: 'rgba(234, 234, 81, 0.6)',
    padding: '20px',
  },

  inputs: {
    padding: '10px',
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();

  const { handleChange, submit, errors, buttonDisabled } = props;
  
  return (
    <div>
        <Container maxWidth="md" className={classes.root} xs={12}>
            <h2 className="center">Log In</h2>
            <form
                onSubmit={e => {
                e.preventDefault();
                submit();
                }}
            >
                <Grid container direction="column" justify="center" alignItems="center">
                    <TextField
                        className={classes.inputs}
                        id="outlined-basic"
                        label="Firstname"
                        type="name"
                        variant="filled"
                        name="firstname"
                        onChange={handleChange}
                    />
                    <div className="error">{errors.firstname}</div>
                    <TextField
                        className={classes.inputs}
                        id="outlined-basic"
                        label="Lastname"
                        type="name"
                        variant="filled"
                        name="lastname"
                        onChange={handleChange}
                    />
                    <div className="error">{errors.lastname}</div>
                    <TextField
                        className={classes.inputs}
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        name="password"
                        onChange={handleChange}
                    />
                    <div className="error">{errors.password}</div>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={buttonDisabled}
                    >
                        Log In
                    </Button>
                </Grid>
                </form>
        </Container>
    </div>
  );
}