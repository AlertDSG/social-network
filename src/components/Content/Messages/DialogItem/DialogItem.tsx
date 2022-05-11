import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";


export const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path}
                     className={navData => navData.isActive ? s.active : s.item}>
                {props.name}
            </NavLink>
        </div>
    )
}