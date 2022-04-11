import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewMessage, state} from "./Redux/state";


export const rerender = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewMessage={changeNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender(state)