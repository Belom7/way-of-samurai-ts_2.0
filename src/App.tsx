import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Content} from "./components/03_Content/Content";

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;



