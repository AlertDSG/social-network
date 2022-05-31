import {ActionsType} from "./AllTypeProject";

const SET_USER_DATA = 'SET_USER_DATA';

export type UserAuthType = {
    id: number
    email: string
    login: string

}
export type InitialStateType = {
    data: UserAuthType | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    data: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setUserData = (data: UserAuthType): ActionsType => {

    return {
        type: SET_USER_DATA,
        data
    }
}
