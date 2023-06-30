import React, { useState } from 'react';
import api from "../../../api/labs";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="branch"
        value={assignmentData.branch}
        onChange={handleInputChange}
        placeholder="Branch"
      />
      <input
        type="text"
        name="githubUrl"
        value={assignmentData.githubUrl}
        onChange={handleInputChange}
        placeholder="GitHub URL"
      />
      <input
        type="text"
        name="number"
        value={assignmentData.number}
        onChange={handleInputChange}
        placeholder="Number"
      />
      <input
        type="text"
        name="codeReviewVideoUrl"
        value={assignmentData.codeReviewVideoUrl}
        onChange={handleInputChange}
        placeholder="Code Review Video URL"
      />
      <input
        type="text"
        name="status"
        value={assignmentData.status}
        onChange={handleInputChange}
        placeholder="Status"
      />
      <input
        type="text"
        name="userId"
        defaultValue={props.userId}
        onChange={handleInputChange}
        placeholder="User ID"
      />
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default CreateAssignmentForm;
