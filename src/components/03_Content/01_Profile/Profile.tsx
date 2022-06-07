import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {profilePageType, profileType} from "../../../Redux/profile_reducer";

type ProfilePropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    setUserProfile: (profile: profileType) => void
    profilePage: profilePageType
}

export const Profile = ({addPost,profilePage, updateNewPostText}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profilePage.profile}/>
            <Posts profilePage={profilePage} addPost={addPost}
                   updateNewPostText={updateNewPostText}/>
        </div>
    );
};
