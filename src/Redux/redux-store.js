import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    authPage:authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;