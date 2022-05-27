import {ActionsType} from "./AllTypeProject";

const ADD_POST = 'ADD-POST';
const SET_STATE_PROFILE = 'SET_STATE_PROFILE';

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
    data: any
}

const initialState: InitialProfileStateType = {
    posts: [],
    data: {}
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
                ...state, data: {...action.data}
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
export const setStateProfile = (data: any): ActionsType => {
    return {
        type: SET_STATE_PROFILE,
        data: data
    }
}