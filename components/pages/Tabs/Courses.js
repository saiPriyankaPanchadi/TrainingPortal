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
      <ul>
      <a href="https://www.javatpoint.com/reactjs-tutorial"
   onmouseover="this.style.backgroundColor='#ffdd00';this.style.color='#aaaaaa'"
   onmouseout="this.style.backgroundColor='transparent';this.style.color='inherit'">
Reactjs for beginners
</a>
    
     
      </ul>

      </div>
    );
  }
}
export default Courses;
