import React, {ChangeEvent, useState} from "react";
import s from "../Profile.module.css";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: (value : string) => void
}
type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value) {
            setValue(e.currentTarget.value)
        }
    }

    const onClickHandler = () => {
        if(value.trim() !== '') {
            props.addPost(value)
            setValue('')
        }
    }


    const postItems = props.postData.map(el => <Post key={el.id} text={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.content}>
            <textarea value={value} onChange={onChangeHandler}>Message</textarea>
            <div className={s.button}>
                <button onClick={onClickHandler}>Add</button>
            </div>

                {postItems}

        </div>
    )
}