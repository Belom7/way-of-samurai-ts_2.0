import React from "react";
import icon from '../../images/free-icon-social-network-4260116.png'
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={cl.header}>
            <img alt={'icon'} src={icon}/>
            <div className={cl.loginBlock}>
                {props.isAuth?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}

