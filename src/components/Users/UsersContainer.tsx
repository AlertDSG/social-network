import {connect} from "react-redux";
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
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export type MapDispatchPropsType = {
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
}

type UsersUIPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    changeFollowedStatus: (uID: number, value: boolean) => void
    setNewState: (newState: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void

}

class UsersClassContainer extends React.Component<UsersUIPropsType> {

    componentDidMount() {
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewState(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onClickPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setNewState(response.data.items)
            })
    }

    render() {

        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      changeFollowedStatus={this.props.changeFollowedStatus}
                      currentPage={this.props.currentPage}
                      onClickPageHandler={this.onClickPageHandler}
                      items={this.props.items}/>
    }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer)