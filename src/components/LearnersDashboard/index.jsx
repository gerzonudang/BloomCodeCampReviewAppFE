import React, {Component} from 'react';
import './LearnersDashboard.css';

class Learner extends Component {
   
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
        <div className="dashboard-wrapper-learners">
            <h1>Learner Dashboard</h1>
            <div className="actions-wrapper">
                <button>Submit New</button>
                <button>Logout</button>
            </div>
            <div className="welcome-text">Welcome Name!</div>
           
        </div>
    );
  }
 }
export default Learner;
