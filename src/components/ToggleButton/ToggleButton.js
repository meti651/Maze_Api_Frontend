import React from "react";
import './ToggleButton.css';


const ToggleButton = props => {
    return (
        <button className="toggle-button" onClick={props.toggleButtonOnClick}>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
            <div className="toggle-button-line"/>
        </button>
    )
};

export default ToggleButton;