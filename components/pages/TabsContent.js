import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddCourse from "./Tabs/AddCourse";
import AddCourseContent from "./Tabs/AddCourseContent";
import Courses from "./Tabs/Courses";
import "./style.css";

class TabsContent extends Component {
  state = {
    tabIndex: 0
  };
  render() {
    return (
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
          <Tab className={`${this.state.tabIndex === 0 ? "active" : null}`}>
            <Courses />
          </Tab>
          <Tab className={`${this.state.tabIndex === 1 ? "active" : null}`}>
            <AddCourse />
          </Tab>
          <Tab className={`${this.state.tabIndex === 2 ? "active" : null}`}>
            <AddCourseContent />
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}
export default TabsContent;
