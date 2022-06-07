import React from 'react';
import cl from './Profile.module.css'
import {connect} from "react-redux";
import {addPost, profilePageType, profileType, setUserProfile, updateNewPostText} from "../../../Redux/profile_reducer";
import {StateType} from "../../../Redux/redux-store";
import axios from "axios";
import {Profile} from "./Profile";
import {useNavigate, useParams, useLocation} from "react-router-dom";


type ProfileAPIPropsType = mapStatePropsType & mapDispatchPropsType & {router: any}

type mapStatePropsType = {
    profilePage: profilePageType
}

type mapDispatchPropsType = {
    addPost: (newMessage: string) => void
    updateNewPostText: (value: string) => void
    setUserProfile: (profile: profileType) => void
}

function withRouter<T extends unknown>(Component: React.ComponentType<T>) {
    return (props: T) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }}

export class ProfileAPI extends React.Component<ProfileAPIPropsType> {

    componentDidMount() {
        console.log(this.props.router)
        let userId = this.props.router.params.userId
        if(!userId){
            userId=18086
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const mapStateToProps = (state: StateType):mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}



let WithUrlDataContainerComponent = withRouter(ProfileAPI)

export const ProfileContainer = connect<
    mapStatePropsType, mapDispatchPropsType, any, StateType
    >(mapStateToProps, {addPost, updateNewPostText, setUserProfile})(WithUrlDataContainerComponent)
