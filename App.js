import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import StudentBoard from './components/pages/StudentBoard';

function onAuthRequired({history}) {
  history.push('/login');
}

function App() {
  return (
    <Security
          issuer="https://dev-381928.okta.com/oauth2/default"
          client_id="0oa28xoyzdwt54CDi357"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/courses" exact={true} component={StudentBoard} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-381928.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/forgotPassword" exact={true} component={ForgotPassword} />
            </div>
          </div>
        </Security>
  );
}

export default App;
