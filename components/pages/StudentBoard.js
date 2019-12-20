import React, { Component } from 'react';

class StudentBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
    currentUserName: '',
    courseName: ''
  }
  }
  
 

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserName: idToken.idToken.claims.name
    });
  }
  
  handleSubmit=(e)=> {
    e.preventDefault();
    
    this.setState({courseName: e.target.value});
    console.log(this.state.courseName);
  }


  render() {
    const {  currentUserName,courseName } = this.state;

    return (
      <div>
        <h1 className='ui container'>Welcome {currentUserName}</h1>
        <p>You have reached the authorized  student portal</p>   

      </div>
    );
  }
}

export default StudentBoard;