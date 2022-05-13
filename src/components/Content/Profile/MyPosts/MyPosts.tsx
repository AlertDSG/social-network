import React from "react";
import s from "../Profile.module.css";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    postData: Array<PostDataType>
}
type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props:MyPostsPropsType) => {

    const postItems = props.postData.map(el => <Post key={el.id} text={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.content}>
            <textarea>Message</textarea>
            <div className={s.button}><button>Add</button></div>

            {postItems}

        </div>
    )
}