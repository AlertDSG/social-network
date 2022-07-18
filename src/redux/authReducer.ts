import {authAPI, MyFormValues} from "../api/api";
import {AppThunk} from "./redux-store";

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

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
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

export const setUserData = (data: UserAuthType) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}
type SetUserDataAT = ReturnType<typeof setUserData>
export type AuthActionType = SetUserDataAT

export const loginTC = (data: MyFormValues): AppThunk => (dispatch) => {

    authAPI.auth(data)
        .then()
}
