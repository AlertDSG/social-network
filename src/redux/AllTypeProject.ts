import {UserType} from "./usersReducer";
import {ProfileGetAPIType} from "./profileReducer";

export type RootStateType = {
    dialogsPage: DialogsType
    profilePage: PostsType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type DialogsType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
export type PostsType = {
    posts: PostType[]
}
type PostType = {
    id: string
    message: string
    likesCount: number
}

type AddPostActionCreatorType = {
    type: 'ADD-POST',
    newText: string
}
type AddMessageActionCreatorType = {
    type: 'ADD-MESSAGE',
    message: string
}
type StatusFollowedActionCreatorType = {
    type: 'STATUS-FOLLOWED',
    userID: number
    followed: boolean
}
type StateActionType = {
    type: 'NEW_STATE',
    newState: UserType[]
}
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type SetTotalCountActionType = {
    type: 'SET_TOTAL_COUNT',
    totalCount: number
}
type SetIsFetchingActionType = {
    type: 'SET_IS_FETCHING',
    isFetching: boolean
}
type SetStateProfileAT = {
    type: 'SET_STATE_PROFILE',
    data: ProfileGetAPIType
}

export type ActionsType = AddPostActionCreatorType
    | AddMessageActionCreatorType
    | StatusFollowedActionCreatorType
    | StateActionType
    | SetCurrentPageActionType
    | SetTotalCountActionType
    | SetIsFetchingActionType
    | SetStateProfileAT