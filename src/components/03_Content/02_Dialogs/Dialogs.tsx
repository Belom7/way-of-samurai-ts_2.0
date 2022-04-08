import React from 'react';
import cl from './Dialogs.module.css'
import {Dialog} from "./01_Dialog/Dialog";
import {Message} from "./02_Message/Message";

type DialogsPropsType = {
    dialogsName:{id: number, name: string}[]
    messages:{message:string}[]
}

export const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {props.dialogsName.map(name => <Dialog id={name.id} name={name.name} key={name.id}/>)}
            </div>
            <div className={cl.messageItems}>
                {props.messages.map((message, i) => <Message message={message.message} key={i}/>)}
            </div>
        </div>
    );
};
