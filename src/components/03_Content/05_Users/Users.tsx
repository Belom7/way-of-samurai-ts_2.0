import React from 'react';
import {UsersPageType} from "../../../Redux/users_reducer";
import cl from './Users.module.css'

type UserPropsType = {
    usersPage: UsersPageType,
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    setUsers:(users:UsersPageType) => void
}

export const Users = (props: UserPropsType) => {

    const onClickHandlerFollow = (userID: number) => {
        props.onClickHandlerFollow(userID)
    }
    const onClickHandlerUnfollow = (userID: number) => {
        props.onClickHandlerUnfollow(userID)
    }

    return (
        <div>
            {props.usersPage.users.map(user => <div>
                <span>
                    <div>
                        <img className={cl.photo} src={user.photo} alt="Avatar" />
                    </div>
                    <div>
                        <button
                            onClick={user.followed ? () => onClickHandlerUnfollow(user.id) : () => onClickHandlerFollow(user.id)}>
                            {user.followed ? 'Unfollow': 'Follow' }
                        </button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
