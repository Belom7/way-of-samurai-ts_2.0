import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import {profilePageType} from "../../../Redux/profile_reducer";



type ProfilePropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    profilePage: profilePageType
}

export const Profile = ({addPost,profilePage, updateNewPostText}:ProfilePropsType) => {
    debugger
    return (
        <div>
            <ProfileInfo profile={profilePage.profile}/>
            <Posts profilePage={profilePage} addPost={addPost}
                   updateNewPostText={updateNewPostText}/>
        </div>
    );
};
