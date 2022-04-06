import React from 'react';
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.item + ' ' + cl.active}>
                    <NavLink to='/messages/1'>Maks</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to='/messages/2'>Viktor</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to='/messages/3'>Egor</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to='/messages/4'>Evgeniy</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to='/messages/5'>Sasha</NavLink>
                </div>
            </div>
            <div className={cl.messageItems}>
                <div className={cl.message}>
                    Здарова мужик!
                </div>
                <div className={cl.message}>
                    Как дела?
                </div>
                <div className={cl.message}>
                    Хо-хо-хо!
                </div>
                <div className={cl.message}>
                    .........
                </div>
                <div className={cl.message}>
                    Ничего страшного!
                </div>
            </div>
        </div>
    );
};
