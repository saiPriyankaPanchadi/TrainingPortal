import React, { Component } from "react";
import { Grid, Cell, Tabs, Tab, Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText } from "react-mdl";

class StudentBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: "",
      courseName: "",
      activeTab: 0
    };
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserName: idToken.idToken.claims.name
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ courseName: e.target.value });
    console.log(this.state.courseName);
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{width:'100%',margin:'auto',height:'100%'}} >
          <CardTitle style={{ color:'#fff', height:'176px', background:'url(https://d33wubrfki0l68.cloudfront.net/21e9f375447b06a90fb33e1f6b811dc5a43297fb/f4acf/static/blog/posts/introducing-shared-colors/cover.jpg) center/cover'}}> </CardTitle>
          <CardText>UI Developer stands for User Interface Design, a technology-focused role that seeks to create digital software that entices the user into a seamless interaction between human and computer. This career path seeks to improve the user experience by making web page or software interactions simple, fun, easy and effective</CardText>
          </Card>
         <CardActions></CardActions>
        </div>
      );
    }
    if (this.state.activeTab === 1) {
      return (
        <div>
          {" "}
          <h3>Backend</h3>
        </div>
      );
    }
    if (this.state.activeTab === 2) {
      return (
        <div>
          {" "}
          <h3>Database</h3>
        </div>
      );
    }
    if (this.state.activeTab === 3) {
      return (
        <div>
          {" "}
          <h3>cloud</h3>
        </div>
      );
    }
    if (this.state.activeTab === 4) {
      return (
        <div>
          {" "}
          <h3>devops</h3>
        </div>
      );
    }
    if (this.state.activeTab === 5) {
      return (
        <div>
          {" "}
          <h3>IOT</h3>
        </div>
      );
    }
  }

  render() {
    const { currentUserName, courseName } = this.state;
    return (
      <div>
        <h3 className="ui container">
          Welcome {currentUserName} on student Portal
        </h3>

        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="studentsInfo">
            <Cell col={12}>
              <div className="category-tabs">
                <Tabs
                  activeTab={this.state.activeTab}
                  onChange={tabId => this.setState({ activeTab: tabId })}
                  ripple
                >
                  <Tab>WebDevelopement/UI</Tab>
                  <Tab>Backend Technolgies</Tab>
                  <Tab>Database</Tab>
                  <Tab> Cloud Computing</Tab>
                  <Tab> Devops</Tab>
                  <Tab> IOT</Tab>
                </Tabs>
                <section>
                  <div className="study-grid">
                    <Grid className="materials">
                      <Cell col={12}>
                        <div className="content">
                          {this.toggleCategories()}
                        </div>
                      </Cell>
                    </Grid>
                  </div>
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
