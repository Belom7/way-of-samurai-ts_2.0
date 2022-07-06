import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} component={'input'} name={'login'}/></div>
            <div><Field placeholder={'Password'} component={'input'} name={'password'}/></div>
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


