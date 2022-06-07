import React from 'react';
import cl from './Profile.module.css'
import {connect} from "react-redux";
import {addPost, profilePageType, profileType, setUserProfile, updateNewPostText} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/redux-store";
import axios from "axios";
import {Profile} from "./Profile";

type ProfileAPIPropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    setUserProfile: (profile: profileType) => void
    profilePage: profilePageType
}

export class ProfileAPI extends React.Component<ProfileAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return (
            <div className={cl.content}>
                <Profile {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}

export const ProfileContainer = connect(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(ProfileAPI)
