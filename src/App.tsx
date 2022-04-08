import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Dialogs} from "./components/03_Content/02_Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";

const posts = [
    {name: 'Maks', message: 'Hi people!', likeCount: 200},
    {name: 'Denis', message: 'x', likeCount: 20},
    {name: 'Mark', message: 'wow!', likeCount: 10},
    {name: 'Alex', message: 'perfecto!', likeCount: 50},
    {name: 'Gera', message: 'rrrr!', likeCount: 50},
]
const dialogsName = [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Mikki'},
    {id: 4, name: 'Jax'},
    {id: 5, name: 'Xioru'},
]
const messages = [
    {message: 'Здарова мужик!'},
    {message: 'Как дела?'},
    {message: 'Хо-хо-хо!'},
    {message: 'Ничего страшного!'},
    {message: '.........'}
]

function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={posts}/>}/>
                    <Route path={'/messages'} element={<Dialogs dialogsName={dialogsName} messages={messages}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



