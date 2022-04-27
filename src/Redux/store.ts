const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

export type profilePageType = {
    newMessage: string
    posts: { name: string, message: string, likeCount: number }[]
}
export type dialogsPageType = {
    dialogsName: { id: number, name: string }[]
    messages: { message: string }[]
    newMessageText: string
}

type StateType = {
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

type AddPostType = {
    type: 'ADD-POST'
    newMessage: string
}
type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    value: string
}
type AddMessageType = {
    type: 'ADD-MESSAGE',
    newMessage: string
}
type ChangeNewMessageTextType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    value: string
}
export type ActionType = AddPostType
    | ChangeNewPostTextType
    | AddMessageType
    | ChangeNewMessageTextType

export const AddPostAC = (newMessage: string): AddPostType => ({type: ADD_POST, newMessage})
export const UpdateNewPostTextAC = (value: string): ChangeNewPostTextType => ({type: CHANGE_NEW_POST_TEXT, value})
export const AddMessageAC = (newMessage: string):AddMessageType => ({type: ADD_MESSAGE, newMessage})
export const UpdateNewMessageTextAC = (value: string):ChangeNewMessageTextType => ({type: CHANGE_NEW_MESSAGE_TEXT, value})


export let store: StoreType = {
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
        if (action.type === 'ADD-POST') {
            let newPost = {name: 'NEW', message: action.newMessage, likeCount: 10}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newMessage = ''
            this._callSubscriber()
        }
        if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.newMessage = action.value
            this._callSubscriber()
        }
        if (action.type === 'ADD-MESSAGE') {
            const newMessage = {message: action.newMessage}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        }
        if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.value
            this._callSubscriber()
        }
    }
}


