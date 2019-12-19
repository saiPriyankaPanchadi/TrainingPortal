import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ForgotPassword extends Component {
  constructor(props) {
    super(props);
     this.state = {
      username: ''
    }

  }
   handleUsernameChange=(e)=> {
    this.setState({username: e.target.value});
  }

   handleSubmit= (e) => {
    e.preventDefault();
    alert('reset link sent to mail');
  }

  render() {
    return (
       <div class="wrapper ">
        <div id="formContent">
      <h2>Forgot password</h2>
      <p> send an reset email, please add you're email below</p>

      <form className = 'form' onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            id="username" type="text" class="fadeIn second"
            value={this.state.username}
            onChange={this.handleUsernameChange} />

        </label>
       <input id="submit" type="submit" class="fadeIn fourth" value="Email Notification" />
      </form>
    
      </div>
      </div>
    );
  }
}
export default ForgotPassword