import React from "react";
import {Link} from "react-router-dom";
import './SideBar.css';

const SideBar = props =>{


    let sideBarClass = "side-bar-links";

    if(props.isSideBarShow){
        sideBarClass = "side-bar-links open"
    }
    return (
    <nav className={sideBarClass}>
        <ul>
            <li><Link to="/playGame">Play Game</Link></li>
            <li><Link to="/pathFinding">Path Finder</Link></li>
            <li><Link to="/customPathFinding">Make a challenge</Link></li>
            <li><Link to="/options">Options</Link></li>
            <li><Link to="/description">The more you know</Link></li>
        </ul>
    </nav>
);
};

export default SideBar;