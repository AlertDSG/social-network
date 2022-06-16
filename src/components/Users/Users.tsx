import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import avatar from '../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    changeFollowedStatus: (uID: number, value: boolean) => void
    onClickPageHandler: (page: number) => void
}


export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onClickHandlerFollow = (uID: number) => {
        axios.post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${uID}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY" : "daa5219f-4bd1-4a25-b139-227a461bb757"
            }
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.changeFollowedStatus(uID, true)
                }
            })
    }
    const onClickHandlerUnFollow = (uID: number) => {
        axios.delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${uID}`, {
            withCredentials: true,
            headers: {
                "API-KEY" : "daa5219f-4bd1-4a25-b139-227a461bb757"
            }
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.changeFollowedStatus(uID, false)
                }
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
                                                onClick={() => onClickHandlerUnFollow(u.id)}>{`Unfollowed`}
                                            </button>
                                            :
                                            <button
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

