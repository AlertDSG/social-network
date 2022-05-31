import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileGetAPIType, setStateProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";

export const ContainerComponentAPI = (props: ContainerPropsType ) => {
    const userId: string = Object.values(useParams()).join()
    useEffect(() => {
        axios.get<ProfileGetAPIType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setStateProfile(response.data)
            })
    }, [])

    return <Profile data={props.data}/>
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    setStateProfile: (data: ProfileGetAPIType) => void
}

type OwnProps = {}

type ContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps


const mapStateToProps = (state: AppStateType) => {
    return {
        data: state.profilePage.data
    } as const
}


export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {setStateProfile})(ContainerComponentAPI)

