import React, {useEffect} from 'react';
import {Header} from "./Header";
import {setUserData, UserAuthType} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    setUserData: (data: UserAuthType) => void
}

type OwnProps = {}

const HeaderContainer = (props: HeaderContainerPropsType) => {
    useEffect(() => {

       authAPI.me()
            .then(response => {
                !response.data.resultCode && props.setUserData(response.data.data)
            })
    }, [])
    return <Header loginUser={props.loginUser} isAuth={props.isAuth}/>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        loginUser: state.auth.login
    } as const
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {setUserData})(HeaderContainer)
