export type RootStateType = {
    dialogsPage: DialogsType
    profilePage: PostsType
}
export type StoreType = {
    _state: RootStateType
    addPost: () => void
    getState: () => RootStateType
    _callSubscriber: () => void
    upDateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}
export type DialogsType = {
    messages: MessageType[]
    dialogs: DialogType[]
}
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostsType = {
    posts: PostType[]
    newPostText: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}


export const store: StoreType = {
    _state: {
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Hello'},
                {id: 4, message: 'Hello'},
            ],
            dialogs: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 1, message: 'Hi my friend', likesCount: 8},
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
    addPost() {
        let newPost: { id: number; message: string; likesCount: number; } = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber()

    },
    upDateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
}

