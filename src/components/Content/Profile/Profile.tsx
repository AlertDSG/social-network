import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileGetAPIType} from "../../../redux/profileReducer";


type ProfileType = {
    data: ProfileGetAPIType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.contentBody}>
            <ProfileInfo data={props.data} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}