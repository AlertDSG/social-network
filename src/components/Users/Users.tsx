import React, {useState} from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import avatar from '../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    changeFollowedStatus: (uID: number, value: boolean) => void
    onClickPageHandler: (page: number) => void
}


export const Users = (props: UsersPropsType) => {

    const [disabled, setDisabled] = useState<number | null>(null)

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickHandlerFollow = (uID: number) => {
        setDisabled(uID)
        usersAPI.follow(uID)
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.changeFollowedStatus(uID, true)
                }
                setDisabled(null)
            })

    }

    const onClickHandlerUnFollow = (uID: number) => {
        setDisabled(uID)

        usersAPI.unfollow(uID)
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.changeFollowedStatus(uID, false)
                }
                setDisabled(null)
            })

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
                                <NavLink to={"/profile/" + u.id}>
                                    <img className={s.image} src={u.photos.small === null ? avatar : u.photos.small}
                                         alt="ava"/>
                                </NavLink>
                                <div>
                                    {
                                        u.followed
                                            ?
                                            <button
                                                disabled={disabled === u.id && true}
                                                onClick={() => onClickHandlerUnFollow(u.id)}>{`Unfollowed`}
                                            </button>
                                            :
                                            <button
                                                disabled={disabled === u.id && true}
                                                onClick={() => onClickHandlerFollow(u.id)}>{`Followed`}
                                            </button>
                                    }
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

