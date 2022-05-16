import React from 'react';
import cl from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, profilePageType} from "../../../Redux/store";
import {PostsContainer} from "./Posts/PostsContainer";

type ProfilePropsType = {
    profilePage:profilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <PostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    );
};
