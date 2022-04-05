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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    );
};