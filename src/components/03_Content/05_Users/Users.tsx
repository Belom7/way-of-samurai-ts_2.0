import React from "react";
import cl from "./Users.module.css";
import noPhoto from "../../../assets/images/noAvatar.jpeg";
import axios from "axios";
import {UsersPageType, UserType} from "../../../Redux/users_reducer";

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

export class Users extends React.Component<UserPropsType> {

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

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map((b, i) => <span key={i}
                                               className={this.props.currentPage === b ? `${cl.active} ${cl.button}` : cl.button}
                                               onClick={() => this.onClickHandler(b)}
                    >
                        {b} </span>)}
                </div>
                {this.props.usersPage.users.map((user: UserType) => <div key={user.id}>
                <span>
                    <div>
                        <img className={cl.photo} src={user.photos.small != null ? user.photos.small : noPhoto}
                             alt="Avatar"/>
                    </div>
                    <div>
                        <button
                            onClick={user.followed ? () => this.onClickHandlerUnfollow(user.id) : () => this.onClickHandlerFollow(user.id)}>
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/*<div>{user.location.city}</div>*/}
                        {/*<div>{user.location.country}</div>*/}
                    </span>
                </span>
                </div>)}
            </div>
        );
    };
}
