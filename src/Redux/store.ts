type StateType = {
    profilePage: {
        newMessage: string,
        posts: { name: string, message: string, likeCount: number }[]
    }
    dialogsPage: {
        dialogsName: { id: number, name: string }[],
        messages: { message: string }[]
    }
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch:(action:ActionType)=>void

}

type AddPostType = {
    type: 'ADD-POST'
    newMessage:string
}
type ChangeNewMessageType = {
    type: 'CHANGE-NEW-MESSAGE'
    value:string
}
export type ActionType = AddPostType | ChangeNewMessageType

export let store:StoreType = {
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
            ]
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

    dispatch(action: ActionType){
        if(action.type === 'ADD-POST'){
            let newPost = {name: 'NEW', message: action.newMessage, likeCount: 10}
            debugger
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newMessage = ''
            this._callSubscriber()
        }
        else if(action.type === 'CHANGE-NEW-MESSAGE'){
            debugger
            this._state.profilePage.newMessage = action.value
            this._callSubscriber()
        }
    }
}


