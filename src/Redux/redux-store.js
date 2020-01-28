import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;