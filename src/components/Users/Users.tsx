import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import avatar from '../../assets/images/avatar.png'

type UsersPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    changeFollowedStatus: (uID: number, value: boolean) => void
    onClickPageHandler: (page: number)=> void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

   const onClickHandler = (uID: number, value: boolean) => {
        props.changeFollowedStatus(uID, value)
    }

    return (
        <div className={s.bodyPage}>
            <div>
                {pages.map((p, i) => {
                    return (
                        <span key={i}
                              className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={() => props.onClickPageHandler(p)}>
                                {p}
                            </span>
                    )
                })
                }

            </div>
            {
                props.items.map(u => {

                    return (
                        <div key={u.id} className={s.bodyUser}>
                            <div>
                                <img className={s.image} src={u.photos.small === null? avatar: u.photos.small} alt="ava"/>
                                <div>
                                    <button
                                        onClick={() => onClickHandler(u.id, !u.followed)}>{u.followed ? `followed` : `unfollowed`}</button>
                                </div>
                            </div>
                            <div className={s.userInfo}>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{'u.location.city'}</div>
                                    <div>{'u.location.country'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

        </div>
    )
};

