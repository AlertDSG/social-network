import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {DialogActionType, dialogsReducer} from "./dialogsReducer";
import {ProfileActionType, profileReducer} from "./profileReducer";
import {UserActionType, usersReducer} from "./usersReducer";
import {AuthActionType, authReducer} from "./authReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionType>


export type AppActionType = DialogActionType | ProfileActionType | UserActionType | AuthActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

export default store;