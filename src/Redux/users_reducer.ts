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
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT'

let initState: UsersPageType = {
    users: [],
    pageSize: 100, //размеры страницы
    totalUserCount: 0, //общее число пользователей
    currentPage: 1, // текущая страница

}

export const usersReducer = (state: UsersPageType = initState, action: generalType): UsersPageType => {
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
        default :
            return state
    }
}

type generalType = followACType
    | unfollowACType
    | setUsersACType
    | setPageSizeACType
    | setTotalUserCountType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setPageSizeACType = ReturnType<typeof setCurrentPageAC>
type setTotalUserCountType = ReturnType<typeof setTotalUserCountAC>

export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID
        }
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID
        }
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUserCountAC = (totalUserCount:number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        payload: {
            totalUserCount
        }
    } as const
}
