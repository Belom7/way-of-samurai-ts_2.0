import React from "react";
import icon from '../../images/free-icon-social-network-4260116.png'
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={cl.header}>
            <img alt={'icon'} src={icon}/>
            <div className={cl.loginBlock}>
                {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}

