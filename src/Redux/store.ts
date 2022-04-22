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
    getState: () => StateType
    _callSubscriber: () => void
    addPost: () => void
    changeNewMessage: (value: string) => void
    subscribe: (observer: () => void) => void
}

export let store = {
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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('render')
    },
    addPost() {
        let newPost = {name: 'NEW', message: this.getState().profilePage.newMessage, likeCount: 10}
        this.getState().profilePage.posts.push(newPost)
        this.getState().profilePage.newMessage = ''
        this._callSubscriber()
    },
    changeNewMessage(value: string) {
        this.getState().profilePage.newMessage = value
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    }
}


