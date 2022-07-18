import {authAPI, MyFormValues} from "../api/api";
import {AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type UserAuthType = {
    id: number
    email: string
    login: string

}
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    id:  null,
    email:  null,
    login:  null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
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

export const getAuthUserData = (): AppThunk => (dispatch) => {

    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data))
            }
        })
}

export const loginTC = (data: MyFormValues): AppThunk => (dispatch) => {

    authAPI.login(data)
        .then(res => {
            console.log(res.data)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
