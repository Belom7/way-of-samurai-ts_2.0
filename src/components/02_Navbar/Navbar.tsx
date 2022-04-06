import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div><NavLink to={'/profile'} className={({isActive})=>isActive? cl.active: ''}>Profile</NavLink></div>
            <div><NavLink to={'/messages'} className={({isActive})=>isActive? cl.active: ''}>Messages</NavLink></div>
            <div><NavLink to={'/news'} className={({isActive})=>isActive? cl.active: ''}>News</NavLink></div>
            <div><NavLink to={'/music'} className={({isActive})=>isActive? cl.active: ''}>Music</NavLink></div>
        </div>
    );
};
