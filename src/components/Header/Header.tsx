import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    loginUser?: string | null
    logout: () => void
}


export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <div className={s.logo}><img className={s.img}
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDeqBKFgpZVpzVVt5mq8FEqSwWERHO8DcRA&usqp=CAU"
                                         alt=""/></div>
            <div>
                {
                    props.isAuth
                        ? <div>{props.loginUser}-<button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>

        </header>
    )
}