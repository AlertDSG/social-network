import {ActionsType} from "./AllTypeProject";
const STATUS_FOLLOWED = 'STATUS-FOLLOWED';
const NEW_STATE = 'NEW_STATE';

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
}
export type InitialStateType = {
    items: Array<UserType>
}

const initialState: InitialStateType = {
    items: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case STATUS_FOLLOWED:

            return {
                ...state,
                items: state.items.map(u => u.id === action.userID? {...u, followed: action.followed} : u)
            }
        case NEW_STATE :
            return {items: action.newState}
        default:
            return state
    }
}

export const followAC = (uID: number, value: boolean): ActionsType => {

    return {
        type: STATUS_FOLLOWED,
        userID: uID,
        followed: value
    }
}
export const stateAC = (newState: UserType[]): ActionsType => {

    return {
        type: NEW_STATE,
        newState: newState,

    }
}