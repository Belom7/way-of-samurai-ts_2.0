import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
    getUsersThunkCreator,
    followUserThunkCreator,
    unFollowUserThunkCreator,
    UsersPageType
} from "../../../Redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {currentPage, isAuth, isDisabled, pageSize, totalUserCount, usersPage} from "../../../Redux/users-selectors";

type UserPropsType = {
    getUsersThunkCreator: (currentPage: number) => void
    followUserThunkCreator: (userID: number) => void
    unFollowUserThunkCreator: (userID: number) => void
    isDisabled: number[]
    usersPage: UsersPageType
    isAuth: boolean
}

export class UsersAPI extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage)
    }

    onClickHandler = (b: number) => {

        this.props.getUsersThunkCreator(b)

        // this.props.setIsLoader(true)
        // this.props.setCurrentPage(b) //!!!!!
        // usersApi.getUsers(b).then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setIsLoader(false)
        //     }
        // )
    }

    onClickHandlerFollow = (userID: number) => {
        this.props.followUserThunkCreator(userID)
    }
    onClickHandlerUnfollow = (userID: number) => {
        this.props.unFollowUserThunkCreator(userID)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
        return (
            <div>
                <>{this.props.usersPage.isLoader && <Preloader/>}</>
                <Users onClickHandler={this.onClickHandler}
                       onClickHandlerFollow={this.onClickHandlerFollow}
                       onClickHandlerUnfollow={this.onClickHandlerUnfollow}
                       users={this.props.usersPage.users}
                       currentPage={this.props.usersPage.currentPage}
                       totalUserCount={this.props.usersPage.totalUserCount}
                       pageSize={this.props.usersPage.pageSize}
                       isDisabled={this.props.isDisabled}
                />
            </div>
        );
    };
}

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: usersPage(state),
        pageSize: pageSize(state),
        totalUserCount: totalUserCount(state),
        currentPage: currentPage(state),
        isDisabled: isDisabled(state),
        isAuth: isAuth(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {getUsersThunkCreator, followUserThunkCreator, unFollowUserThunkCreator})
)(UsersAPI)