import React from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Messages/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";


type StateProps = {
    appState: DialogsType
}

type DialogsType = {
    postData: Array<PostDataType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
type PostDataType = {
    id: number
    text: string
    likesCount: number
}
type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}

export const Content = (props: StateProps) => {
    return (
        <main>
            <Routes>
                <Route path='/profile/*' element={<Profile postData={props.appState.postData} />}/>
                <Route path='/dialogs/*'
                       element={<Dialogs messagesData={props.appState.messagesData}
                                         dialogsData={props.appState.dialogsData}  />}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
            </Routes>
        </main>
    )
}
