import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const PostsForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'Post'} placeholder={'new message post'}/>
            <button>Add post</button>
        </form>
    )
}

export const PostsFormRedux = reduxForm<any>({form: 'newPost'})(PostsForm)