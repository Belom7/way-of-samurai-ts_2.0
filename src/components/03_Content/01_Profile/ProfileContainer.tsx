import React from 'react';
import cl from './Profile.module.css'
import {connect} from "react-redux";
import {
    addPost, getStatus, isProfileThunkCreator,
    profilePageType,
    updateStatus
} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/redux-store";
import {Profile} from "./Profile";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../../hoc/WithRouter";
import {NavLink} from "react-router-dom";


type ProfileAPIPropsType = mapStatePropsType & mapDispatchPropsType & { router: any }

type mapStatePropsType = {
    profilePage: profilePageType,
    authorizedUserId: number | null,
    isAuth: boolean
}

type mapDispatchPropsType = {
    addPost: (newMessage: string) => void
    isProfileThunkCreator: (userID: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}




export class ProfileAPI extends React.Component<ProfileAPIPropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            // if(!userId){
            //     this.props.history.push()
            //     return <NavLink to={'/Login'}/>
            // }
        }
        this.props.isProfileThunkCreator(userId)
        this.props.getStatus(userId)
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
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    (connect<mapStatePropsType, mapDispatchPropsType, any, StateType>(mapStateToProps, {
        addPost,
        isProfileThunkCreator,
        getStatus,
        updateStatus
    })),
    withRouter
)(ProfileAPI)
