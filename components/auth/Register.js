
import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import './styles.css'
import {Link} from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

      username: '',
      password: '',
      firstName:'',
      lastName:''
    }
  }

  handleSubmit= (e) => {
    e.preventDefault();
    alert('registered')
  }

  handleUsernameChange=(e)=> {
    this.setState({username: e.target.value});
  }

  handlePasswordChange=(e)=> {
    this.setState({password: e.target.value});
  }
handlefirstNameChange=(e)=> {
    this.setState({firstName: e.target.value});
  }
  handlelastNameChange=(e)=> {
    this.setState({lastName: e.target.value});
  }
  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }

    return (
      <div class="wrapper ">
        <div id="formContent">
      <h2>Register Form</h2>

      <form className = 'form' onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            id="username" type="text" class="fadeIn second"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
          Password:
          <input
            id="password" type="password" class="fadeIn third"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
            FirstName:
            <input
            id="firstName" type="firstName" class="fadeIn third"
            value={this.state.firstName}
            onChange={this.handlefirstNameChange} />
            LastName:
            <input
            id="lastName" type="lastName" class="fadeIn third"
            value={this.state.lastName}
            onChange={this.handlelastNameChange} />
        </label>

        
        <input id="submit" type="submit" class="fadeIn fourth" value="Submit" />
      </form>

 

      </div>
      </div>
    );
  }
}
export default Register