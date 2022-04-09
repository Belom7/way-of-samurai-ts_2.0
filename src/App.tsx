import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Dialogs} from "./components/03_Content/02_Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";


type AppPropsType = {
    posts: { name: string, message: string, likeCount: number }[]
    dialogsName: { id: number, name: string }[]
    messages: { message: string }[]
}

function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={props.posts}/>}/>
                    <Route path={'/messages'}
                           element={<Dialogs dialogsName={props.dialogsName} messages={props.messages}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



