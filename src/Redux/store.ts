import {profileReducer} from "./profile_reducer";
import {dialogsReducer} from "./dialogs_reducer";

export type profilePageType = {
    newMessage: string
    posts: { name: string, message: string, likeCount: number }[]
}
export type dialogsPageType = {
    dialogsName: { id: number, name: string }[]
    messages: { message: string }[]
    newMessageText: string
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void

}

export type AddPostType = {
    type: 'ADD-POST'
    newMessage: string
}
export type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    value: string
}
export type AddMessageType = {
    type: 'ADD-MESSAGE',
    newMessage: string
}
export type ChangeNewMessageTextType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    value: string
}
export type ActionType = AddPostType
    | ChangeNewPostTextType
    | AddMessageType
    | ChangeNewMessageTextType




export let store: any = {
    _state: {
        profilePage: {
            newMessage: '',
            posts: [
                {name: 'Maks', message: 'Hi people!', likeCount: 200},
                {name: 'Denis', message: 'x', likeCount: 20},
                {name: 'Mark', message: 'wow!', likeCount: 10},
                {name: 'Alex', message: 'perfecto!', likeCount: 50},
                {name: 'Gera', message: 'rrrr!', likeCount: 50},
            ]
        },
        dialogsPage: {
            dialogsName: [
                {id: 1, name: 'Maks'},
                {id: 2, name: 'Alex'},
                {id: 3, name: 'Mikki'},
                {id: 4, name: 'Jax'},
                {id: 5, name: 'Xioru'},
            ],
            messages: [
                {message: 'Здарова мужик!'},
                {message: 'Как дела?'},
                {message: 'Хо-хо-хо!'},
                {message: 'Ничего страшного!'},
                {message: '.........'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('render')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}


