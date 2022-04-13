let rerender = () => {}

export const addPost = () => {
    let newPost = {name: 'NEW', message: state.profilePage.newMessage, likeCount: 10}
    state.profilePage.posts.push(newPost)
    state.profilePage.newMessage = ''
    rerender()
}
export const changeNewMessage = (value: string) => {
    state.profilePage.newMessage = value
    rerender()
}

export const subscribe = (observer: () => void) => {
    rerender = observer
}

export const state = {
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
}
