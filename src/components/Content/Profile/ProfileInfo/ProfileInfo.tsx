import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileGetAPIType} from "../ProfileContainer";
import avatar from '../../../../assets/images/avatar.png';

type ProfileInfoType = {
    data: ProfileGetAPIType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div className={s.poster}>
                <img
                    src="https://us-rd.gr-cdn.com/964x/https://us-wd.gr-cdn.com/blog/sites/5/2021/07/0934/cropped-matt-palmer-tmetg2ky59m-unsplash-1928x1085.jpg"
                    alt="img"/>
            </div>
            <div className={s.ava}>
                <img src={props.data.photos.large !== null ? props.data.photos.large : avatar} alt={'avatar'}/>
            </div>
        </div>

    )
}