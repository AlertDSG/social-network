import {getAuthUserData} from "../redux/authReducer";
import {AppThunk} from "../redux/redux-store";

;

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


export type UserAuthType = {
    id: number
    email: string
    login: string

}
export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initialisedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}


type initialisedSuccessAT = ReturnType<typeof initialisedSuccess>
export type AppReducerActionType = initialisedSuccessAT

export const initialisedApp = (): AppThunk => (dispatch) => {
debugger
    dispatch(initialisedSuccess())

}
