import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {authMeThunkCreator} from "../../Redux/auth_reducer";
import {StateType} from "../../Redux/redux-store";

type HeaderPropsType = {
    authMeThunkCreator: () => void
    isAuth: boolean
    login: string | null
}

export class HeaderAPI extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.authMeThunkCreator()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {authMeThunkCreator})(HeaderAPI)

