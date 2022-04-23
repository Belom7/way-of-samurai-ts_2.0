import React, {ChangeEvent} from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";
import {ActionType} from "../../../../Redux/store";

type PostsPropsType = {
    profilePage: { newMessage: string, posts: { name: string, message: string, likeCount: number }[] }
    dispatch: (action: ActionType) => void
}

export const Posts = (props: PostsPropsType) => {

    const onClickAddPostHandler = () => {
        props.dispatch({type: 'ADD-POST', newMessage: props.profilePage.newMessage})
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'CHANGE-NEW-MESSAGE', value: e.currentTarget.value})
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea value={props.profilePage.newMessage} onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {props.profilePage.posts.map((post, i) => <Post key={i} name={post.name} message={post.message}
                                                                likeCount={post.likeCount}/>)}
            </div>
        </div>
    );
};