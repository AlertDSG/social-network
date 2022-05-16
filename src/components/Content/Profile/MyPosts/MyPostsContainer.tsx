
import React from "react";
import {addPostAC} from "../../../../redax/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: any
}
// type PostDataType = {
//     id: string
//     message: string
//     likesCount: number
// }

export const MyPostsContainer = (props: MyPostsPropsType) => {

    const onClickHandler = (value: string): void => {
            let action = addPostAC(value)
            props.store.dispatch(action)
    }

return (<MyPosts postData={props.store.getState().profilePage.posts} addPost={onClickHandler}/>)
}