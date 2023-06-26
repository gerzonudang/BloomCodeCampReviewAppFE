import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>{props.data.value}</h2>
            </div>
        </div>
    );
}

export default Header;
