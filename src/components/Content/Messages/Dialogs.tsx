import React from 'react';
import s from "./Dialogs.module.css";
import {DialogsType} from "../../../redax/state";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

type DialogsPropsType = {
    messagesData: DialogsType
}


export const Dialogs = (props: DialogsPropsType) => {


    const dialogItems = props.messagesData.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesItems = props.messagesData.messages.map(m => <MessageItem key={m.id} message={m.message}/>)

    return (
        <section className={s.body}>
            <div className={s.dialogs}>

                {dialogItems}

            </div>
            <div>

                {messagesItems}

            </div>
        </section>
    )
}