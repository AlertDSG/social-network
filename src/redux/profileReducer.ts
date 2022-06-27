import {ActionsType} from "./AllTypeProject";
import {AppDispatch} from "./redux-store";
import {profileAPI} from "../api/api";
import {log} from "util";

const ADD_POST = 'ADD-POST';
const SET_STATE_PROFILE = 'SET_STATE_PROFILE';
const SET_STATUS = 'SET_STATUS';

type ContactsType ={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotoType = {
    small: string
    large: string
}

export type ProfileGetAPIType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialProfileStateType = {
    posts: PostType[]
    data: ProfileGetAPIType | null
    status: string
}

const initialState: InitialProfileStateType = {
    posts: [],
    data: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): InitialProfileStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        case SET_STATE_PROFILE:
            return {
                ...state, data: action.data
            };
            case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = (value: string): ActionsType => {
    return {
        type: ADD_POST,
        newText: value
    }
}
export const setStateProfile = (data: ProfileGetAPIType): ActionsType => {
    return {
        type: SET_STATE_PROFILE,
        data
    }
}
export const setStatusProfile = (status: string): ActionsType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getProfile = (userId: number) => ( dispatch: AppDispatch ) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setStateProfile(response.data))
        })
        .catch(err => console.log(err))
}
export const getStatus = (userId: number) => ( dispatch: AppDispatch ) => {
    debugger
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatusProfile(res.data))
        })
        .catch(err => console.log(err))
}

export const updateStatus = (status: string) => ( dispatch: AppDispatch ) => {
    debugger
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setStatusProfile(status))
            }

        })
        .catch(err => console.log(err))
}