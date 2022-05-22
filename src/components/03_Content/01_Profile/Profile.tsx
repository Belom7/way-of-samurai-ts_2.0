import React from 'react';
import cl from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../../Redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/profile_reducer";
import {Posts} from "./Posts/Posts";

export const Profile = () => {
    const mapStateToProps = (state: StateType) => {
        return {
            profilePage: state.profilePage
        }
    }
    const mapDispatchToProps = (dispatch: Dispatch) => {
        return {
            onClickAddPostHandler: (newMessage:string) => dispatch(AddPostAC(newMessage)),
            onChangeHandler: (value:string) => dispatch(UpdateNewPostTextAC(value))
        }

    }
    const SuperProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

    return (
        <div className={cl.content}>
            <ProfileInfo/>
            <SuperProfileContainer/>
        </div>
    );
};
