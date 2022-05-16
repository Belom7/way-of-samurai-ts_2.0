import React from 'react';
import cl from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {StoreContext} from "../../../StoreContext";

export const Profile = () => {
    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <StoreContext.Consumer>
                {(store) => (
                    <PostsContainer profilePage={store.getState().profilePage} dispatch={store.dispatch}/>
                )}
            </StoreContext.Consumer>
        </div>
    );
};
