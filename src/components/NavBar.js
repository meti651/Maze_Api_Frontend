import React from "react";
import {Link} from "react-router-dom";
import ToggleButton from "./ToggleButton/ToggleButton";
import './NavBar.css';


const NavBar = props => (
    <header className="nav-bar">
        <nav className="nav-bar-container">
            <div className="nav-bar-logo"><Link to="/">Logo</Link></div>
            <div className="nav-bar-spacer"/>
            <div>
                <ToggleButton toggleButtonOnClick={props.toggleButtonOnClick}/>
            </div>
        </nav>
    </header>
);

export default NavBar