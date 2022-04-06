import React from 'react';
import cl from "../Dialogs.module.css";

type MessagePropsType = {
    message:string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={cl.message}>
            {props.message}
        </div>
    );
};