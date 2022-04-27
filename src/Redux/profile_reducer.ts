import {ActionType, AddPostType, ChangeNewPostTextType, profilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const profileReducer = (state: profilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {name: 'NEW', message: action.newMessage, likeCount: 10}
            state.posts.push(newPost)
            state.newMessage = ''
            return state
        case CHANGE_NEW_POST_TEXT :
            state.newMessage = action.value
            return state
        default:
            return state
    }
}

export const AddPostAC = (newMessage: string): AddPostType => ({type: ADD_POST, newMessage})
export const UpdateNewPostTextAC = (value: string): ChangeNewPostTextType => ({type: CHANGE_NEW_POST_TEXT, value})