import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddCourse from "./Tabs/AddCourse";
import AddCourseContent from "./Tabs/AddCourseContent";
import Courses from "./Tabs/Courses";
import "./style.css";

class TabsContent extends Component {
  render() {
    return (
      <Tabs className ="tabs">
        <TabList className="tab-nav-container">
          <Tab>
            <Courses />
          </Tab>
          <Tab>
            <AddCourse />
          </Tab>
          <Tab>
            <AddCourseContent />
          </Tab>
        </TabList>
      </Tabs>
    );
  }
}
export default TabsContent;
