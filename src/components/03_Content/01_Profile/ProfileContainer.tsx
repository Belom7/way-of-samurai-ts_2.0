import React from 'react';
import cl from './Profile.module.css'
import {connect} from "react-redux";
import {
    addPost, isProfileThunkCreator,
    profilePageType,
    updateNewPostText
} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/redux-store";
import {Profile} from "./Profile";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileAPIPropsType = mapStatePropsType & mapDispatchPropsType & { router: any }

type mapStatePropsType = {
    profilePage: profilePageType
}

type mapDispatchPropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    isProfileThunkCreator: (userID: number) => void
}

function withRouter<T extends unknown>(Component: React.ComponentType<T>) {
    return (props: T) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
}

export class ProfileAPI extends React.Component<ProfileAPIPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 18086
        }
        this.props.isProfileThunkCreator(userId)
    }

    render() {
        return (
            <div className={cl.content}>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    (connect<mapStatePropsType, mapDispatchPropsType, any, StateType>(mapStateToProps, {
        addPost,
        updateNewPostText,
        isProfileThunkCreator
    })),
    withRouter
)(ProfileAPI)
