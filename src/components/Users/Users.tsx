import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import s from "./Users.module.css"


type UsersUIPropsType = {
    users: UsersType[]
    changeFollowedStatus: (uID: string, value: boolean) => void

}

export const Users = (props: UsersUIPropsType) => {
    const onClickHandler = (uID: string, value: boolean) => {
      props.changeFollowedStatus(uID, value)
    }

    return (
        <div className={s.bodyPage}>
            {props.users.map(u => {

                return (
                    <div key={u.id} className={s.bodyUser}>
                        <div>
                            <img src="/" alt="ava"/>
                            <div>
                                <button onClick={()=>onClickHandler(u.id, !u.followed)}>{u.followed ? `followed` : `unfollowed`}</button>
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};
