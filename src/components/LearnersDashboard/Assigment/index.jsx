import React, {Component} from "react";
import './Assigment.css';

class Assignments extends Component {
    
    render() {
        const ass = this.props.assignment
      
        const openAss = ()=>{
            
            this.props.handleDataFromChild(ass)
            const modal = document.querySelector(".div-ass")
            modal.style.display = "block"
        }
        return (
       
        <div className="work" >
            <div className="work-wrapper">
                <div className="ass-title"><span>My assignment</span></div>
                <div>assignment <span>{ass.id}</span> <span className="preview-ass-status">{ass.status}</span></div>
                <div className="url-container">
                    <label htmlFor="">githubUrl</label>
                    <a href={ass.githubUrl} className="preview-url">{ass.githubUrl}</a>
                </div>
                <div className="url-container">
                    <label htmlFor="">Branch</label>
                    <a href={ass.branch} className="preview-url">{ass.branch}</a>
                </div>
                <div className="url-container">
                    <label htmlFor="">Review Video URL</label>
                    <a href={ass.reviewVideoUrl} className="preview-url">{ass.reviewVideoUrl}</a>
                </div>
                <div className="url-container">
                    <button onClick={openAss}>View</button>
                </div>

            </div>
            
            
        </div>
        )
    }
}
export default Assignments;