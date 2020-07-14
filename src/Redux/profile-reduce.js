import {dialogAPI} from "../components/API/api";
import store from "./redux-store";
import authReducer, {getAuthUser} from "./auth-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE ='profile/SET_USER_PROFILE';
const SET_STATUS ='profile/SET_STATUS';
const SAVE_PHOTO ='profile/SAVE_PHOTO';

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: 20 },
        { id: 2, message: 'Hello, how are you?', like: 40 }
    ],
    profile: null,
    status: "it-incubator"
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
        case SAVE_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state;
    }

};
export const addPostActionCreator = (newMessagesBody) => ({
    type: ADD_POST, newMessagesBody
});
export const setStatusActionCreator = (status) => ({
    type: SET_STATUS, status
});
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO, photos
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});



//      -----------THUNK---------------
export const getProfile = (userId) => async (dispatch) => {             //получить профиль
    let response = await dialogAPI.getProfile(userId)
        dispatch (setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {              //получить статус
   let response = await dialogAPI.getStatus(userId)
        dispatch (setStatusActionCreator(response.data));
};
export const updateStatus = (status) => async (dispatch) => {           //обновить профиль
    let response = await dialogAPI.updateStatus(status)
        if(response.data.resultCode === 0 ) {
            dispatch(setStatusActionCreator(status))
        }
};
export const savePhoto = (file) => async (dispatch) => {                //сохранить фото
    let response = await dialogAPI.savePhoto(file)
    if(response.data.resultCode === 0 ) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {     //обновление профиля
debugger
    const userId = getState().authPage.id;
    const response = await  dialogAPI.saveProfile(profile)
    if(response.data.resultCode === 0 ) {
        dispatch(getProfile(userId))
    } else {
        debugger
        dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0])
    }

};
export default profileReducer;