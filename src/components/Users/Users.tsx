import React from 'react';
import {InitialStateType, UserType} from "../../redux/usersReducer";
import s from "./Users.module.css"
import axios from "axios";


type UsersUIPropsType = {
    items: UserType[]
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (state: UserType[]) => void

}

export const Users = (props: UsersUIPropsType) => {

     const addState = () => {
         if (props.items.length === 0) {

             axios.get<InitialStateType >("https://social-network.samuraijs.com/api/1.0/users")
                 .then(response => {
                     props.setNewState(response.data.items)
                 })
         }
     }


    const onClickHandler = (uID: number, value: boolean) => {
        props.changeFollowedStatus(uID, value)
    }

    return (
        <div className={s.bodyPage}>
            <button onClick={addState}>+</button>
            {props.items.map(u => {

                return (
                    <div key={u.id} className={s.bodyUser}>
                        <div>
                            <img src="/" alt="ava"/>
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
    );
    // {id: v1(), followed: true, fullName: 'Dmitriy', status: 'I am a student', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: v1(), followed: true, fullName: 'Svetlana', status: 'I am a mother', location: {city: 'Minsk', country: 'Belarus'}},
    // {id: v1(), followed: false, fullName: 'Petya', status: 'I am a driver', location: {city: 'Moscow', country: 'Russia'}},
    // {id: v1(), followed: false, fullName: 'Vladimir', status: 'I am a strong', location: {city: 'Kiev', country: 'Ukraine'}},
};
