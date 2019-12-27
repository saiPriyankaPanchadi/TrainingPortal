import React, { Component } from "react";



class Courses extends Component {
    constructor(){
      super();
      this.items = [
      {link:1, name:"course1", summary:"Summary Test 1",  description:"Desc 1"},
      {link:2, name:"course2", summary:"Summary Test 2", description:"Desc 2"},
      {link:3, name:"course3", summary:"Summary Test 3", description:"Desc 3"},
    ];
    }
  render() {
    return (
      <div>
     <h3> CoursesAvailble</h3>

      </div>
    );
  }
}
export default Courses;
