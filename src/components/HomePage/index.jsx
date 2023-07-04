import React from "react";
import {Link} from 'react-router-dom'
import { Component } from "react";
import './HomePage.css'

class HomePage extends Component {
    
    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="dashboard-header">
                    <h2> Welcome to the Assigment Review App!</h2>
                </div>
                <div className="cards-container">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <div className="cta">
                  
                {<Link to="/login">Login</Link>}
                </div>
                <div className="footer">
                    <p>© 2021 - All Rights Reserved</p>
                </div>
            </div>
        );
    }
}

export default HomePage;