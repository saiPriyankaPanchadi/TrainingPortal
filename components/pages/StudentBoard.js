import React, { Component } from 'react';
import {Grid,Cell,Tabs,Tab,} from 'react-mdl';

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
        <div style= {{width :'100%' , margin :'auto'}}>
        <Grid className='studentsInfo'>
        <Cell col={12}>
         <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>developers</Tab>
                    <Tab>testers</Tab>
                   
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>    

        
        </Cell>
        </Grid>
        </div>
      </div>
    );
  }
}

export default StudentBoard;