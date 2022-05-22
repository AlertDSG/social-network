import {UserType} from "./usersReducer";

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

export type ActionsType = AddPostActionCreatorType
    | AddMessageActionCreatorType
    | StatusFollowedActionCreatorType
    | StateActionType