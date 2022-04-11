import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    posts:{name: string, message: string, likeCount: number}[]
}

export const Posts = (props:PostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        console.log(newPostElement.current?.value)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                {props.posts.map((post,i)=><Post key={i} name={post.name} message={post.message} likeCount={post.likeCount}/>)}
            </div>

        </div>
    );
};