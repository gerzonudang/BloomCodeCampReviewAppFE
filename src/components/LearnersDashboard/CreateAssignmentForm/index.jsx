import React, { useState } from 'react';
import api from "../../../api/labs";
import './CreateAssignmentForm.css';

const CreateAssignmentForm = (props) => {
  const [assignmentData, setAssignmentData] = useState({
    branch: '',
    githubUrl: '',
    number: '',
    codeReviewVideoUrl: '',
    status: '',
    user: { username: localStorage.getItem("username") }
  });

  const handleInputChange = (event) => {
    setAssignmentData({
      ...assignmentData,
      [event.target.name]: event.target.value
    });
    console.log(assignmentData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await api.post('/api/assignments', assignmentData, {
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        console.log(response );
        
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <form onSubmit={handleSubmit} className='form-create-ass'>
      <div className="create-ass-x" onClick = {props.closeFormHander}>X</div>
    <div className="input-container">

        <label htmlFor="">Branch</label>
        <input
            type="text"
            name="branch"
            value={assignmentData.branch}
            onChange={handleInputChange}
            placeholder="Branch"
        />
    </div>
    <div className="input-container">   
        <label htmlFor="">Github URL</label>
        
      <input
        type="text"
        name="githubUrl"
        value={assignmentData.githubUrl}
        onChange={handleInputChange}
        placeholder="GitHub URL"
      />
    </div>

<div className="input-container">   
        <label htmlFor="">Number</label>
        
      <input
        type="text"
        name="number"
        value={assignmentData.number}
        onChange={handleInputChange}
        placeholder="Number"
      />
    </div>

 <div className="input-container">   
    <label htmlFor="">Code Review URL</label>
      <input
        type="text"
        name="codeReviewVideoUrl"
        value={assignmentData.codeReviewVideoUrl}
        onChange={handleInputChange}
        placeholder="Code Review Video URL"
      />
    </div>
<div className="input-container">   
        <label htmlFor="">Status</label>
        
      <input
        type="text"
        name="status"
        value={assignmentData.status}
        onChange={handleInputChange}
        placeholder="Status"
      />
    </div>
    <div className="input-container">   
      <button type="submit">Create Assignment</button>
    </div>
    </form>
  );
};

export default CreateAssignmentForm;
