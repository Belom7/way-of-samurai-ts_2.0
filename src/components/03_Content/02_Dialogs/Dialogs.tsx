import React, {ChangeEvent} from 'react';
import cl from './Dialogs.module.css'
import {Dialog} from "./01_Dialog/Dialog";
import {Message} from "./02_Message/Message";
import {ActionType, AddMessageAC, dialogsPageType, UpdateNewMessageTextAC} from "../../../Redux/store";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewMessageTextAC(e.currentTarget.value))
    }
    const onClickHandler = () => {
        const newMessage = props.dialogsPage.newMessageText
        props.dispatch(AddMessageAC(newMessage))
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {props.dialogsPage.dialogsName.map(name => <Dialog id={name.id} name={name.name} key={name.id}/>)}
            </div>
            <div className={cl.messageItems}>
                {props.dialogsPage.messages.map((message, i) => <Message message={message.message} key={i}/>)}
            </div>
            <div>
                <textarea value={props.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                <button onClick={onClickHandler}>AddMessage</button>
            </div>
        </div>
    );
};
