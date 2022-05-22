import {ActionType, AddMessageType, ChangeNewMessageTextType, dialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

let initialState = {
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

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {message: action.newMessage}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case
        CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.value
            }
        default :
            return state
    }
}

export const AddMessageAC = (newMessage: string): AddMessageType => ({type: ADD_MESSAGE, newMessage})
export const UpdateNewMessageTextAC = (value: string): ChangeNewMessageTextType => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    value
})
