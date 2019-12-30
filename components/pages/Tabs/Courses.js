import React, { Component } from "react";

import {Link} from 'react-router-dom';
import '../style.css';

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
   <Link to="/" style={{ color: 'yellow' }} className ="btn-primary">BACK To HOME</Link>
      </ul>

      </div>
    );
  }
}
export default Courses;
