import React from 'react';
import {InitialStateType, UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";

type UsersUIPropsType = {
    items: UserType[]
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void

}

export class Users extends React.Component<UsersUIPropsType> {

    constructor(props: UsersUIPropsType) {
        super(props);
        axios.get<InitialStateType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setNewState(response.data.items)
            })
    }


    onClickHandler = (uID: number, value: boolean) => {
        this.props.changeFollowedStatus(uID, value)
    }

    render() {
        return (
            <div className={s.bodyPage}>
                {
                    this.props.items.map(u => {

                        return (
                            <div key={u.id} className={s.bodyUser}>
                                <div>
                                    <img src="/" alt="ava"/>
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
