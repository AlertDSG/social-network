import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalCountAC,
    stateAC,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapDispatchPropsType = {
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
}

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count: number) => {
            dispatch(setTotalCountAC(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)