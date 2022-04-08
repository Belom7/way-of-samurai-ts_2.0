import React from 'react';
import cl from "./Posts.module.css";
import {Post} from "./Post/Post";

export const Posts = () => {
    const posts = [
        {name:'Maks', message: 'Hi people!', likeCount:200},
        {name:'Denis', message: 'x', likeCount:20},
        {name:'Mark', message: 'wow!', likeCount:10},
        {name:'Alex', message: 'perfecto!', likeCount:50},
        {name:'Gera', message: 'rrrr!', likeCount:50},
    ]
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
                {posts.map((post,i)=><Post key={i} name={post.name} message={post.message} likeCount={post.likeCount}/>)}
            </div>

        </div>
    );
};