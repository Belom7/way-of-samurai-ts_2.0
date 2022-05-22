import {ActionType, AddPostType, ChangeNewPostTextType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    newMessage: '',
    posts: [
        {name: 'Maks', message: 'Hi people!', likeCount: 200},
        {name: 'Denis', message: 'x', likeCount: 20},
        {name: 'Mark', message: 'wow!', likeCount: 10},
        {name: 'Alex', message: 'perfecto!', likeCount: 50},
        {name: 'Gera', message: 'rrrr!', likeCount: 50},
    ]
}

export const profileReducer = (state: profilePageType = initialState, action: ActionType) => {
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

export const AddPostAC = (newMessage: string): AddPostType => ({type: ADD_POST, newMessage})
export const UpdateNewPostTextAC = (value: string): ChangeNewPostTextType => ({type: CHANGE_NEW_POST_TEXT, value})