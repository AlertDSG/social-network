import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileGetAPIType, setStateProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    setStateProfile: (data: ProfileGetAPIType) => void
}

type OwnProps = {

}

type ClassPropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

class ProfileClassContainer extends React.Component<ClassPropsType> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setStateProfile(response.data)
            })
    }

    render() {
        return <Profile data={this.props.data}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        data: state.profilePage.data
    } as const
}



export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {setStateProfile})(ProfileClassContainer)

