import React from 'react';
import cl from "./Users.module.css";
import {UserType} from "../../../Redux/users_reducer";
import noPhoto from "../../../assets/images/noAvatar.jpeg";
import {NavLink} from "react-router-dom";

type propsType = {
    onClickHandler: (b: number) => void
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    isDisabled: number[]

}

export const Users = ({
                          onClickHandler,
                          onClickHandlerFollow,
                          onClickHandlerUnfollow,
                          users,
                          currentPage,
                          totalUserCount,
                          pageSize,
                          isDisabled
                      }: propsType) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((b, i) => <span key={i}
                                           className={currentPage === b ? `${cl.active} ${cl.button}` : cl.button}
                                           onClick={() => onClickHandler(b)}
                >
                        {b} </span>)}
            </div>
            {users.map((user: UserType) => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                        <img className={cl.photo} src={user.photos.small != null ? user.photos.small : noPhoto}
                             alt="Avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={ isDisabled.some(id=>id=== user.id) }
                                onClick={user.followed ? () => {
                                    debugger
                                    onClickHandlerUnfollow(user.id)
                                } : () => onClickHandlerFollow(user.id)}>
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
