import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {DialogsContainer} from "./components/03_Content/02_Dialogs/DialogsContainer";
import {StoreContext} from "./StoreContext";


function App() {
    debugger
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
                           element={<StoreContext.Consumer>
                               {(store) => (
                                   <DialogsContainer dialogsPage={store.getState().dialogsPage}
                                                     dispatch={store.dispatch}
                                   />
                               )}
                           </StoreContext.Consumer>
                               }/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



