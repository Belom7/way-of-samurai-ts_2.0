import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'textarea'} name={'newMessageBody'} palaceholder={'Enter your message'}/></div>
            <div>
                <button>AddMessage</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<any>({form: 'newMessageBody'})(AddMessageForm)