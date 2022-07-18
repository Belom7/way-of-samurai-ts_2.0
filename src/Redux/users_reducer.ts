import {usersApi} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | undefined
    photos: { small: string, large: string }
    status: string | undefined
    followed: boolean
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isLoader: boolean
    isDisabled: number[]
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'
const SET_IS_LOADER = 'SET-IS-LOADER'
const SET_IS_DISABLED = 'SET_IS_DISABLED'

let initState: UsersPageType = {
    users: [],
    pageSize: 100, //размеры страницы
    totalUserCount: 0, //общее число пользователей
    currentPage: 1, // текущая страница
    isLoader: false,
    isDisabled: []
}

export const usersReducer = (state: UsersPageType = initState, action: UsersReducerActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUserCount: action.payload.totalUserCount
            }
        case SET_IS_LOADER:
            return {
                ...state, isLoader: action.payload.isLoader
            }
        case SET_IS_DISABLED:
            return {
                ...state,
                isDisabled: action.payload.isDisabled ?
                    [...state.isDisabled, action.payload.id]
                    : state.isDisabled.filter(id => id !== action.payload.id)

            }
        default :
            return state
    }
}

export type UsersReducerActionsType = followACType
    | unfollowACType
    | setUsersACType
    | setPageSizeACType
    | setTotalUserCountACType
    | setIsLoaderACType
    | setIsDisabledType


type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unFollow>
type setUsersACType = ReturnType<typeof setUsers>
type setPageSizeACType = ReturnType<typeof setCurrentPage>
type setTotalUserCountACType = ReturnType<typeof setTotalUserCount>
type setIsLoaderACType = ReturnType<typeof setIsLoader>
type setIsDisabledType = ReturnType<typeof setIsDisabled>

export const follow = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const unFollow = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUserCount
        }
    } as const
}
export const setIsLoader = (isLoader: boolean) => {
    return {
        type: SET_IS_LOADER,
        payload: {
            isLoader
        }
    } as const
}
export const setIsDisabled = (id: number, isDisabled: boolean) => {
    return {
        type: SET_IS_DISABLED,
        payload: {
            id,
            isDisabled
        }
    } as const
}


export const getUsersThunkCreator = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setIsLoader(true))
    dispatch(setCurrentPage(currentPage))
    usersApi.getUsers(currentPage)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(setIsLoader(false))
        })
}

export const followUserThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(setIsDisabled(userID, true))
    usersApi.followUser(userID)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID))
                    dispatch(setIsDisabled(userID, false))
                }
            }
        )
}
export const unFollowUserThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(setIsDisabled(userID, true))
    usersApi.unFollowUser(userID)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userID))
                    dispatch(setIsDisabled(userID, false))
                }
            }
        )
}
