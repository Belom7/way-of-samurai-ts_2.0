import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authType, setUserData} from "../../Redux/auth_reducer";
import {StateType} from "../../Redux/redux-store";

type HeaderPropsType = {
    setUserData: (data: authType) => void
    isAuth: boolean
    login: string | null
}

export class HeaderAPI extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.setUserData(response.data.data)
                    }
                }
            )
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

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)

