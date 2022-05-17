import React from 'react';
import {Profile} from "./Profile/Profile";
import {Route, Routes} from 'react-router-dom'
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogsContainer} from "./Messages/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";




export const Content = () => {
    return (
            <Routes>
                <Route path='/profile/*' element={<Profile/>}/>
                <Route path='/dialogs/*'
                       element={<DialogsContainer/>}/>
                <Route path='/users/*' element={<UsersContainer/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
            </Routes>
    )
}
