import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, profilePageType} from "../../../Redux/store";

type ProfilePropsType = {
    profilePage:profilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <Posts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};
