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
                {dialogsName.map(name => <Dialog id={name.id} name={name.name} key={name.id}/>)}
            </div>
            <div className={cl.messageItems}>
                {messages.map((message, i) => <Message message={message.message} key={i}/>)}
            </div>
        </div>
    );
};
