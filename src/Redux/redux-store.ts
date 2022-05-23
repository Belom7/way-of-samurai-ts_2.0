import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";


export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
    } as const
)

export let store = createStore(reducers)
