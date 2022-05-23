import {ActionsType} from "./AllTypeProject";
import {ProfileGetAPIType} from "../components/Content/Profile/ProfileContainer";

const ADD_POST = 'ADD-POST';
const SET_STATE_PROFILE = 'SET_STATE_PROFILE';


type PostType = {
    id: number
    message: string
    likesCount: number
}
type InitialProfileStateType = {
    posts: PostType[]
    data: ProfileGetAPIType | null
}

const initialState: InitialProfileStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Hi my friend', likesCount: 8},
    ],
    data: null
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
        case "SET_STATE_PROFILE":
            return {
            ...state, data: action.data
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
        data: data
    }
}