import {connect} from "react-redux";
import {StateType} from "../../../Redux/redux-store";
import { getUsersThunkCreator, followUserThunkCreator, unFollowUserThunkCreator, UsersPageType} from "../../../Redux/users_reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/Preloader";

type UserPropsType = {
    getUsersThunkCreator:(currentPage:number)=>void
    followUserThunkCreator:(userID:number)=>void
    unFollowUserThunkCreator:(userID:number)=>void
    isDisabled: number[]
    usersPage: UsersPageType
}

export class UsersAPI extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage)
    }

    onClickHandler = (b: number) => {

        this.props.getUsersThunkCreator(b)

        // this.props.setIsLoader(true)
        // this.props.setCurrentPage(b) //!!!!!
        // usersApi.getUsers(b).then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setIsLoader(false)
        //     }
        // )
    }

    onClickHandlerFollow = (userID: number) => {
        this.props.followUserThunkCreator(userID)
    }
    onClickHandlerUnfollow = (userID: number) => {
        this.props.unFollowUserThunkCreator(userID)
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
                       isDisabled={this.props.isDisabled}
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
        isDisabled: state.usersPage.isDisabled,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    getUsersThunkCreator, followUserThunkCreator, unFollowUserThunkCreator,
})(UsersAPI)
