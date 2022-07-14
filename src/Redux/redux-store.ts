import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionsType} from "./profile_reducer";
import {dialogsReducer, DialogsReducerActionsType} from "./dialogs_reducer";
import {usersReducer, UsersReducerActionsType} from "./users_reducer";
import {authReducer, AuthReducerActionsType} from "./auth_reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, AppReducerActionsType} from "./app_reducer";
import {useDispatch} from "react-redux";


export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    } as const
)

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export type Actions =
    ProfileReducerActionsType
    | DialogsReducerActionsType
    | UsersReducerActionsType
    | AuthReducerActionsType
    | AppReducerActionsType
export type AppRootStateType = ReturnType<typeof reducers>
export type AppActionType = Actions
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();