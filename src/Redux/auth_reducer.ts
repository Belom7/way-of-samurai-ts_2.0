import {AnyAction, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AuthApi} from "../api/api";
import {StateType} from "./redux-store";
import {stopSubmit} from "redux-form";


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
    AuthApi.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
}


export const login = (email: any, password: any, rememberMe: boolean) => (dispatch: ThunkDispatch<StateType, undefined, AnyAction>) => {
    AuthApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMeThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch<any>) => {
    AuthApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                const data = {id: null, email: null, login: null, isAuth: false}
                dispatch(setUserData(data))
            }
        })
}