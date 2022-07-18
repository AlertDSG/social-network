import {usersAPI} from "../api/api";
import {AppDispatch, AppThunk} from "./redux-store";

const STATUS_FOLLOWED = 'STATUS-FOLLOWED';
const NEW_STATE = 'NEW_STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';


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
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state: InitialStateType = initialState, action: UserActionType): InitialStateType => {
    switch (action.type) {
        case STATUS_FOLLOWED:
            return {
                ...state,
                items: state.items.map(u => u.id === action.userID ? {...u, followed: action.followed} : u)
            }
        case NEW_STATE :
            return {...state, items: action.newState}
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (uID: number, value: boolean) => {

    return {
        type: STATUS_FOLLOWED,
        userID: uID,
        followed: value
    } as const
}
export const setState = (newState: UserType[]) => {

    return {
        type: NEW_STATE,
        newState
    } as const
}
export const setCurrentPage = (currentPage: number) => {

    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    } as const
}
export const setTotalCount = (totalCount: number) => {

    return {
        type: SET_TOTAL_COUNT,
        totalCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {

    return {
        type: SET_IS_FETCHING,
        isFetching
    } as const
}

type StatusFollowedActionCreatorType = ReturnType<typeof follow>
type StateActionType = ReturnType<typeof setState>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalCountActionType = ReturnType<typeof setTotalCount>
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>

export type UserActionType =
    StateActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | StatusFollowedActionCreatorType
    | SetIsFetchingActionType

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setState(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}