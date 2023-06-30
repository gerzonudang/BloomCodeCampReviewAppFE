import React from 'react';
import './LearnersDashboard.css';
import Assignment from './Assigment';
import AssignmentModal from '../AssignmentModal'
import api from '../../api/labs';
import { useState, useEffect } from 'react';

function Learner() {
    console.log(localStorage.getItem("username"))
    const [data, setData] = useState(null);
    const [dataFromChild, setDataFromChild] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await api.get('/api/assignments', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              });
              
              const myData = response.data.filter(assignment=>assignment.user.username === localStorage.getItem('username'))
              setData(myData);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchData();
          
    }, []);
    
  
    const handleDataFromChild = (data) => {
        console.log(data, "data from child")
        setDataFromChild(data);
    };

    return (
        <div className="dashboard-wrapper-learners">
        <h1>Learner Dashboard</h1>
        <div className="actions-wrapper">
            <button>Submit New</button>
            <button>Logout</button>
        </div>
        <div className="welcome-text">Welcome Name!</div>
        <div className="preview-work-wrapper">
            <div className="corner-title">
            <span>Need work</span>
            </div>
           
            {data && data.length > 0 && data.filter(assignment=>assignment.status === "need revision").map(assignment => <Assignment key={assignment.id} assignment={assignment} handleDataFromChild = {handleDataFromChild}/>)}
        
          
                
        </div>

        <div className="preview-work-wrapper">
            <div className="corner-title">
                <span>Completed</span>
             </div>
             {data && data.length > 0 && data.filter(assignment=> assignment.status==="passed").map(assignment => <Assignment key={assignment.id} assignment={assignment} handleDataFromChild = {handleDataFromChild}/>)}
        
        </div>

        <div className="preview-work-wrapper">
            <div className="corner-title">
            <span>In review</span>
            </div>
            {data && data.length > 0 && data.filter(assignment=>assignment.status !== "need revision" && assignment.status!=="passed").map(assignment => <Assignment key={assignment.id} assignment={assignment} handleDataFromChild = {handleDataFromChild}/>)}
        
        </div>
        < AssignmentModal selectedAss = {dataFromChild}/> 
    </div>
    
);

  }


export default Learner;
