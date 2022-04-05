import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img alt={'images'} src={'https://rozabox.com/wp-content/uploads/2019/01/man-5846064_1920-735x400.jpg'}/>
            </div>
            <div>
                Ava + description
            </div>
            <Posts/>
        </div>
    );
};
