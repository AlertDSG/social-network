import {v1} from "uuid";
import {ActionsType, PostsType} from "./AllTypeProject";

const ADD_POST = 'ADD-POST';

const initialState: PostsType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 10},
        {id: v1(), message: 'Hi my friend', likesCount: 8},
    ],
}

export const profileReducer = (state = initialState, action: ActionsType): PostsType => {

    switch (action.type){
        case ADD_POST:
            let newPost: { id: string; message: string; likesCount: number; } = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        default:
            return state
    }
}

export const addPostAC = (value: string): ActionsType  => {

    return {
        type: ADD_POST,
        newText: value
    }
}