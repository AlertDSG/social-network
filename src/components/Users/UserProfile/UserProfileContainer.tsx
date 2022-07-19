import React, {useEffect} from "react";
import {UserProfile} from "./UserProfile";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus, updateStatus,
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {useParams} from "react-router-dom";

export const UserProfileComponentAPI = (props: ContainerPropsType) => {

    let {userId} = useParams()


    useEffect(() => {

            userId && props.getProfile(+userId)
            userId && props.getStatus(+userId)

    }, [])

    return <UserProfile data={props.data} status={props.status} updateStatus={props.updateStatus}/>
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    getStatus: (userId: number) => void
    getProfile: (userId: number) => void
    updateStatus: (status: string) => void
}

type OwnProps = {}

type ContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps


const mapStateToProps = (state: AppStateType) => {
    return {
        data: state.profilePage.data,
        status: state.profilePage.status,
        authId: state.auth.id
    } as const
}


export const UserProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus
})(UserProfileComponentAPI)

