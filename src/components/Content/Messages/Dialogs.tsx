import React from 'react';
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

type DialogsPropsType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
}
type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialogItems = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesItems = props.messagesData.map(m => <MessageItem key={m.id} message={m.message}/>)

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