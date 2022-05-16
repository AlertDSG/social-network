import React from 'react';
import {addMessageAC} from "../../../redax/dialogsReducer";
import {Dialogs} from "./Dialogs";


type DialogsPropsType = {
    // messagesData: DialogsType
    // dispatch: (action: ActionsType) => void
    store: any
}


export const DialogsContainer = (props: DialogsPropsType) => {


    const onClickHandler = (value: string) => {

        let action = addMessageAC(value)
        props.store.dispatch(action)
    }


    return (<Dialogs messagesData={props.store.getState().dialogsPage} addMessage={onClickHandler}/>)
}