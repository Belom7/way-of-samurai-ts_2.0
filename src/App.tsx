import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

export default App;

const Header = () => {
    return (
        <div>
            <a>Home </a>
            <a>Work </a>
            <a>Garage </a>
        </div>
    )
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
            </ul>
        </div>
    )
}