import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import MainMenu from "./components/MainMenu";
import './App.css';

import MazeCellsList from "./components/mazeGenerator/MazeCellsList";
import SideBar from "./components/ToggleButton/SideBar";
import BackDrop from "./components/BackDrop/BackDrop";

function App() {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    const sideBarClickHandler = () => {
        setIsSideBarVisible((prevState) => !prevState);
    };

    let backDrop;

    if(isSideBarVisible) backDrop = <BackDrop toggleButtonOnClick={sideBarClickHandler}/>

    return (
        <Router className="App">
            <NavBar toggleButtonOnClick={sideBarClickHandler}/>
            <SideBar isSideBarShow={isSideBarVisible}/>
            {backDrop}
            <div className="mainContainer">
                <Route exact path="/" component={MainMenu} />
                <Route path="/playGame" component={MazeCellsList} />
            </div>
        </Router>
  )
}

export default App;
