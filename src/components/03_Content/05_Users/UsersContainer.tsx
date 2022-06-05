import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../../Redux/users_reducer";

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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
