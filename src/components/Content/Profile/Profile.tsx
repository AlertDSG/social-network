import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import {ProfileGetAPIType} from "./ProfileContainer";

type ProfileType = {
    data: ProfileGetAPIType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.contentBody}>
            <ProfileInfo data={props.data}/>
            <MyPostsContainer/>
        </div>
    )
}