import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {profilePageType} from "../../../Redux/profile_reducer";
import { Navigate } from 'react-router-dom';



type ProfilePropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    profilePage: profilePageType
    isAuth:boolean
}

export const Profile = ({addPost,profilePage, updateNewPostText, isAuth}:ProfilePropsType) => {
    if(!isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={profilePage.profile}/>
            <Posts profilePage={profilePage} addPost={addPost}
                   updateNewPostText={updateNewPostText}/>
        </div>
    );
};
