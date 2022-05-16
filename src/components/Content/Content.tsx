import React from 'react';
import {Profile} from "./Profile/Profile";
import {Route, Routes} from 'react-router-dom'
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogsContainer} from "./Messages/DialogsContainer";


type StateProps = {
    // appState: RootStateType
    // dispatch: (action : ActionsType) => void
    store: any
}


export const Content = (props: StateProps) => {
    return (
            <Routes>
                <Route path='/profile/*' element={<Profile store={props.store}/>}/>
                <Route path='/dialogs/*'
                       element={<DialogsContainer store={props.store}/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
            </Routes>
    )
}
