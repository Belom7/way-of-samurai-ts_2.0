import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setIsLoader,
    setTotalUserCount,
    UsersPageType,
    UserType
} from "../../../Redux/users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

type UserPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setIsLoader: (isLoader: boolean) => void
    usersPage: UsersPageType,
}

export class UsersAPI extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.setIsLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${this.props.usersPage.currentPage}`,
            {withCredentials: true})
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${10}&page=${b}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsLoader(false)
            })
    }

    onClickHandlerFollow = (userID: number) => {
        this.props.setIsLoader(true)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': 'fe474fb0-e353-423b-ba4a-43fb90adef85'}
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userID)
                    this.props.setIsLoader(false)
                }
            })
    }
    onClickHandlerUnfollow = (userID: number) => {
        this.props.setIsLoader(true)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,  {
            withCredentials: true,
            headers: {'API-KEY': 'fe474fb0-e353-423b-ba4a-43fb90adef85'}
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userID)
                    this.props.setIsLoader(false)
                }
            })
    }

    render() {
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

export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUserCount, setIsLoader
})(UsersAPI)
