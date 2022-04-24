import React, {ChangeEvent} from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";
import {ActionType, AddPostAC, UpdateNewPostTextAC} from "../../../../Redux/store";

type PostsPropsType = {
    profilePage: { newMessage: string, posts: { name: string, message: string, likeCount: number }[] }
    dispatch: (action: ActionType) => void
}


export const Posts = (props: PostsPropsType) => {

    const onClickAddPostHandler = () => {
        let newMessage = props.profilePage.newMessage
        props.dispatch(AddPostAC(newMessage))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostTextAC(e.currentTarget.value))
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
                {props.profilePage.posts.map((post, i) => <Post key={i} name={post.name}
                                                                message={post.message}
                                                                likeCount={post.likeCount}/>)}
            </div>
        </div>
    );
};