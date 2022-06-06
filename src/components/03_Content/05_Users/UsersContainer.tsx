import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsLoaderAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC, UsersPageType,
    UserType
} from "../../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

type UserPropsType = {
    usersPage: UsersPageType,
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setIsLoader: (isLoader: boolean) => void
}

export class UsersAPI extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setIsLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${this.props.usersPage.currentPage}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUserCount(response.data.totalCount)
                    this.props.setIsLoader(false)
                }
            )

    }

    onClickHandler = (b: number) => {
        this.props.setIsLoader(true)
        this.props.setCurrentPage(b)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${b}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsLoader(false)
            })

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
                <>
                    {this.props.usersPage.isLoader && <Preloader/>}
                </>

                <Users onClickHandler={this.onClickHandler}
                       onClickHandlerFollow={this.onClickHandlerFollow}
                       onClickHandlerUnfollow={this.onClickHandlerUnfollow}
                       users={this.props.usersPage.users}
                       currentPage={this.props.usersPage.currentPage}
                       totalUserCount={this.props.usersPage.totalUserCount}
                       pageSize={this.props.usersPage.pageSize}
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
        setIsLoader: (isLoader: boolean) => dispatch(setIsLoaderAC(isLoader))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
