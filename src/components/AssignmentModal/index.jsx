import React from "react";
import './AssignmentModal.css'

function AssignmentModal(props) {
  const closeThis = () => {
    const modals = document.querySelectorAll(".div-ass");
    if (modals) {
      modals.forEach(modal => {
        modal.style.display = "none";
      });
    }
  };

  if (props) {
    console.log(props, "modal props");
  }
  const github = props.selectedAss.githubUrl ? props.selectedAss.githubUrl : ''
  const branch = props.selectedAss.branch ? props.selectedAss.branch : ''

  return (
    <div className="div-ass">
      <div className="modal-learner-add-ass"></div>
      <div className="modal-learner-container">
        <div className="modal-learner-content">
          <div className="modal-header">
            <span>Assignment #</span> 
            <span className="status">{props.selectedAss && props.selectedAss.id}</span>
          </div>
          {/* <div className="ass-select">
            <select name="" id="" className="input-ass">
              <option value="">1</option>
            </select>
          </div> */}
          {props.selectedAss && (
            <div className="github-url-container">
              <label htmlFor="">codeReviewer</label>
              <ul>
                <li>
                <span><p>{props.codeReviewer && props.codeReviewer.username}</p></span>
                </li>
              </ul>
              
            </div>
          )}
          <div className="github-url-container">
            <label htmlFor="">reviewVideoUrl</label>
            <span>{props.selectedAss && props.selectedAss.reviewVideoUrl}</span>
          </div>
          <div className="github-url-container">
            <label htmlFor="">github-url</label>
            <input 
              type="text" 
              className="input-ass" 
              defaultValue={props.selectedAss &&  github ?github : ''} />
          </div>
          <div className="branch-container">
            <label htmlFor="">branch</label>
            <input 
              type="text" 
              className="input-ass" 
              defaultValue={props.selectedAss && branch ? branch : ''  } 
              readOnly={props.codeReviewer.username === props.user.username}
              />
          </div>
          <div className="button-container-ass">
            <button className="input-ass">Submit</button> <button className="input-ass" onClick={closeThis}>Back to Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentModal;
