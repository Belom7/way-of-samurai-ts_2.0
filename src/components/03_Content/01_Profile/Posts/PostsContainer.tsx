import React from 'react';
import {ActionType} from "../../../../Redux/store";
import {AddPostAC, UpdateNewPostTextAC} from "../../../../Redux/profile_reducer";
import {Posts} from "./Posts";

type PostsPropsType = {
    profilePage: { newMessage: string, posts: { name: string, message: string, likeCount: number }[] }
    dispatch: (action: ActionType) => void
}


export const PostsContainer = (props: PostsPropsType) => {

    const onClickAddPostHandler = (newMessage:string) => {
        props.dispatch(AddPostAC(newMessage))
    }
    const onChangeHandler = (value:string) => {
        props.dispatch(UpdateNewPostTextAC(value))
    }

    return (
        <Posts profilePage={props.profilePage} onClickAddPostHandler={onClickAddPostHandler} onChangeHandler={onChangeHandler}/>
    );
};