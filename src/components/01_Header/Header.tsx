import React from "react";
import icon from '../../images/free-icon-social-network-4260116.png'
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={cl.header}>
            <img alt={'icon'} src={icon}/>
            <div className={cl.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </div>
    )
}

