export type RootStateType = {

}

export const store = {
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
                {id: 1, message: 'Hi, how are you?', likeCount: 10},
                {id: 1, message: 'Hi my friend', likeCount: 8},
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
    upDateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}

