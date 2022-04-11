import React, {ChangeEvent} from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    profilePage:{newMessage:string, posts: { name: string, message: string, likeCount: number }[]}
    addPost: (value: string) => void
    changeNewMessage: (value: string) => void
}

export const Posts = (props: PostsPropsType) => {

    const onClickAddPostHandler = () => {
        props.addPost(props.profilePage.newMessage)
        props.changeNewMessage('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
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