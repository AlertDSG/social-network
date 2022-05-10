import React from 'react';
import s from "./Post.module.css"

type PostTypeProps = {
    text: string
    likesCount: number
}
export const Post = (props: PostTypeProps) => {
    return (
        <div className={s.post}>
            {props.text}
            <div>likes: {props.likesCount}</div>
        </div>
    )
}