import React from 'react';
import {UsersPageType, UserType} from "../../../Redux/users_reducer";
import cl from './Users.module.css'
import axios from 'axios'
import noPhoto from '../../../assets/images/noAvatar.jpeg'

type UserPropsType = {
    usersPage: UsersPageType,
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    setUsers:(users:UserType[]) => void
}

export const Users = (props: UserPropsType) => {

    const onClickHandlerFollow = (userID: number) => {
        props.onClickHandlerFollow(userID)
    }
    const onClickHandlerUnfollow = (userID: number) => {
        props.onClickHandlerUnfollow(userID)
    }

    const addUsers = () => {
        if(props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))
        }
    }


    return (
        <div>
            <button onClick={addUsers}>Add Users</button>
            {props.usersPage.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={cl.photo} src={user.photos.small != null? user.photos.small : noPhoto} alt="Avatar" />
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
