import {authAPI, MyFormValues} from "../api/api";
import {AppThunk} from "./redux-store";
import {initialisedApp} from "../app/app-reducer";


const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT-USER';

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
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case LOGOUT:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export const setUserData = (data: UserAuthType, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data,
        isAuth
    } as const
}
export const logoutUser = (data: InitialStateType) => {
    return {
        type: LOGOUT,
        data,
    } as const
}
type LogoutUserAT = ReturnType<typeof logoutUser>

type SetUserDataAT = ReturnType<typeof setUserData>
export type AuthActionType = SetUserDataAT | LogoutUserAT

export const getAuthUserData = (): AppThunk => (dispatch) => {

   return authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data, true))

            }
            dispatch(initialisedApp())
        })
}

export const loginTC = (data: MyFormValues): AppThunk => (dispatch) => {

    authAPI.login(data)
        .then(res => {

            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logoutTC = (): AppThunk => (dispatch) => {

    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logoutUser({
                    id: null,
                    email: null,
                    login: null,
                    isAuth: false,
                }))
            }
        })
}
