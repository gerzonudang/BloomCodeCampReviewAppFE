import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
   
        state = {
            username: "myusername",
            password: "mypassword"
        }
 


loginProcess = (e) => {
    e.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
        alert("All the fields are mandatory!");
        return;
    }
    this.props.loginHandler(this.state);
    this.setState({ username: "", password: "" });
    this.props.history.push("/");
};

render() {
    return (
        <div className="login-wrapper">
            <form action="" className = "form-login" onSubmit={this.loginProcess} >
            <div className="login-header">
                <h2> Login</h2>
            </div>
            <div className='credentials-container'>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    id='username'
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })}
                    />
            </div>
            <div className='credentials-container'>
                <label htmlFor="password">Password</label> 
                <input 
                    type="password" 
                    name="password"
                    id='password'
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                
                    />
            </div>
                <div className='credentials-container'>
                    <button type="submit" value="Login" >Login</button>
                </div>
            </form>

        </div>
    );
  }
}
export default Login;
