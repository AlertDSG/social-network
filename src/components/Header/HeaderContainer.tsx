import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setUserData, UserAuthType} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    setUserData: (data: UserAuthType) => void
}

type OwnProps = {}

const HeaderContainer = (props: HeaderContainerPropsType) => {
    useEffect(() => {
        axios.get<{ data: UserAuthType }>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                props.setUserData(response.data.data)
            })
    }, [])
    return <Header loginUser={props.loginUser} isAuth={props.isAuth}/>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        loginUser: state.auth.data?.login
    } as const
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {setUserData})(HeaderContainer)
