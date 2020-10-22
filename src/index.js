import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Switch,
  } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import reducer
import reducer from './state/projectsReducer';

import { LandingPage } from './components/Pages/Landing/index';
import { SignUpPage } from './components/Pages/SignUp/index';
import { LoginPage } from './components/Pages/Login/index';
import { UserPage } from './components/Pages/User/index';
import PrivateRoute from './state/PrivateRoute';
import NavBar from './components/Common/NavBar';
import './index.css';

function App () {
    return(
        <Router>
            <NavBar />
            <Switch>
                {/* Switch userPage to PrivateRoute once endpoints are available */}
                <Route path="/user" component={UserPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" exact component={LandingPage} />
            </Switch>
        </Router>
    )
}

// add apply middleware to app
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(  
    <Router>
        <Provider store = {store}>
            <App />
        </Provider>,
    </Router>,  
    document.getElementById('root')
  );