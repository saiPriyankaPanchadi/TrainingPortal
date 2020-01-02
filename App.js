import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
/*Login  */
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import Register from './components/auth/Register';
/* pages*/
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import StudentBoard from './components/pages/StudentBoard';
import Courses from './components/pages/Tabs/Courses';
import CoursesDetails from './components/pages/Tabs/CoursesDetails';
import Details from './components/pages/Tabs/Details';

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
                 <Route
                path="/register" exact={true}
                render={() => (
                  <Register baseUrl="https://dev-381928.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/forgotPassword" exact={true} component={ForgotPassword} />
           <Route path="/details" exact={true} component={Details} />
             
            </div>
          </div>
        </Security>
  );
}

export default App;
