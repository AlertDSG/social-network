import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./MenuLinks.module.css"

export const MenuLinks = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>
                    Profile
                </NavLink>
                </li>
                <li><NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>
                    Message
                </NavLink>
                </li>
                <li><NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>
                    Users
                </NavLink>
                </li>
                <li><NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>
                    News
                </NavLink>
                </li>
                <li><NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>
                    Music
                </NavLink>
                </li>
            </ul>
            <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
        </nav>
    )
}