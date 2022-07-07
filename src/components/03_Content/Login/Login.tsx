import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputControl} from "../../common/formsControl/input/InputControl";
import {requiredField} from "../../../utils/validators/Validators";

type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} component={InputControl} name={'login'} validate={[requiredField]}/></div>
            <div><Field placeholder={'Password'} component={InputControl} name={'password'} validate={[requiredField]}/></div>
            <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>About me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<formDataType>({form: 'login'})(LoginForm)

export const Login = () => {

    const onSubmitHandler = (formData: formDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};


