import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    InitialStateType, setCurrentPage,
    setIsFetching, setState, setTotalCount,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UsersUIPropsType = {
    items: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    follow: (uID: number, value: boolean) => void
    setCurrentPage: (page: number) => void
    getUsersThunkCreator:(currentPage: number, pageSize: number) => void
}

class UsersClassContainer extends React.Component<UsersUIPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onClickPageHandler = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)
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
        isFetching: state.usersPage.isFetching,
    }
}

export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        setState,
        setCurrentPage,
        setTotalCount,
        setIsFetching,
        getUsersThunkCreator,
    })
)(UsersClassContainer)