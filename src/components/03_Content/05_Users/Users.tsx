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
}

export class Users extends React.Component<UserPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
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
