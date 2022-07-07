export type dialogsPageType = {
    dialogsName: { id: number, name: string }[]
    messages: { message: string }[]
}
export type AddMessageType = {
    type: 'ADD-MESSAGE',
    newMessage: string
}

const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState: dialogsPageType = {
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

export const dialogsReducer = (state: dialogsPageType = initialState, action: generalType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {message: action.newMessage}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default :
            return state
    }
}
type generalType = AddMessageACType

type AddMessageACType = ReturnType<typeof AddMessageAC>

export const AddMessageAC = (newMessage: string): AddMessageType => {
    return {
        type: ADD_MESSAGE,
        newMessage
    } as const
}

