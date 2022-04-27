import {ActionType, AddMessageType, ChangeNewMessageTextType, dialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: dialogsPageType, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {message: action.newMessage}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.value
            return state
        default :
            return state
    }
}

export const AddMessageAC = (newMessage: string):AddMessageType => ({type: ADD_MESSAGE, newMessage})
export const UpdateNewMessageTextAC = (value: string):ChangeNewMessageTextType => ({type: CHANGE_NEW_MESSAGE_TEXT, value})
