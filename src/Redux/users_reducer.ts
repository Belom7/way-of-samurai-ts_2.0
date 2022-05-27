export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | undefined
    photos: { small: string , large: string}
    status: string | undefined
    followed: boolean
}
export type UsersPageType = {
    users: UserType[]
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initState: UsersPageType = {
    users: []

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
                users: [...state.users, ...action.payload.users]
            }
        default :
            return state
    }
}

type generalType = followACType
    | unfollowACType
    | setUsersACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>

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
