import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.css";
import {DialogsType} from "../../../redux/store";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";



type DialogsPropsType = {
    messagesData: DialogsType
    addMessage: (value : string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value) {
            setValue(e.currentTarget.value)
        }
    }

    const onClickHandler = () => {
        if(value.trim() !== '') {
            props.addMessage(value)
            setValue('')
        }
    }


    const dialogItems = props.messagesData.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const messagesItems = props.messagesData.messages.map(m => <MessageItem key={m.id} message={m.message}/>)

    return (
        <section className={s.body}>
            <div className={s.dialogs}>

                {dialogItems}

            </div>
            <div>

                {messagesItems}

                <textarea value={value} onChange={onChangeHandler}>Message</textarea>
                <div className={s.button}>
                    <button onClick={onClickHandler}>Add</button>
                </div>

            </div>

        </section>
    )
}