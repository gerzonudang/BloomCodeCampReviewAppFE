import React, {Component} from "react";
import './AssignmentModal.css'

class AssigmentModal extends Component {
    render() {
        const closeThis = ()=> {
            
            const modals = document.querySelectorAll(".div-ass")
            if(modals) {
                modals.forEach(modal=>{
                    modal.style.display = "none"
                })
            }
          
        }
       
        

        if(this.props) {

            console.log(this.props, "modal props")
           
        }
        return (
            <div className="div-ass">
                <div className="modal-learner-add-ass">
               
                </div>
                <div className="modal-learner-container">
                    <div className="modal-learner-content">
                        <div className="modal-header"><span>Assignment #</span> {this.props.selectedAss && this.props.selectedAss.id}<span className="status">adsf</span></div>
                        <div className="ass-select">
                            <select name="" id="" className="input-ass">
                                <option value="">1</option>
                            </select>
                        </div>
                        {this.props.selectedAss && 
                        (<div className="github-url-container">
                            <label htmlFor="">codeReviewer</label>
                            <span>{this.props.selectedAss && this.props.selectedAss.codeReviewer}</span> 
                        </div>)
                        }
                        <div className="github-url-container">
                            <label htmlFor="">reviewVideoUrl</label>
                            <span>{this.props.selectedAss && this.props.selectedAss.reviewVideoUrl}</span> 
                        </div>

                        <div className="github-url-container">
                            <label htmlFor="">github-url</label>
                            <input type="text" className="input-ass" value = {this.props.selectedAss && this.props.selectedAss.githubUrl}/>
                        </div>
                        <div className="branch-container">
                            <label htmlFor="">branch</label>
                            <input type="text" className="input-ass" value = {this.props.selectedAss && this.props.selectedAss.branch}/>
                        </div>
                        <div className="button-container-ass">
                            <button  className="input-ass">Submit</button> <button  className="input-ass" onClick={closeThis}>Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default AssigmentModal;