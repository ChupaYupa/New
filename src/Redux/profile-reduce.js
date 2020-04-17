import {setTotalCount, setUsers, toggleIsFeaching} from "./users-reducer";
import {dialogAPI} from "../components/API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE ='SET_USER_PROFILE';
const SET_STATUS ='SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: 20 },
        { id: 2, message: 'Hello, how are you?', like: 40 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newMessagesBody,
                like: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        default:
            return state;
    }

}
export const addPostActionCreator = (newMessagesBody) => ({
    type: ADD_POST, newMessagesBody
})
export const setStatusActionCreator = (status) => ({
    type: SET_STATUS, status
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => (dispatch) => {
    dialogAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data)); //получить профиль
    });
}
export const getStatus = (userId) => (dispatch) => {
    dialogAPI.getStatus(userId).then(response => {
        dispatch (setStatusActionCreator(response.data)); //получить профиль
    });
};
export const updateStatus = (status) => (dispatch) => {
    dialogAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(setStatusActionCreator(status))
        }//получить профиль
    });
}

export default profileReducer;