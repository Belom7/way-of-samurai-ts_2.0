import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    posts:{name: string, message: string, likeCount: number}[]
    addPost:(value:string)=>void
}

export const Posts = (props:PostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPostHandler = () => {
        props.addPost(newPostElement.current? newPostElement.current.value: '')
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}>21</textarea>
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