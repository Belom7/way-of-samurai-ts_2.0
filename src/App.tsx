import React from 'react';
import './App.css';
import {Header} from "./components/01_Header/Header";
import {Navbar} from "./components/02_Navbar/Navbar";
import {Profile} from "./components/03_Content/01_Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/03_Content/04_Music/Music";
import {News} from "./components/03_Content/03_News/News";
import {connect} from "react-redux";
import {Dialogs} from "./components/03_Content/02_Dialogs/Dialogs";
import {StateType} from "./Redux/store";
import {AddMessageAC, UpdateNewMessageTextAC} from "./Redux/dialogs_reducer";
import {Dispatch} from "redux";


function App() {
    const mapStateToProps = (state: StateType) => {
        return {
            dialogsPage: state.dialogsPage
        }
    }
    const mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            onChangeHandler: (value: string) => dispatch(UpdateNewMessageTextAC(value)),
            onClickHandler: (newMessage: string) => dispatch(AddMessageAC(newMessage))
        }

    }

    const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
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
                           element={<SuperDialogsContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;



