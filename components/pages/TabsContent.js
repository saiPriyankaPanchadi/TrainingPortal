import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddCourse from "./Tabs/AddCourse";
import AddCourseContent from "./Tabs/AddCourseContent";
import Courses from "./Tabs/Courses";
import "./style.css";
import UpComings from "./UpComings";

class TabsContent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
      <div>
      <Tabs
        className="tabs"
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex =>
          this.setState({
            tabIndex
          })
        }
      >
        <TabList className="tab-nav-container">
          <Tab className={`${this.state.tabIndex === 0 ? "tab-selected active" : null}`}>
            Courses
            <p style={{}}/>
          </Tab>
          <Tab className={`${this.state.tabIndex === 1 ? "tab-selected active" : null}`}>
           AddCourse
           <p style={{}}/>
          </Tab>
          <Tab className={`${this.state.tabIndex === 2 ? "tab-selected active" : null}`}>
          AddCourseContent
          <p style={{}}/>
          </Tab>
        </TabList>
        <TabPanel>
            <Courses/>
        </TabPanel>
        <TabPanel>
            <AddCourse/>
        </TabPanel>
        <TabPanel>
            <AddCourseContent/>
        </TabPanel>
      </Tabs>
      
      </div>
    );
  }
}
export default TabsContent;
