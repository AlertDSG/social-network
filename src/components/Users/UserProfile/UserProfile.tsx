import React from "react";
import s from "../../Content/Profile/Profile.module.css";

import {ProfileGetAPIType} from "../../../redux/profileReducer";
import avatar from "../../../assets/images/avatar.png";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../../Content/Profile/ProfileInfo/ProfileStatus";


type ProfileType = {
    data: ProfileGetAPIType | null
    status: string
    updateStatus: (status: string) => void
}

export const UserProfile = (props: ProfileType) => {

    if (!props.data) {
        return <Preloader/>
    }

    return (
        <div className={s.contentBody}>
            <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
            <img src={props.data.photos.large !== null ? props.data.photos.large : avatar} alt={'avatar'}/>
            <span>{props.data.aboutMe}</span>
            <span>{props.data.fullName}</span>
            <span>{props.data.lookingForAJobDescription}</span>
        </div>
    )
}