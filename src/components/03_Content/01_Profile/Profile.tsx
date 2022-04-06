import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};
