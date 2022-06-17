import {Dispatch} from "redux";
import {usersApi} from "../api/api";

export type authType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean
}

let initialState: authType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET_USER_DATA '

export const authReducer = (state: authType = initialState, action: generalType): authType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        default:
            return state
    }
}


type generalType = setUserDataType

type setUserDataType = ReturnType<typeof setUserData>


export const setUserData = (data: authType) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data
        }
    } as const
}

export const authMeThunkCreator = () => (dispatch: Dispatch) => {
    usersApi.authMe()
        .then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
}