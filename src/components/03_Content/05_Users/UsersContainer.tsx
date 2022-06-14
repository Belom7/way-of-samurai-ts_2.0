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
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";
import {usersApi} from "../../../api/api";

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
        usersApi.getUsers(this.props.usersPage.currentPage).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
                this.props.setIsLoader(false)
            }
        )
    }

    onClickHandler = (b: number) => {
        this.props.setIsLoader(true)
        this.props.setCurrentPage(b)
        usersApi.getUsers(b).then(data => {
                this.props.setUsers(data.items)
                this.props.setIsLoader(false)
            }
        )
    }

    onClickHandlerFollow = (userID: number) => {
        this.props.setIsLoader(true)
        usersApi.followUser(userID).then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userID)
                    this.props.setIsLoader(false)
                }
            }
        )
    }

    onClickHandlerUnfollow = (userID: number) => {
        usersApi.unFollowUser(userID).then(data => {
                if (data.resultCode === 0) {
                    this.props.unFollow(userID)
                    this.props.setIsLoader(false)
                }
            }
        )
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
