import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/Validators";
import {TextareaControl} from "../../../common/formsControl/textarea/TextareaControls";

const maxLength = maxLengthCreator(10)

const PostsForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextareaControl} name={'Post'} placeholder={'new message post'} validate={[requiredField,maxLength]}/>
            <button>Add post</button>
        </form>
    )
}

export const PostsFormRedux = reduxForm<any>({form: 'newPost'})(PostsForm)