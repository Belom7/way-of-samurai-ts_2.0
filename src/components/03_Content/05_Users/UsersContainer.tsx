import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC, UsersPageType,
    UserType
} from "../../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type UserPropsType = {
    usersPage: UsersPageType,
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export class UsersAPI extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${this.props.currentPage}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                }
            )

    }

    onClickHandler = (b: number) => {
        this.props.setCurrentPage(b)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${b}`)
            .then(response => this.props.setUsers(response.data.items))

    }

    onClickHandlerFollow = (userID: number) => {
        this.props.onClickHandlerFollow(userID)
    }
    onClickHandlerUnfollow = (userID: number) => {
        this.props.onClickHandlerUnfollow(userID)
    }

    render() {
        return (
            <div>
                <Users onClickHandler={this.onClickHandler}
                       onClickHandlerFollow={this.onClickHandlerFollow}
                       onClickHandlerUnfollow={this.onClickHandlerUnfollow}
                       usersPage={this.props.usersPage}
                       currentPage={this.props.currentPage}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                />
            </div>
        );
    };
}

const mapStateToProps = (state: StateType) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onClickHandlerFollow: (userID: number) => dispatch(followAC(userID)),
        onClickHandlerUnfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUserCount: (totalUserCount: number) => dispatch(setTotalUserCountAC(totalUserCount)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
