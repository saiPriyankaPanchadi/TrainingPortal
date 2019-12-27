import React, { Component } from "react";



class Courses extends Component {
    constructor(){
      super();
      this.state={
        courseID:'01',
        courseName:''
      }
    }
  render() {
    return (
      <div className='courses'>
      <h3> Courses Available</h3>
      

      </div>
    );
  }
}
export default Courses;
