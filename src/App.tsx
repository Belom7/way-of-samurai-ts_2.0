import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Dialogs} from "./components/03_Content/02_Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {StoreType} from "./Redux/store";

export type profilePageType = {
    newMessage: string
    posts: { name: string, message: string, likeCount: number }[]
}
export type dialogsPageType = {
    dialogsName: { id: number, name: string }[]
    messages: { message: string }[]
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile profilePage={props.store.getState().profilePage}
                                             addPost={props.store.addPost.bind(props.store)}
                                             changeNewMessage={props.store.changeNewMessage.bind(props.store)}/>}/>
                    <Route path={'/messages'}
                           element={<Dialogs dialogsPage={props.store.getState().dialogsPage}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



