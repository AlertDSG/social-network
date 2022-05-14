import {v1} from "uuid";
import {ActionsType, PostsType} from "./state";

const ADD_POST = 'ADD-POST';
export const profileReducer = (state: PostsType, action: ActionsType): PostsType => {

    switch (action.type){
        case ADD_POST:
            let newPost: { id: string; message: string; likesCount: number; } = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
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