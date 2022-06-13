type authType = {
    id: number | null,
    email: string | null,
    login: string | null
}

let initialState: authType = {
    id: null,
    email: null,
    login: null
}

const SET_USER_DATA = 'SET_USER_DATA '

export const authReducer = (state: authType = initialState, action: generalType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload.data
            }
        default:
            return state
    }
}


type generalType = setUser

type setUser = ReturnType<typeof setUserData>


export const setUserData = (data:authType) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data
        }
    } as const
}