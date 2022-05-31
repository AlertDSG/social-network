import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import {ProfileGetAPIType} from "../../../redux/profileReducer";


type ProfileType = {
    data: ProfileGetAPIType | null
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.contentBody}>
            <ProfileInfo data={props.data}/>
            <MyPostsContainer/>
        </div>
    )
}