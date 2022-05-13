import React from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Messages/Dialogs";
import {Route, Routes} from 'react-router-dom'
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {ActionsType, RootStateType} from "../../redax/state";


type StateProps = {
    appState: RootStateType
    dispatch: (action : ActionsType) => void
}


export const Content = (props: StateProps) => {
    return (
            <Routes>
                <Route path='/profile/*' element={<Profile postData={props.appState.profilePage.posts}
                                                           dispatch={props.dispatch}/>}/>
                <Route path='/dialogs/*'
                       element={<Dialogs messagesData={props.appState.dialogsPage}
                                         dispatch={props.dispatch}/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
            </Routes>
    )
}
