import {v1} from "uuid";
import {ActionsType, DialogsType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogsReducer = (state: DialogsType, action: ActionsType): DialogsType => {
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