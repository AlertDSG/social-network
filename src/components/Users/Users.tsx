import React from 'react';
import {InitialStateType, UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";

type UsersUIPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void

}

export class Users extends React.Component<UsersUIPropsType> {

    componentDidMount() {
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewState(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onClickPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewState(response.data.items)
            })
    }


    onClickHandler = (uID: number, value: boolean) => {
        this.props.changeFollowedStatus(uID, value)
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={s.bodyPage}>
                <div>
                    {pages.map((p, i) => {
                        return (
                            <span key={i}
                                  className={this.props.currentPage === p ? s.selectedPage : ''}
                            onClick={()=>this.onClickPageHandler(p)}>
                                {p }
                            </span>
                        )
                    })
                    }

                </div>
                {
                    this.props.items.map(u => {

                        return (
                            <div key={u.id} className={s.bodyUser}>
                                <div>
                                    <img src='' alt="ava"/>
                                    <div>
                                        <button
                                            onClick={() => this.onClickHandler(u.id, !u.followed)}>{u.followed ? `followed` : `unfollowed`}</button>
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
    }
}
