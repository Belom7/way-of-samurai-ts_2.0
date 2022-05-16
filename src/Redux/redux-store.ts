import {combineReducers, createStore} from "redux";
import {StoreType} from "./store";
import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export let store:StoreType = createStore(reducers)