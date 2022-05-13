import {v1} from "uuid";

const ADD_POST = 'ADD-POST';

export type RootStateType = {
    dialogsPage: DialogsType
    profilePage: PostsType
}
export type StoreType = {
    _state: RootStateType
    addPost: (newText: string) => void
    getState: () => RootStateType
    _callSubscriber: () => void
    // upDateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
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
type PostsType = {
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
    addPost(newText) {
        let newPost: { id: string; message: string; likesCount: number; } = {
            id: v1(),
            message: newText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber()

    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost: { id: string; message: string; likesCount: number; } = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        }

    }
    // upDateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },

}

export const addPostAC = (value: string): AddPostActionCreatorType  => {

    return {
        type: ADD_POST,
        newText: value
    }
}

