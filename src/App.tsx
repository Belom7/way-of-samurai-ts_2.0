import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {UsersContainer} from "./components/03_Content/05_Users/UsersContainer";
import {DialogsContainer} from "./components/03_Content/02_Dialogs/DialogsContainer";


function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile/>}
                    />
                    <Route path={'/messages'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/users'}
                           element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



