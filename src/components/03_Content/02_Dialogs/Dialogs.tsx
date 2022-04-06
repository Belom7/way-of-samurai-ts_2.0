import React from 'react';
import cl from './Dialogs.module.css'
import {Dialog} from "./01_Dialog/Dialog";
import {Message} from "./02_Message/Message";

export const Dialogs = () => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <Dialog name={'Maks'} id={1}/>
                <Dialog name={'Alex'} id={2}/>
                <Dialog name={'Mikki'} id={3}/>
                <Dialog name={'Jax'} id={4}/>
                <Dialog name={'Xioru'} id={5}/>
            </div>
            <div className={cl.messageItems}>
                <Message message={'Здарова мужик!'}/>
                <Message message={'Как дела?'}/>
                <Message message={'Хо-хо-хо!'}/>
                <Message message={'.........'}/>
                <Message message={'Ничего страшного!'}/>
            </div>
        </div>
    );
};
