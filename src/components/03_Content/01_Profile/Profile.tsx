import React from 'react';
import cl from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    posts:{name: string, message: string, likeCount: number}[]
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>
    );
};
