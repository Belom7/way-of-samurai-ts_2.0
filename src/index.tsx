import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewMessage, state, subscribe} from "./Redux/state";
import reportWebVitals from "./reportWebVitals";


export const rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewMessage={changeNewMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerender()
subscribe(rerender)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
