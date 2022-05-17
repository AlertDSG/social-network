import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC} from "../../redux/usersReducer";

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeFollowedStatus: (uID: string, value: boolean) => {
            let action = followAC(uID, value)
            dispatch(action)
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)