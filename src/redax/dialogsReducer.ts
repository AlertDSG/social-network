import {v1} from "uuid";
import {ActionsType, DialogsType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';

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

export const dialogsReducer = (state = initialState , action: ActionsType): DialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: { id: string; message: string;} = {
                id: v1(),
                message: action.message,
            };
            state.messages.push(newMessage);
            return state
        default:
            return state
    }
}

export const addMessageAC = (value: string): ActionsType  => {

    return {
        type: ADD_MESSAGE,
        message: value
    }
}