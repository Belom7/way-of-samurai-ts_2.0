import React from "react";
import icon from '../../images/free-icon-social-network-4260116.png'
import cl from './Header.module.css'

export const Header = () => {
    return (
        <div className={cl.header}>
            <img alt={'icon'} src={icon}/>
        </div>
    )
}