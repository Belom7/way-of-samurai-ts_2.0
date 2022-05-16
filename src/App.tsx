import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {StoreType} from "./Redux/store";
import {DialogsContainer} from "./components/03_Content/02_Dialogs/DialogsContainer";


type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {
    debugger
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='App-wrapper-content'>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile profilePage={props.store.getState().profilePage}
                                             dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/messages'}
                           element={<DialogsContainer dialogsPage={props.store.getState().dialogsPage}
                                             dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



