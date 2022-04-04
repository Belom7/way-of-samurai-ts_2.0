import React from 'react';
import cl from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
        </div>
    );
};
