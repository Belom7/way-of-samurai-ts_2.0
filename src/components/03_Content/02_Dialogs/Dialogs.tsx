import React from 'react';
import cl from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.item + ' ' + cl.active}>
                    Maks
                </div>
                <div className={cl.item}>
                    Viktor
                </div>
                <div className={cl.item}>
                    Egor
                </div>
                <div className={cl.item}>
                    Evgeniy
                </div>
                <div className={cl.item}>
                    Sasha
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
