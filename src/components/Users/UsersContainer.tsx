import {connect} from "react-redux";
import {
    follow,
    InitialStateType, setCurrentPage,
     setIsFetching, setState, setTotalCount,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";

type UsersUIPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    follow: (uID: number, value: boolean) => void
    setState: (newState: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (value: boolean) => void
}

class UsersClassContainer extends React.Component<UsersUIPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setState(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onClickPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setState(response.data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalCount={this.props.totalCount}
                                                     pageSize={this.props.pageSize}
                                                     changeFollowedStatus={this.props.follow}
                                                     currentPage={this.props.currentPage}
                                                     onClickPageHandler={this.onClickPageHandler}
                                                     items={this.props.items}/>}

        </>
    }
}


const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {follow, setState, setCurrentPage, setTotalCount, setIsFetching})(UsersClassContainer)