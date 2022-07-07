import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { TextareaControl } from '../../../../common/formsControl/textarea/TextareaControls';
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/Validators";

const maxLength = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field component={TextareaControl} validate={[requiredField, maxLength]} name={'newMessageBody'} palaceholder={'Enter your message'}/></div>
            <div>
                <button>AddMessage</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<any>({form: 'newMessageBody'})(AddMessageForm)