export type profilePageType = {
    newMessage: string
    posts: { name: string, message: string, likeCount: number }[]
}
export type AddPostType = {
    type: 'ADD-POST'
    newMessage: string
}
export type ChangeNewPostTextType = {
    type: 'CHANGE-NEW-POST-TEXT'
    value: string
}

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState: profilePageType = {
    newMessage: '',
    posts: [
        {name: 'Maks', message: 'Hi people!', likeCount: 200},
        {name: 'Denis', message: 'x', likeCount: 20},
        {name: 'Mark', message: 'wow!', likeCount: 10},
        {name: 'Alex', message: 'perfecto!', likeCount: 50},
        {name: 'Gera', message: 'rrrr!', likeCount: 50},
    ]
}

export const profileReducer = (state: profilePageType = initialState, action: generalType) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {name: 'NEW', message: action.newMessage, likeCount: 10}
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newMessage: ''
            }
        case CHANGE_NEW_POST_TEXT :
            return {
                ...state,
                newMessage: action.value
            }
        default:
            return state
    }
}

type generalType = AddPostACType
|UpdateNewPostTextACType

type AddPostACType = ReturnType<typeof AddPostAC>
type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>

export const AddPostAC = (newMessage: string): AddPostType => {
    return {
        type: ADD_POST,
        newMessage
    } as const
}
export const UpdateNewPostTextAC = (value: string): ChangeNewPostTextType => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        value
    } as const
}