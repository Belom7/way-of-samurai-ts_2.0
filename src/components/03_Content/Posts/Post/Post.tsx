import React from 'react';
import cl from './Post.module.css'

export const Post = () => {
    return (
        <div className={cl.item}>
            <img alt={'Avatar'} src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>
            post 1
            <div>
                like 1
            </div>
        </div>
    );
};