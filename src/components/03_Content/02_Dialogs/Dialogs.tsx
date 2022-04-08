import React from 'react';
import cl from './Dialogs.module.css'
import {Dialog} from "./01_Dialog/Dialog";
import {Message} from "./02_Message/Message";

export const Dialogs = () => {

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
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <Dialog id={dialogsName[0].id} name={dialogsName[0].name}/>
                <Dialog id={dialogsName[1].id} name={dialogsName[1].name}/>
                <Dialog id={dialogsName[2].id} name={dialogsName[2].name}/>
            </div>
            <div className={cl.messageItems}>
                <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>
                <Message message={messages[2].message}/>
            </div>
        </div>
    );
};
