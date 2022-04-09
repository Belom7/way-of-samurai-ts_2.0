import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

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

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} dialogsName={dialogsName} messages={messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
