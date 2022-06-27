import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogsContainer} from "./Messages/DialogsContainer";
import UsersClassContainer from "../Users/UsersContainer"
import {ProfileContainer} from "./Profile/ProfileContainer";
import {Login} from "../Login/Login";





export const Content = () => {
    return (
            <Routes>
                <Route path='/profile/*' element={<ProfileContainer/>}/>
                <Route path='/dialogs/*'
                       element={<DialogsContainer/>}/>
                <Route path='/users/*' element={<UsersClassContainer/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/music/*' element={<Music/>}/>
                <Route path='/settings/*' element={<Settings/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
    )
}
