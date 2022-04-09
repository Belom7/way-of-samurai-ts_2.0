import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../../App";

type ProfilePropsType = {
    profilePage:profilePageType
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts}/>
        </div>
    );
};
