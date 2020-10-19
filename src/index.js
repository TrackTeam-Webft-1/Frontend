import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
  } from 'react-router-dom';

import { LandingPage } from './components/Pages/Landing/index'
import { SignUpPage } from './components/Pages/SignUp/index';
import { LoginPage } from './components/Pages/Login/index'
import './index.css';

function App () {
    return(
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(  
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Router>,  
    document.getElementById('root')
  );