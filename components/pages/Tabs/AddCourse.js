import React from 'react'
import Register from '../components/auth/style.css';


class AddCourse extends React.Component {
  constructor() {
    super();
    this.state={
courseId:'01'
    }
  }

  handleSubmit=(event) =>{
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }


  render() {
    return (
     <div className="container">
      <div id="wrapper"> 
      <form  className = 'form'  onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="courseId"> courseId</label>
        <input id="courseId" class="fadeIn second" name="courseId" type="courseId" value={this.state.courseId} disabled />
</div>
<div>
        <label htmlFor="courseName">  courseName</label>
        <input id="courseName" class="fadeIn second" name="courseName" type="courseName"  />
      </div>  
<div>
        <label htmlFor="description">  description</label>
        <input id="description" name="description" class="fadeIn second" type="description" /> 
</div> <br/>
        <button className="button">Send data!</button>
        
      </form>
    </div>
    </div>

    );
  }
}

export default AddCourse