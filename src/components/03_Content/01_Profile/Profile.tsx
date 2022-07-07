import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {profilePageType} from "../../../Redux/profile_reducer";


type ProfilePropsType = {
    addPost: (newMessage: string) => void
    profilePage: profilePageType
    updateStatus: (status: string) => void
}

export const Profile = ({addPost, profilePage, updateStatus}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profilePage.profile} status={profilePage.status} updateStatus={updateStatus}/>
            <Posts profilePage={profilePage} addPost={addPost}/>
        </div>
    );
};
