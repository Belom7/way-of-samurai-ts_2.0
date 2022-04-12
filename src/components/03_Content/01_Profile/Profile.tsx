import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../../App";

type ProfilePropsType = {
    profilePage:profilePageType
    addPost:()=>void
    changeNewMessage:(value: string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <Posts profilePage={props.profilePage} addPost={props.addPost} changeNewMessage={props.changeNewMessage}/>
        </div>
    );
};
