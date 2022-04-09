import React from 'react';
import cl from './Dialogs.module.css'
import {Dialog} from "./01_Dialog/Dialog";
import {Message} from "./02_Message/Message";
import {dialogsPageType} from "../../../App";

type DialogsPropsType = {
    dialogsPage:dialogsPageType
}

export const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {props.dialogsPage.dialogsName.map(name => <Dialog id={name.id} name={name.name} key={name.id}/>)}
            </div>
            <div className={cl.messageItems}>
                {props.dialogsPage.messages.map((message, i) => <Message message={message.message} key={i}/>)}
            </div>
        </div>
    );
};
