import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                <Post name={'Maks'} message={'Hi people!'} likeCount={200}/>
                <Post name={'Denis'} message={'x'} likeCount={20}/>
                <Post name={'Mark'} message={'wow!'} likeCount={10}/>
                <Post name={'Alex'} message={'perfecto!'} likeCount={50}/>

            </div>

        </div>
    );
};