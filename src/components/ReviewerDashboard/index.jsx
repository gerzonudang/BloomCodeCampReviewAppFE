import React, {Component} from 'react';
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
        <div><p>Welcome Reviewer!</p></div>
      
    );
  }
}
export default Reviewer;
