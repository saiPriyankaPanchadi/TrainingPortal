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
     
       
      <form className="addCourse" onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="courseId"> courseId</label>
        <input id="courseId" name="courseId" type="courseId" value={this.state.courseId} disabled />
</div>
        <label htmlFor="courseName">  courseName</label>
        <input id="courseName" name="courseName" type="courseName"  />
        
<br/>
        <label htmlFor="description">  description</label>
        <input id="description" name="description" type="description" /> 

        <button primary='btn-bt'>Send data!</button>
      </form>
    

    );
  }
}

export default AddCourse