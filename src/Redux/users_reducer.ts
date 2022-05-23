type UserType = {
    id: number
    photo: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersPageType = {
    users: UserType[]
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initState: UsersPageType = {
    users: [
        {
            id: 1,
            photo: 'https://android-obzor.com/wp-content/uploads/2022/02/1-2-300x300.jpg',
            followed: false,
            fullName: 'Maks',
            status: 'I am junior',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 2,
            photo: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
            followed: true,
            fullName: 'Igor',
            status: 'Prepod',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photo: 'https://cspromogame.ru//storage/upload_images/avatars/833.jpg',
            followed: false,
            fullName: 'Egor',
            status: 'I am middle',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 4,
            photo: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: false,
            fullName: 'Sasha',
            status: 'I am tehnar',
            location: {city: 'Ulan-u-de', country: 'Kazahstan'}
        },
    ]
}

export const usersReducer = (state: UsersPageType = initState, action: generalType) => {
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
                users: [state.users, action.payload.users]
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
export const setUsersAC = (users: UsersPageType) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}
