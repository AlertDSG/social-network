import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    postData: Array<PostDataType>
}
type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.contentBody}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}