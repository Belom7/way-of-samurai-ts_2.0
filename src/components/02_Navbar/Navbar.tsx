import React from 'react';
import cl from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div><a href={'/profile'}>Profile</a></div>
            <div><a href={'/messages'}>Messages</a></div>
            <div><a href={'/news'}>News</a></div>
            <div><a href={'/music'}>Music</a></div>
        </div>
    );
};
