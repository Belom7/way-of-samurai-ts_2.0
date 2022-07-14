import {authMeThunkCreator} from "./auth_reducer";
import {TypedDispatch} from "./redux-store";


export type appType = {
    initialized: boolean
}

let initialState: appType = {
    initialized: false,
}

const SET_INITIALIZED = 'SET_INITIALIZED'


export const appReducer = (state: appType = initialState, action: AppReducerActionsType): appType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export type AppReducerActionsType = setUserDataType

type setUserDataType = ReturnType<typeof setInitialized>


export const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    } as const
}

export const setInitializedApp = () => (dispatch: TypedDispatch) => {
 dispatch(authMeThunkCreator()).then(() => {
        dispatch(setInitialized())
    })
}
