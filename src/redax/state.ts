import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";


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
    newPostText: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}

export type AddPostActionCreatorType = {
    type: 'ADD-POST',
    newText: string
}
export type AddMessageActionCreatorType = {
    type: 'ADD-MESSAGE',
    message: string
}

export type ActionsType = AddPostActionCreatorType | AddMessageActionCreatorType

export const store: StoreType = {
    _state: {
        dialogsPage: {
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'Hello'},
            ],

            dialogs: [
                {id: v1(), name: 'User1'},
                {id: v1(), name: 'User2'}
            ]
        },
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 10},
                {id: v1(), message: 'Hi my friend', likesCount: 8},
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()

    }
}


