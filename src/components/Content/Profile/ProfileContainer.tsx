import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setStateProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";

 export type ProfileGetAPIType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export type ClassType = {
    setStateProfile: (data: ProfileGetAPIType) => void
    data: ProfileGetAPIType
}

class ProfileClassContainer extends React.Component<ClassType> {

    componentDidMount() {
        axios.get<ProfileGetAPIType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setStateProfile(response.data)
            })
    }

    render () {
       return <Profile data={this.props.data}/>
    }
}

 const mapStateToProps = (state: AppStateType): {data: ProfileGetAPIType} => {
     return {
         data: state.profilePage.data
     }
 }

export const ProfileContainer = connect(mapStateToProps,{setStateProfile})(ProfileClassContainer)