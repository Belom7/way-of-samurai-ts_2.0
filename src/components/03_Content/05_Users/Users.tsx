import React from 'react';
import cl from "./Users.module.css";
import {UsersPageType, UserType} from "../../../Redux/users_reducer";
import noPhoto from "../../../assets/images/noAvatar.jpeg";

type propsType = {
    onClickHandler: (b: number) => void
    onClickHandlerFollow: (userID: number) => void
    onClickHandlerUnfollow: (userID: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    usersPage: UsersPageType

}

export const Users = ({
                          onClickHandler,
                          onClickHandlerFollow,
                          onClickHandlerUnfollow,
                          usersPage,
                          currentPage,
                          totalUserCount,
                          pageSize,
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
            {usersPage.users.map((user: UserType) => <div key={user.id}>
                <span>
                    <div>
                        <img className={cl.photo} src={user.photos.small != null ? user.photos.small : noPhoto}
                             alt="Avatar"/>
                    </div>
                    <div>
                        <button
                            onClick={user.followed ? () => onClickHandlerUnfollow(user.id) : () => onClickHandlerFollow(user.id)}>
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
