import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ReviewerDashboard.css';

class Reviewer extends Component {
   
//    //loginHandler = this.loginHandler.bind(this);
//         state = {
//             username: "myusername",
//             password: "mypassword"
//         }
 
// loginProcess = (e) => {
//     e.preventDefault();
//     if (this.state.username === "" || this.state.password === "") {
//         alert("All the fields are mandatory!");
//         return;
//     }
//     this.props.loginHandler(this.state);
//     this.setState({ username: "", password: "" });
//     this.props.history.push("/");
// };

render() {
    return (
        
        <div className="reviewer-dashboard-wrapper">
            <div className="reviewer-dashboard-container">
                <div className="reviewer-dashboard-header">
                    <h1>Reviewer Dashboard</h1>
                    <Link >Logout</Link>
                </div>
                <div className="reviewer-dashboard-body">
                  <div className="reviewer-work">
                    <div className="work">

                    </div>
                    <div className="work">
                      
                    </div>
                  </div>
                  <div className="reviewer-work">
                    <div className="work">

                    </div>
                    <div className="work">
                      
                    </div>
                  </div>
                  <div className="reviewer-work">
                    <div className="work">

                    </div>
                    <div className="work">
                      
                    </div>
                  </div>
                </div>
            </div>
        </div>
      
    );
  }
}
export default Reviewer;
