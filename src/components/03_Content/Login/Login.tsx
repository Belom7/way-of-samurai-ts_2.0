import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputControl} from "../../common/formsControl/input/InputControl";
import {requiredField} from "../../../utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/auth_reducer";
import {Navigate} from 'react-router-dom';
import {StateType} from "../../../Redux/redux-store";
import style from '../../common/formsControl/textarea/TextareaControls.module.css'

type formDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'} component={InputControl} name={'email'} validate={[requiredField]}/></div>
            <div><Field placeholder={'Password'} component={InputControl} name={'password'} validate={[requiredField]}
                        type={'password'}/></div>
            <div><Field type={'checkbox'} component={'input'} name={'rememberMe'}/>About me</div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<formDataType>({form: 'login'})(LoginForm)

export const Login = (props: any) => {

    const onSubmitHandler = (formData: formDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {login})(Login)

