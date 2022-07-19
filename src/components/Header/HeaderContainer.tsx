import React, {useEffect} from 'react';
import {Header} from "./Header";
import {getAuthUserData, logoutTC} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logoutTC: ()=> void
}

type OwnProps = {}

const HeaderContainer = (props: HeaderContainerPropsType) => {

    return <Header loginUser={props.loginUser} isAuth={props.isAuth} logout={props.logoutTC}/>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        loginUser: state.auth.login
    } as const
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {getAuthUserData,logoutTC})(HeaderContainer)
