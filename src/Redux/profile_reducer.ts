import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";

type contactsType = {
    facebook: string | undefined
    website: string | undefined
    vk: string | undefined
    twitter: string | undefined
    instagram: string | undefined
    youtube: string | undefined
    github: string | undefined
    mainLink: string | undefined
}
type photosType = {
    small: string | undefined
    large: string | undefined
}
export type profileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | undefined
    fullName: string
    userId: number
    photos: photosType
}
export type profilePageType = {
    newMessage: string
    posts: { name: string, message: string, likeCount: number }[]
    profile: profileType | null
    status: string
}
export type AddPostType = {
    type: 'ADD-POST'
    newMessage: string
}
export type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    value: string
}

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState: profilePageType = {
    newMessage: '',
    posts: [
        {name: 'Maks', message: 'Hi people!', likeCount: 200},
        {name: 'Denis', message: 'x', likeCount: 20},
        {name: 'Mark', message: 'wow!', likeCount: 10},
        {name: 'Alex', message: 'perfecto!', likeCount: 50},
        {name: 'Gera', message: 'rrrr!', likeCount: 50},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: profilePageType = initialState, action: generalType) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {name: 'NEW', message: action.newMessage, likeCount: 10}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newMessage: ''
            }
        case CHANGE_NEW_POST_TEXT :
            return {
                ...state,
                newMessage: action.value
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.payload.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.payload.status
            }
        default:
            return state
    }
}

type generalType = AddPostACType
    | UpdateNewPostTextACType
    | setUserProfile
    | setStatusType

type AddPostACType = ReturnType<typeof addPost>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostText>
type setUserProfile = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatus>

export const addPost = (newMessage: string): AddPostType => {
    return {
        type: ADD_POST,
        newMessage
    } as const
}
export const updateNewPostText = (value: string): ChangeNewPostTextType => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        value
    } as const
}
export const setUserProfile = (profile: profileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status
        }
    } as const
}

export const isProfileThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    usersApi.getProfile(userID)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getStatus = (userID: number) => (dispatch: Dispatch) => {
    profileApi.getStatus(userID)
        .then(res => {
            dispatch(setStatus(res.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(res.data))
            }
        })
}