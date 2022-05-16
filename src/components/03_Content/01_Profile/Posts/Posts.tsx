import React, {ChangeEvent} from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    profilePage: { newMessage: string, posts: { name: string, message: string, likeCount: number }[] }
    onClickAddPostHandler : (newMessage:string) => void
    onChangeHandler : (value:string) => void
}


export const Posts = (props: PostsPropsType) => {

    const onClickAddPostHandler = () => {
        let newMessage = props.profilePage.newMessage
        props.onClickAddPostHandler(newMessage)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea value={props.profilePage.newMessage} onChange={onChangeHandler}/>
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