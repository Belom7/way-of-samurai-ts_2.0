import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {StateType} from "../Redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T> (Component: ComponentType<T>){

    const RedirectComponent = (props: mapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}
