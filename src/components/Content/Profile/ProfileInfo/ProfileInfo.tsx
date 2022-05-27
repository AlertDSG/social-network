import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../../assets/images/avatar.png';

type ProfileInfoType = {
    data: any
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
                <img src={avatar} alt={'avatar'}/>
                <span>{props.data.aboutMe}</span>
                <span>{props.data.fullName}</span>
                <span>{props.data.lookingForAJobDescription}</span>
            </div>
        </div>

    )
}
