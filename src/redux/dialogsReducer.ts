import {v1} from "uuid";


const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}

const initialState: DialogsType = {
    messages: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Hello'},
    ],

    dialogs: [
        {id: v1(), name: 'User1'},
        {id: v1(), name: 'User2'}
    ]
}

export const dialogsReducer = (state = initialState, action: DialogActionType): DialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: { id: string; message: string; } = {
                id: v1(),
                message: action.message,
            };
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addMessageAC = (value: string) => {

    return {
        type: ADD_MESSAGE,
        message: value
    } as const
}

export type AddMessageActionCreatorType = ReturnType<typeof addMessageAC>

export type DialogActionType = AddMessageActionCreatorType
