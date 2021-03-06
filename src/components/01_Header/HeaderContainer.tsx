import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth_reducer";
import {StateType} from "../../Redux/redux-store";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}

export class HeaderAPI extends React.Component<HeaderPropsType> {

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPI)

