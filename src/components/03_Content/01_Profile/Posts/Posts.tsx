import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    posts:{name: string, message: string, likeCount: number}[]
}

export const Posts = (props:PostsPropsType) => {

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea>1</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {props.posts.map((post,i)=><Post key={i} name={post.name} message={post.message} likeCount={post.likeCount}/>)}
            </div>

        </div>
    );
};