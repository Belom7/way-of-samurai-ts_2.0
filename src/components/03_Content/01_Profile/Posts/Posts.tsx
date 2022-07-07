import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";
import { PostsFormRedux } from './PostsForm';

type PostsPropsType = {
    profilePage: {posts: { name: string, message: string, likeCount: number }[] }
    addPost: (newMessage: string) => void
}


export const Posts = (props: PostsPropsType) => {

    const onClickAddPostHandler = (values:any) => {
        props.addPost(values.Post)
    }

    return (
        <div>
            My posts
            <div>
                <PostsFormRedux onSubmit={onClickAddPostHandler}/>
            </div>
            <div className={cl.posts}>
                {props.profilePage.posts.map((post, i) => <Post key={i} name={post.name}
                                                                message={post.message}
                                                                likeCount={post.likeCount}/>)}
            </div>
        </div>
    );
};

