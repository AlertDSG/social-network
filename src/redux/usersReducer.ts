import {v1} from "uuid";
import {ActionsType} from "./AllTypeProject";

const STATUS_FOLLOWED = 'STATUS-FOLLOWED';

export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersPropsType = {
    users: Array<UsersType>
}

const initialState = {
    users : [
        {id: v1(), followed: true, fullName: 'Dmitriy', status: 'I am a student', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: true, fullName: 'Svetlana', status: 'I am a mother', location: {city: 'Minsk', country: 'Belarus'}},
        {id: v1(), followed: false, fullName: 'Petya', status: 'I am a driver', location: {city: 'Moscow', country: 'Russia'}},
        {id: v1(), followed: false, fullName: 'Vladimir', status: 'I am a strong', location: {city: 'Kiev', country: 'Ukraine'}},
    ],
}

export const usersReducer = (state: UsersPropsType = initialState , action: ActionsType): UsersPropsType => {
    switch (action.type) {
        case STATUS_FOLLOWED:

            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: action.followed} : u)}
        default:
            return state
    }
}

export const followAC = (uID: string, value: boolean): ActionsType  => {

    return {
        type: STATUS_FOLLOWED,
        userID: uID,
        followed: value
    }
}