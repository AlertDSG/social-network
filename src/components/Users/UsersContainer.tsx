import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, InitialStateType, stateAC, UserType} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapDispatchPropsType = {
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        items: state.usersPage.items
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        changeFollowedStatus: (uID: number, value: boolean) => {
            let action = followAC(uID, value)
            dispatch(action)
        },
        setNewState: (newState: UserType[]) => {
            let action = stateAC(newState)
            dispatch(action)
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)