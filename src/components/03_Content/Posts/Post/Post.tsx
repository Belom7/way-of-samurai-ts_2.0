import React from 'react';
import cl from './Post.module.css'

type PostPropsType = {
    name: string
    message: string
    likeCount: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={cl.item}>
            <div>
                <img alt={'Avatar'} src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>
                {props.name}
            </div>
            <div>
                {props.message}
            </div>
            <div>
                like {props.likeCount}
            </div>
        </div>
    );
};