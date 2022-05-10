import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}></div>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDeqBKFgpZVpzVVt5mq8FEqSwWERHO8DcRA&usqp=CAU" alt=""/>
        </header>
    )
}