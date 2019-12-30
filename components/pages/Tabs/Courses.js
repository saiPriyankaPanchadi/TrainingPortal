import React, { Component } from "react";
import {Link} from 'react-router-dom';
import CourseDetails from './CourseDetails'
import '../style.css';
import {ProductConsumer} from '../../../Context'

class Courses extends Component {
    constructor(){
      super();
      this.state={
        products:[]
      }
    }
  render() {
    return (
      <div className="py-5">
      <div className='container'>
      <div className ='row'>
      <ProductConsumer>
      {(value)=>{return 'hi'}}
      </ProductConsumer>
      </div>
      <h3> Courses Available</h3>
      </div>
      </div>
    );
  }
}
export default Courses;
