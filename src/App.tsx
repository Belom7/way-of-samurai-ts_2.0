import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Dialogs} from "./components/03_Content/02_Dialogs/Dialogs";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>

        </div>
    );
}

export default App;



