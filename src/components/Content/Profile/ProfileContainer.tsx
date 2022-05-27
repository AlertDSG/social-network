import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {InitialProfileStateType, ProfileGetAPIType, setStateProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";



export type ClassType = {
    setStateProfile: (data: ProfileGetAPIType) => void
    data: ProfileGetAPIType
}

class ProfileClassContainer extends React.Component<ClassType> {

    componentDidMount() {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                console.log(response.data.photos.small)
                console.log(response.data)
                this.props.setStateProfile(response.data)
            })
    }

    render() {
        return <Profile data={this.props.data}/>
    }
}

const mapStateToProps = (state: AppStateType): InitialProfileStateType => {
    return {
        data: state.profilePage.data,
        posts:state.profilePage.posts
    }
}



export const ProfileContainer = connect(mapStateToProps, {setStateProfile})(ProfileClassContainer)

