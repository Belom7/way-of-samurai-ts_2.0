import React from 'react';
import {ActionType,dialogsPageType} from "../../../Redux/store";
import {AddMessageAC, UpdateNewMessageTextAC} from "../../../Redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const onChangeHandler = (value:string) => {
        props.dispatch(UpdateNewMessageTextAC(value))
    }
    const onClickHandler = (newMessage:string) => {
        props.dispatch(AddMessageAC(newMessage))
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler}/>
    );
};
